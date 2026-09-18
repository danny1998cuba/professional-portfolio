import { Container } from "./container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  display?: boolean;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  display = false,
}: PageIntroProps) {
  return (
    <section className="page-section">
      <Container size="reading">
        <p className="type-meta text-accent">{eyebrow}</p>
        <h1
          className={`${display ? "type-display" : "type-page-heading"} mt-4 text-balance`}
        >
          {title}
        </h1>
        <p className="type-body mt-6 max-w-2xl text-pretty text-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}
