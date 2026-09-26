import { NextResponse } from "next/server";

const endpoint = "https://api.sendgrid.com/v3/mail/send";
const required = ["firstName", "lastName", "workEmail", "message"] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, limit = 500) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    firstName: clean(payload.firstName, 80),
    lastName: clean(payload.lastName, 80),
    workEmail: clean(payload.workEmail, 160),
    company: clean(payload.company, 120),
    country: clean(payload.country, 80),
    reason: clean(payload.reason, 120),
    message: clean(payload.message, 2000),
  };

  const missing = required.filter((name) => !fields[name]);

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Please complete every required field.", fields: missing },
      { status: 422 },
    );
  }

  if (!emailPattern.test(fields.workEmail)) {
    return NextResponse.json(
      { error: "That email address does not look right.", fields: ["workEmail"] },
      { status: 422 },
    );
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from || apiKey.startsWith("SG.replace-me")) {
    console.error("Contact form: SendGrid credentials are not configured.");
    return NextResponse.json(
      { error: "We could not send your message. Please email sales@ondeckglobal.com." },
      { status: 503 },
    );
  }

  const rows = [
    ["Name", `${fields.firstName} ${fields.lastName}`],
    ["Work email", fields.workEmail],
    ["Company", fields.company || "—"],
    ["Country", fields.country || "—"],
    ["Reason", fields.reason || "—"],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    fields.message,
  ].join("\n");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from, name: "OnDeck Global website" },
      reply_to: { email: fields.workEmail, name: `${fields.firstName} ${fields.lastName}` },
      subject: `Website enquiry — ${fields.firstName} ${fields.lastName}`,
      content: [{ type: "text/plain", value: text }],
    }),
  });

  if (!response.ok) {
    console.error("Contact form: SendGrid responded", response.status, await response.text());
    return NextResponse.json(
      { error: "We could not send your message. Please email sales@ondeckglobal.com." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
