import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for UV Guard.",
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-shell">
        <div className="legal-header">
          <p>Effective date: {appConfig.effectiveDate}</p>
          <h1>Terms of Service</h1>
        </div>

        <div className="legal-content">
          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By using UV Guard, you agree to these Terms of Service. If you do not agree, do not
              use the app or this website.
            </p>
          </section>

          <section>
            <h2>App Purpose</h2>
            <p>
              UV Guard helps users view UV index information, track sun exposure, plan tanning or
              outdoor sessions, manage reminders, save locations, and review weather-based
              estimates.
            </p>
          </section>

          <section>
            <h2>Estimates and Weather Data</h2>
            <p>
              UV Guard uses available weather and forecast data, which may include services such as
              Apple WeatherKit or platform weather APIs. UV conditions, forecasts, temperatures,
              sunrise and sunset times, and estimated burn risk can be incomplete, delayed, or
              inaccurate.
            </p>
          </section>

          <section>
            <h2>Not Medical or Emergency Advice</h2>
            <p>
              UV Guard is for informational planning only. It is not medical advice, emergency
              advice, diagnosis, treatment, or a substitute for professional guidance. The app does
              not guarantee that tanning or outdoor exposure is risk-free.
            </p>
          </section>

          <section>
            <h2>User Responsibilities</h2>
            <p>
              You are responsible for deciding how to use UV Guard, reviewing current conditions,
              following public guidance, using appropriate sun protection, and making choices that
              fit your health, skin type, location, and activity.
            </p>
          </section>

          <section>
            <h2>Location and Notifications</h2>
            <p>
              UV Guard may request location and notification permissions to provide local forecasts,
              saved places, UV alerts, sunscreen reminders, daily UV information, and session
              reminders. You can manage permissions through your device settings.
            </p>
          </section>

          <section>
            <h2>Purchases, Subscriptions, and Refunds</h2>
            <p>
              If UV Guard offers paid features, purchases and subscriptions are handled by Apple,
              Google, or the applicable platform. Billing, cancellation, and refunds are managed
              through that platform where applicable.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              UV Guard, the app icon, website design, copy, and related materials are owned by App
              Factory Labs or its licensors. You may not copy, modify, or distribute them except as
              allowed by law.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              UV Guard is provided as is and as available. We do not warrant that the app will be
              uninterrupted, error-free, accurate, or available in every location.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, App Factory Labs is not liable for indirect,
              incidental, special, consequential, or punitive damages, or for decisions made based
              on UV Guard’s estimates, reminders, or weather data.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of UV Guard after updates
              means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent through the{" "}
              <Link href={appConfig.supportPath}>UV Guard support form</Link>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
