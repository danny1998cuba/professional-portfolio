import type {
  FeaturedProject,
  ProjectClassification,
  ProjectStatus,
  ProjectType,
  YearMonth,
} from "@/content/types";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

const classificationLabels: Record<ProjectClassification, string> = {
  client: "Client work",
  personal: "Personal project",
  experimental: "Experiment",
};

const typeLabels: Record<ProjectType, string> = {
  "web-application": "Web application",
  website: "Website",
  "mobile-application": "Mobile application",
  "developer-tool": "Developer tool",
};

const statusLabels: Record<ProjectStatus, string> = {
  production: "Production",
  "pre-launch": "Pre-launch",
  "in-development": "In development",
  archived: "Archived",
};

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function formatYearMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  return `${monthLabels[Number(month) - 1]} ${year}`;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const displayedTechnologies = project.technologies.slice(0, 3);

  return (
    <article className="flex h-full flex-col rounded-sm border border-border bg-surface p-5 sm:p-6">
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

      <h3 className="type-card-heading mt-5">{project.title}</h3>
      <p className="mt-2 font-mono text-xs text-muted">
        {formatYearMonth(project.period.start)}–
        {formatYearMonth(project.period.end)}
      </p>
      <p className="type-body-small mt-5 text-pretty text-muted">
        {project.shortDescription}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {displayedTechnologies.map((technology) => (
          <li
            key={technology}
            className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
          >
            {technology}
          </li>
        ))}
      </ul>

      {project.publicUrl ? (
        <div className="mt-auto pt-7">
          <a
            href={project.publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none"
            aria-label={`Visit the ${project.title} live website (opens in a new tab)`}
          >
            Visit live site <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : null}
    </article>
  );
}
