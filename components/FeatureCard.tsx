type FeatureCardProps = {
  title: string;
  copy: string;
  tone: "yellow" | "orange" | "blue";
};

export function FeatureCard({ title, copy, tone }: FeatureCardProps) {
  return (
    <article className={`feature-card tone-${tone}`}>
      <span className="feature-mark" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}
