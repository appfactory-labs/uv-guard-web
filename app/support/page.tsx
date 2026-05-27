import type { Metadata } from "next";
import { SupportForm } from "@/components/SupportForm";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact support for UV Guard.",
};

export default function SupportPage() {
  return (
    <section className="support-page">
      <div className="shell support-layout">
        <div className="support-copy">
          <p>UV Guard Support</p>
          <h1>How can we help?</h1>
          <p>
            Send a note about UV forecasts, saved places, sunscreen reminders, exposure sessions,
            subscriptions, or anything else in the app.
          </p>
        </div>
        <div className="support-panel">
          <SupportForm />
        </div>
      </div>
    </section>
  );
}
