import { professionalProfile } from "@/content/profile";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="type-body-small text-muted">
          <p className="font-medium text-foreground">
            {professionalProfile.name}
          </p>
          <p className="mt-1">{professionalProfile.location}</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
          <a
            href={professionalProfile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none"
            aria-label="Daniel Gonzalez Cuetara on GitHub (opens in a new tab)"
          >
            GitHub
          </a>
          <p className="type-body-small text-muted">
            © {new Date().getFullYear()} Daniel Gonzalez Cuetara
          </p>
        </div>
      </Container>
    </footer>
  );
}
