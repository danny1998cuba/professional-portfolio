import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createElement } from "react";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import {
  getCaseStudyBySlug,
  hasCaseStudyContent,
} from "@/content/case-studies";
import {
  classificationLabels,
  formatProjectPeriod,
  statusLabels,
  typeLabels,
} from "@/content/project-display";
import {
  getAllProjects,
  getProjectBySlug,
  hasCaseStudy,
} from "@/content/projects";
import { createPageMetadata } from "@/content/site";
import { createCaseStudyBreadcrumbs } from "@/content/structured-data";
import type { FeaturedProject } from "@/content/types";

export function generateStaticParams() {
  return getAllProjects()
    .filter((project) =>
      hasCaseStudy(project) && hasCaseStudyContent(project.slug),
    )
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (
    !project ||
    !hasCaseStudy(project) ||
    !hasCaseStudyContent(project.slug)
  ) {
    notFound();
  }

  return createPageMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
  });
}

function getDeliveryLabel(project: FeaturedProject): string {
  return project.delivery.soleDeveloper
    ? "Sole developer, end to end"
    : "End-to-end delivery";
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudyComponent = getCaseStudyBySlug(slug);

  if (!project || !hasCaseStudy(project) || !caseStudyComponent) {
    notFound();
  }

  const caseStudy = createElement(caseStudyComponent);
  const breadcrumbs = createCaseStudyBreadcrumbs(project.title, project.slug);

  return (
    <article className="min-w-0">
      <JsonLd data={breadcrumbs} />
      <header className="border-b border-border/40 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pb-16">
        <Container>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none"
          >
            <span aria-hidden="true">←</span> Back to projects
          </Link>

          <div className="mt-6 grid items-start gap-8 sm:mt-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0 lg:pt-2">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <p className="type-meta text-muted">
                  {classificationLabels[project.classification]} · {typeLabels[project.type]}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase ${
                    project.status === "pre-launch"
                      ? "border-accent/35 bg-accent/5 text-accent-strong"
                      : "border-emerald-200 bg-emerald-50 text-emerald-800"
                  }`}
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
                  {statusLabels[project.status]}
                </span>
              </div>

              <h1 className="type-display mt-5 text-[2rem] leading-[1.1] text-balance [overflow-wrap:anywhere] sm:text-[2.5rem] lg:text-[3.25rem]">
                {project.title}
              </h1>
              <p className="type-body mt-5 max-w-2xl text-pretty text-muted">
                {project.shortDescription}
              </p>

              {project.publicUrl ? (
                <div className="mt-7">
                  <ButtonLink
                    href={project.publicUrl}
                    external
                    newTab
                    ariaLabel={`Visit the ${project.title} live website (opens in a new tab)`}
                  >
                    Visit live site <span aria-hidden="true">↗</span>
                  </ButtonLink>
                </div>
              ) : null}

              <div className="mt-5 flex items-start gap-2.5 text-muted">
                <svg className="mt-1 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M6 10h12v11H6ZM8 10V6a4 4 0 0 1 8 0v4" />
                </svg>
                <p className="type-body-small max-w-xl">
                  {project.sourceCode.availability === "proprietary"
                    ? "Client source code is proprietary and not publicly available."
                    : project.sourceCode.availability === "not-published"
                      ? "Source code is not publicly available."
                      : "Source code is publicly available."}
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-2">
                <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                  <dt className="type-meta text-muted">Timeline</dt>
                  <dd className="mt-2 font-mono text-sm font-medium">
                    {formatProjectPeriod(project.period)}
                  </dd>
                </div>
                <div>
                  <dt className="type-meta text-muted">Status</dt>
                  <dd className="mt-2 text-sm font-semibold">
                    {statusLabels[project.status]}
                  </dd>
                </div>
                <div>
                  <dt className="type-meta text-muted">Delivery</dt>
                  <dd className="mt-2 text-sm font-medium text-pretty">
                    {getDeliveryLabel(project)}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-border/40 pt-5">
                <h2 className="type-meta text-muted">Technologies</h2>
                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border/30 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted [overflow-wrap:anywhere]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="border-b border-border/30 bg-surface py-12 sm:py-14 lg:py-16" aria-label="Case study">
        <Container size="reading" className="[overflow-wrap:anywhere]">
          {caseStudy}
        </Container>
      </section>

      <footer className="py-10 sm:py-12 lg:py-14">
        <Container size="reading">
          <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:flex-row sm:justify-between sm:p-6">
            <ButtonLink href="/projects">Back to projects</ButtonLink>
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
        </Container>
      </footer>
    </article>
  );
}
