import { ArrowRightIcon } from "@/common/icons";
import styles from "./Contact.module.scss";
import { form, formFields } from "./contact.constants";

export function ContactForm() {
  return (
    <form className={styles.form}>
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
                className={`${styles.control} ${styles.textarea}`}
                placeholder={field.placeholder}
                rows={4}
                maxLength={500}
              />
            ) : field.type === "select" ? (
              <select id={field.name} name={field.name} className={styles.control} defaultValue="">
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
                className={styles.control}
                placeholder={field.placeholder}
                maxLength={500}
              />
            )}
          </div>
        ))}
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>{form.consent}</span>
      </label>

      <button type="submit" className={styles.submit}>
        {form.submit}
        <ArrowRightIcon />
      </button>
    </form>
  );
}
