import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import {
  capabilityLabels,
  classificationLabels,
  formatProjectPeriod,
  statusLabels,
  typeLabels,
} from "@/content/project-display";
import { hasCaseStudy } from "@/content/projects";
import type { FeaturedProject, SecondaryProject } from "@/content/types";

type ProjectCardProps =
  | {
      project: FeaturedProject;
      variant?: "compact" | "detailed";
    }
  | {
      project: SecondaryProject;
      variant: "secondary";
    };

const secondaryActionStyles =
  "inline-flex min-h-11 items-center rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none";

// Homepage presentation only; project facts remain in the content registry.
const compactPreviews: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  "comidas-bracamonte": {
    src: "/projects/comidas-bracamonte/plan-and-postal-code.webp",
    alt: "Comidas Bracamonte subscription plans and postal-code configuration.",
    width: 1600,
    height: 1022,
  },
  "madres-de-la-leche": {
    src: "/projects/madres-de-la-leche/event-detail.webp",
    alt: "Madres de la Leche event page with meeting information and an event flyer.",
    width: 1137,
    height: 1480,
  },
  tipstertotal: {
    src: "/projects/tipstertotal/analyst-marketplace.webp",
    alt: "Tipstertotal analyst marketplace with independent subscription profiles.",
    width: 790,
    height: 1000,
  },
};

export function ProjectCard(props: ProjectCardProps) {
  if (props.variant === "secondary") {
    const { project } = props;
    const displayedTechnologies = project.technologies.slice(0, 5);

    return (
      <article className="flex h-full flex-col rounded-sm border border-border bg-background p-5 sm:p-6">
        <p className="type-meta text-muted">
          {classificationLabels[project.classification]} · {typeLabels[project.type]}
        </p>
        <h3 className="type-card-heading mt-4 text-balance">{project.title}</h3>
        <p className="type-body-small mt-3 text-pretty text-muted">
          {project.shortDescription}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {displayedTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-6">
          {project.externalActions.map((action) => (
            <a
              key={`${action.label}-${action.url}`}
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryActionStyles}
              aria-label={`${action.label} for ${project.title} (opens in a new tab)`}
            >
              {action.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </article>
    );
  }

  const { project } = props;
  const variant = props.variant ?? "compact";
  const isDetailed = variant === "detailed";
  const displayedTechnologies = project.technologies.slice(0, 4);
  const displayedCapabilities = project.capabilities.slice(0, 6);
  const caseStudyAvailable = hasCaseStudy(project);
  const preview = !isDetailed ? compactPreviews[project.slug] : undefined;
  const statusBadge = (
    <span
      className={`rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase ${
        project.status === "pre-launch"
          ? "border-accent/35 bg-accent/5 text-accent-strong"
          : isDetailed
            ? "border-border bg-background text-muted"
            : "border-emerald-200 bg-emerald-50 text-emerald-800"
      } ${!isDetailed ? "inline-flex items-center gap-1.5" : ""}`}
    >
      {!isDetailed ? <span className="size-1.5 rounded-full bg-current" aria-hidden="true" /> : null}
      {statusLabels[project.status]}
    </span>
  );

  const content = (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="type-meta text-muted">
          {classificationLabels[project.classification]} · {typeLabels[project.type]}
        </p>
        {isDetailed ? statusBadge : null}
      </div>

      <h3 className={`type-card-heading text-balance ${isDetailed ? "mt-5" : "mt-4"}`}>
        {project.title}
      </h3>
      {isDetailed ? (
        <p className="mt-2 font-mono text-xs text-muted">
          {formatProjectPeriod(project.period)}
        </p>
      ) : (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <p className="font-mono text-xs text-muted">
            {formatProjectPeriod(project.period)}
          </p>
          {statusBadge}
        </div>
      )}
      <p
        className={`type-body-small mt-5 text-pretty text-muted ${
          isDetailed ? "max-w-3xl" : ""
        }`}
      >
        {project.shortDescription}
      </p>

      <div className={isDetailed ? "mt-7 grid gap-6 md:grid-cols-2" : "mt-6"}>
        <div>
          {isDetailed ? (
            <p className="type-meta mb-3 text-muted">Technologies</p>
          ) : null}
          <ul
            className="flex flex-wrap gap-2"
            aria-label={`${project.title} technologies`}
          >
            {displayedTechnologies.map((technology) => (
              <li
                key={technology}
                className={isDetailed
                  ? "rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
                  : "rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted"}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        {isDetailed ? (
          <div>
            <p className="type-meta mb-3 text-muted">Capabilities</p>
            <ul
              className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted"
              aria-label={`${project.title} capabilities`}
            >
              {displayedCapabilities.map((capability) => (
                <li key={capability} className="flex items-center gap-2">
                  <span className="text-accent" aria-hidden="true">
                    •
                  </span>
                  {capabilityLabels[capability]}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className={`mt-auto flex flex-wrap gap-3 pt-7 ${!isDetailed ? "[&>a]:px-3" : ""}`}>
        {caseStudyAvailable ? (
          <ButtonLink href={`/projects/${project.slug}`}>
            View case study
          </ButtonLink>
        ) : null}
        {project.publicUrl ? (
          <ButtonLink
            href={project.publicUrl}
            variant="secondary"
            external
            newTab
            ariaLabel={`Visit the ${project.title} live website (opens in a new tab)`}
          >
            Visit live site <span aria-hidden="true">↗</span>
          </ButtonLink>
        ) : null}
      </div>
    </>
  );

  return (
    <article
      className={isDetailed
        ? "flex h-full flex-col rounded-sm border border-border bg-surface p-6 sm:p-8"
        : "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-surface shadow-soft transition-[border-color,box-shadow] duration-150 hover:border-border hover:shadow-md motion-reduce:transition-none"}
    >
      {preview ? (
        <div className="border-b border-border/30 bg-surface-tint/60 p-3">
          <div className="aspect-4/3 overflow-hidden rounded-lg border border-border/40 bg-background">
            <Image
              src={preview.src}
              alt={preview.alt}
              width={preview.width}
              height={preview.height}
              loading="lazy"
              sizes="(min-width: 1200px) 20.5rem, (min-width: 1024px) calc((100vw - 11rem) / 3), (min-width: 640px) calc((100vw - 7rem) / 2), calc(100vw - 4rem)"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      ) : null}
      {isDetailed ? content : (
        <div className="flex flex-1 flex-col p-5">{content}</div>
      )}
    </article>
  );
}
