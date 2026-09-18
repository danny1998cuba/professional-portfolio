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

  return (
    <article
      className={`flex h-full flex-col rounded-sm border border-border bg-surface ${
        isDetailed ? "p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="type-meta text-muted">
          {classificationLabels[project.classification]} · {typeLabels[project.type]}
        </p>
        <span
          className={`rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase ${
            project.status === "pre-launch"
              ? "border-accent/35 bg-accent/5 text-accent-strong"
              : "border-border bg-background text-muted"
          }`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <h3 className="type-card-heading mt-5 text-balance">{project.title}</h3>
      <p className="mt-2 font-mono text-xs text-muted">
        {formatProjectPeriod(project.period)}
      </p>
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
                className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
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

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
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
    </article>
  );
}
