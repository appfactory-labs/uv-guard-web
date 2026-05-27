import { DownloadButtons } from "@/components/DownloadButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { PhoneFrame } from "@/components/PhoneFrame";

const features = [
  {
    title: "Check today’s UV at a glance",
    copy: "See current UV, peak UV, temperature, sunrise, sunset, and the forecast for the days ahead.",
    tone: "yellow" as const,
  },
  {
    title: "Track sun exposure sessions",
    copy: "Start a session, monitor time in the sun, and keep an eye on estimated burn risk while you’re outside.",
    tone: "orange" as const,
  },
  {
    title: "Get smarter sun reminders",
    copy: "Set sunscreen and UV alerts based on your preferences, location, and selected skin type.",
    tone: "blue" as const,
  },
];

const steps = [
  {
    title: "Set your sun profile",
    copy: "Choose your skin type, goals, alert preferences, and location.",
  },
  {
    title: "Check the UV before you go",
    copy: "Use the dashboard to see current UV, peak UV, weather, and forecast details.",
  },
  {
    title: "Start a sun session",
    copy: "Track exposure, get reminders, and review your weekly sun time.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Plan your sun time with confidence.</h1>
            <p>
              UV Guard helps you check today’s UV, track sun exposure, plan tanning sessions, and
              get reminders based on your location and skin type.
            </p>
            <DownloadButtons />
          </div>
          <PhoneFrame />
        </div>
      </section>

      <section className="section feature-section" aria-labelledby="features-heading">
        <div className="shell">
          <div className="section-heading">
            <h2 id="features-heading">Sun planning that stays simple.</h2>
            <p>Forecasts, exposure sessions, and reminders in one calm place.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section steps-section" aria-labelledby="steps-heading">
        <div className="shell split-layout">
          <div className="section-heading left">
            <h2 id="steps-heading">Plan before you step outside.</h2>
            <p>UV Guard turns WeatherKit-backed UV and forecast details into a quick routine.</p>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => (
              <article className="step-row" key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" aria-labelledby="trust-heading">
        <div className="shell trust-inner">
          <div>
            <h2 id="trust-heading">Built for simple, personal sun planning.</h2>
            <p>
              UV Guard is designed to help you understand sun conditions and manage your own
              reminders. Estimates are based on available weather data, your selected skin type, and
              your app settings.
            </p>
          </div>
          <div className="trust-ring" aria-hidden="true">
            <span>UV</span>
          </div>
        </div>
      </section>

      <section className="section final-cta" aria-labelledby="final-heading">
        <div className="shell cta-inner">
          <h2 id="final-heading">Know the UV before you step outside.</h2>
          <p>Use UV Guard to plan sunny days, tanning sessions, sunscreen reminders, and outdoor time.</p>
          <DownloadButtons compact />
        </div>
      </section>
    </>
  );
}
