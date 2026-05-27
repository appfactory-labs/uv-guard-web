"use client";

import { FormEvent, useRef, useState } from "react";
import { appConfig } from "@/lib/app-config";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function SupportForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function submitSupportRequest(form: HTMLFormElement) {
    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setError("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(appConfig.supportApiPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Support request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitSupportRequest(event.currentTarget);
  }

  function handleButtonClick() {
    const form = formRef.current;

    if (!form || !form.reportValidity()) {
      return;
    }

    void submitSupportRequest(form);
  }

  return (
    <form className="support-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="support-name">Name</label>
          <input id="support-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="support-email">Email</label>
          <input id="support-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="support-platform">Platform</label>
        <select id="support-platform" name="platform" defaultValue="" required>
          <option value="" disabled>
            Select platform
          </option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="support-subject">Subject</label>
        <input id="support-subject" name="subject" required />
      </div>

      <div className="field">
        <label htmlFor="support-message">Message</label>
        <textarea id="support-message" name="message" rows={6} required />
      </div>

      <button
        className="form-submit"
        disabled={status === "submitting"}
        onClick={handleButtonClick}
        type="button"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "success" ? (
        <p className="form-success">Thanks, your message has been sent. We’ll get back to you soon.</p>
      ) : null}
      {status === "error" ? <p className="form-error">{error}</p> : null}
    </form>
  );
}
