import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for UV Guard.",
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-shell">
        <div className="legal-header">
          <p>Effective date: {appConfig.effectiveDate}</p>
          <h1>Privacy Policy</h1>
        </div>

        <div className="legal-content">
          <section>
            <h2>What UV Guard Does</h2>
            <p>
              UV Guard is a sun-planning app for checking UV index conditions, viewing weather
              forecasts, tracking sun exposure sessions, planning tanning or outdoor time, managing
              sunscreen reminders, and saving places you care about.
            </p>
            <p>
              UV Guard provides informational estimates for planning. It is not medical advice and
              does not diagnose skin risk.
            </p>
          </section>

          <section>
            <h2>Information You Enter or Select</h2>
            <p>
              You may enter or select app settings such as goals, skin type, alert preferences,
              saved places, tanning or outdoor session details, sunscreen reminder preferences, and
              other information needed to personalize your sun planning experience.
            </p>
          </section>

          <section>
            <h2>Location Access</h2>
            <p>
              If you allow location access, UV Guard uses your location to show local UV index,
              weather, sunrise and sunset, forecasts, saved places, and sun exposure estimates. You
              can manage location permissions in your device settings.
            </p>
          </section>

          <section>
            <h2>Weather and Forecast Data</h2>
            <p>
              UV and weather forecast information may come from weather services such as Apple
              WeatherKit or platform weather APIs. Forecasts can change and may vary by provider,
              location, and device settings.
            </p>
          </section>

          <section>
            <h2>Notifications</h2>
            <p>
              If enabled, UV Guard may use notifications for UV alerts, sunscreen reminders, daily
              UV information, and session reminders. You can turn notifications off in your device
              settings.
            </p>
          </section>

          <section>
            <h2>App Data Storage</h2>
            <p>
              Some app data may be stored on your device to provide core features, such as
              preferences, saved places, alert settings, and session history. App behavior may vary
              by platform and version.
            </p>
          </section>

          <section>
            <h2>Support Requests</h2>
            <p>
              If you submit the support form, we use the information you provide to review your
              request and respond to you. Please avoid sending sensitive health information through
              the support form.
            </p>
          </section>

          <section>
            <h2>Purchases and Subscriptions</h2>
            <p>
              If UV Guard offers purchases or subscriptions, transactions are handled by Apple,
              Google, or the applicable platform. Those platforms process payment information under
              their own policies.
            </p>
          </section>

          <section>
            <h2>Analytics and Third-Party Services</h2>
            <p>
              UV Guard may use platform services necessary to provide app features, such as weather
              data, notifications, purchases, and crash or diagnostic tools. We do not claim that no
              data is collected unless that has been verified for a specific app version.
            </p>
          </section>

          <section>
            <h2>Personal Data Is Not Sold</h2>
            <p>
              We do not sell personal data. We may use information only as needed to operate,
              support, improve, and protect UV Guard.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For privacy questions, contact us through the{" "}
              <Link href={appConfig.supportPath}>UV Guard support form</Link>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
