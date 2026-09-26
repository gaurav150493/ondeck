"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRightIcon } from "@/common/icons";
import styles from "./Contact.module.scss";
import { form, formFields } from "./contact.constants";

type Status = "idle" | "sending" | "sent" | "failed";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState<string[]>([]);
  const node = useRef<HTMLFormElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");
    setInvalid([]);

    const body = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("failed");
        setMessage(result.error ?? "Something went wrong. Please try again.");
        setInvalid(Array.isArray(result.fields) ? result.fields : []);
        return;
      }

      setStatus("sent");
      setMessage("Thanks — your message is on its way. We will be in touch shortly.");
      node.current?.reset();
    } catch {
      setStatus("failed");
      setMessage("We could not reach the server. Please email sales@ondeckglobal.com.");
    }
  }

  return (
    <form ref={node} className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.formHead}>
        <h2 className={styles.formTitle}>{form.title}</h2>
        <p className={styles.formSubtitle}>{form.subtitle}</p>
      </div>

      <div className={styles.fields}>
        {formFields.map((field) => (
          <div
            key={field.name}
            className={`${styles.field} ${field.half ? styles.fieldHalf : ""}`}
          >
            <label className={styles.label} htmlFor={field.name}>
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                className={`${styles.control} ${styles.textarea} ${invalid.includes(field.name) ? styles.controlInvalid : ""}`}
                placeholder={field.placeholder}
                rows={4}
                maxLength={2000}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                className={`${styles.control} ${invalid.includes(field.name) ? styles.controlInvalid : ""}`}
                defaultValue=""
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                className={`${styles.control} ${invalid.includes(field.name) ? styles.controlInvalid : ""}`}
                placeholder={field.placeholder}
                maxLength={160}
              />
            )}
          </div>
        ))}
      </div>

      <input
        type="text"
        name="website"
        className={styles.trap}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>{form.consent}</span>
      </label>

      {message ? (
        <p className={status === "sent" ? styles.formSent : styles.formError} role="status">
          {message}
        </p>
      ) : null}

      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : form.submit}
        <ArrowRightIcon />
      </button>
    </form>
  );
}
