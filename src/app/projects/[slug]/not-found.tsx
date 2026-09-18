import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";

export default function ProjectNotFound() {
  return (
    <section className="page-section">
      <Container size="reading">
        <p className="type-meta text-accent">Project not found</p>
        <h1 className="type-page-heading mt-4 text-balance">
          This case study is not available.
        </h1>
        <p className="type-body mt-6 text-pretty text-muted">
          The project may not exist, or its case study has not been published.
        </p>
        <div className="mt-8">
          <ButtonLink href="/projects">Back to projects</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
