import { Container } from "./container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  display?: boolean;
  size?: "site" | "reading";
}

export function PageIntro({
  eyebrow,
  title,
  description,
  display = false,
  size = "reading",
}: PageIntroProps) {
  return (
    <section className="page-section">
      <Container size={size}>
        <p className="section-eyebrow type-meta text-accent">{eyebrow}</p>
        <h1
          className={`${display ? "type-display" : "type-page-heading"} mt-4 text-balance`}
        >
          {title}
        </h1>
        <p className="type-lead mt-5 max-w-2xl text-pretty text-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}
