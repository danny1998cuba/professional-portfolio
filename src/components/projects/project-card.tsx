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
  "inline-flex min-h-11 items-center gap-1.5 rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none";

const secondaryIconPaths: Record<SecondaryProject["type"], string> = {
  "mobile-application": "M7 3h10v18H7ZM10 17h4",
  "desktop-application": "M3 4h18v13H3ZM8 21h8m-4-4v4",
  "developer-tool": "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16",
  website: "M3 4h18v16H3ZM3 9h18m-13 0v11M6 6.5h.01m3 0h.01",
  "web-application": "M3 4h18v16H3ZM3 9h18m-13 0v11",
};

// Shared gallery presentation; project facts remain in the content registry.
const projectPreviews: Record<
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
    src: "/projects/madres-de-la-leche/home-madres.webp",
    alt: "Madres de la Leche home screen introducing the breastfeeding support association.",
    width: 1909,
    height: 910,
  },
  tipstertotal: {
    src: "/projects/tipstertotal/home-tipster.webp",
    alt: "Tipstertotal pre-launch website home screen.",
    width: 1909,
    height: 910,
  },
};

export function ProjectCard(props: ProjectCardProps) {
  if (props.variant === "secondary") {
    const { project } = props;
    const displayedTechnologies = project.technologies.slice(0, 5);

    return (
      <article className="flex h-full min-w-0 flex-col rounded-2xl border border-border/50 bg-surface p-5 transition-colors duration-150 hover:border-border motion-reduce:transition-none sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-tint text-accent" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
              <path d={secondaryIconPaths[project.type]} />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="type-meta text-muted">
              {classificationLabels[project.classification]} · {typeLabels[project.type]}
            </p>
            <h3 className="type-card-heading mt-2 text-balance">{project.title}</h3>
          </div>
        </div>
        <p className="type-body-small mt-4 text-pretty text-muted">
          {project.shortDescription}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {displayedTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-surface-tint px-2 py-1 font-mono text-[0.6875rem] text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-border/30 pt-3 text-sm">
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
        </div>
      </article>
    );
  }

  const { project } = props;
  const variant = props.variant ?? "compact";
  const isDetailed = variant === "detailed";
  const displayedTechnologies = isDetailed ? project.technologies : project.technologies.slice(0, 4);
  const displayedCapabilities = project.capabilities.slice(0, 6);
  const caseStudyAvailable = hasCaseStudy(project);
  const preview = projectPreviews[project.slug];
  const portraitPreview = preview && preview.height > preview.width;
  const statusBadge = (
    <span
      className={`rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase ${
        project.status === "pre-launch"
          ? "border-accent/35 bg-accent/5 text-accent-strong"
          : "border-emerald-200 bg-emerald-50 text-emerald-800"
      } inline-flex items-center gap-1.5`}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
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

      <h3 className={`text-balance ${isDetailed ? "mt-5 text-2xl leading-tight font-bold tracking-[-0.02em] sm:text-[1.75rem]" : "type-card-heading mt-4"}`}>
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

      <div className={isDetailed ? "mt-6 space-y-5" : "mt-6"}>
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
                  ? "rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted"
                  : "rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted"}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        {isDetailed ? (
          <div className="rounded-xl border border-border/30 bg-surface-tint/60 p-4">
            <p className="type-meta mb-3 text-muted">Capabilities</p>
            <ul
              className="grid gap-x-4 gap-y-2 text-[0.8125rem] text-muted sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              aria-label={`${project.title} capabilities`}
            >
              {displayedCapabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <span className="shrink-0 text-accent" aria-hidden="true">
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
        ? "grid h-full min-w-0 overflow-hidden rounded-2xl border border-border/50 bg-surface shadow-soft transition-[border-color,box-shadow] duration-150 hover:border-border hover:shadow-md motion-reduce:transition-none lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
        : "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-surface shadow-soft transition-[border-color,box-shadow] duration-150 hover:border-border hover:shadow-md motion-reduce:transition-none"}
    >
      {preview ? (
        <div className={isDetailed
          ? "flex min-w-0 items-center justify-center border-b border-border/30 bg-surface-tint/70 p-5 sm:p-7 lg:order-2 lg:border-b-0 lg:border-l lg:p-8"
          : "border-b border-border/30 bg-surface-tint/60 p-3"}>
          <div className={isDetailed
            ? `w-full overflow-hidden rounded-xl border border-border/40 bg-background shadow-soft ${portraitPreview ? "aspect-[4/5] max-w-[22rem]" : "aspect-[8/5]"}`
            : "aspect-[8/5] overflow-hidden rounded-lg border border-border/40 bg-background"}>
            <Image
              src={preview.src}
              alt={preview.alt}
              width={preview.width}
              height={preview.height}
              loading="lazy"
              sizes={isDetailed
                ? portraitPreview
                  ? "(min-width: 640px) 22rem, calc(100vw - 5.25rem)"
                  : "(min-width: 1200px) 28rem, (min-width: 1024px) calc((100vw - 16rem) / 2), (min-width: 640px) calc(100vw - 7.75rem), calc(100vw - 5.25rem)"
                : "(min-width: 1200px) 20.5rem, (min-width: 1024px) calc((100vw - 11rem) / 3), (min-width: 640px) calc((100vw - 7rem) / 2), calc(100vw - 4rem)"}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : null}
      <div className={isDetailed ? "flex min-w-0 flex-col p-5 sm:p-7 lg:order-1 lg:p-8" : "flex flex-1 flex-col p-5"}>{content}</div>
    </article>
  );
}
