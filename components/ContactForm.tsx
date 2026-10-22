"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdeaqwle";
// Google Apps Script web app that emails an automatic confirmation (see scripts/auto-reply.gs).
const AUTO_REPLY_URL =
  "https://script.google.com/macros/s/AKfycbyzCPSGzfp6hJMcKrMW4qjwnm0L3qCfnesA39GwKYBqkJEGH5sihGFwTQF0Fb4ANeQ_7w/exec";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(
    null,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setStatus({
          type: "error",
          text: "Your message could not be sent. Please try again or email dol.brian23@gmail.com.",
        });
        return;
      }

      if (AUTO_REPLY_URL) {
        const params = new URLSearchParams();
        for (const field of ["name", "email", "subject", "_gotcha"]) {
          params.set(field, String(formData.get(field) ?? ""));
        }
        void fetch(AUTO_REPLY_URL, { method: "POST", mode: "no-cors", body: params }).catch(
          () => undefined,
        );
      }

      form.reset();
      setStatus({
        type: "success",
        text: AUTO_REPLY_URL
          ? "Thanks for reaching out. Your message has been sent, and a confirmation email is on its way."
          : "Thanks for reaching out. Your message has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        text: "We couldn't connect to the form service. Please try again or email dol.brian23@gmail.com.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="contact-form-row">
        <label>
          Your name
          <input type="text" name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
      </div>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          maxLength={150}
          required
        />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} maxLength={4000} required />
      </label>
      <button className="contact-button" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
        {!submitting && <span aria-hidden="true">↗</span>}
      </button>
      {status && (
        <p
          className={`contact-form-status contact-form-${status.type}`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
