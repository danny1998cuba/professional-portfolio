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
    <article>
      <JsonLd data={breadcrumbs} />
      <header className="border-b border-border py-12 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none"
          >
            <span aria-hidden="true">←</span>&nbsp; Back to projects
          </Link>

          <div className="mt-9 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="type-meta text-muted">
                {classificationLabels[project.classification]} · {typeLabels[project.type]}
              </p>
              <span
                className={`rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase ${
                  project.status === "pre-launch"
                    ? "border-accent/35 bg-accent/5 text-accent-strong"
                    : "border-border bg-surface text-muted"
                }`}
              >
                {statusLabels[project.status]}
              </span>
            </div>

            <h1 className="type-page-heading mt-5 text-balance">
              {project.title}
            </h1>
            <p className="type-body mt-6 max-w-3xl text-pretty text-muted">
              {project.shortDescription}
            </p>

            <dl className="mt-9 grid gap-x-8 gap-y-6 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="type-meta text-muted">Timeline</dt>
                <dd className="mt-2 font-medium">
                  {formatProjectPeriod(project.period)}
                </dd>
              </div>
              <div>
                <dt className="type-meta text-muted">Status</dt>
                <dd className="mt-2 font-medium">
                  {statusLabels[project.status]}
                </dd>
              </div>
              <div>
                <dt className="type-meta text-muted">Delivery</dt>
                <dd className="mt-2 font-medium">
                  {getDeliveryLabel(project)}
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <h2 className="type-meta text-muted">Technologies</h2>
              <ul
                className="mt-3 flex flex-wrap gap-2"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="type-body-small max-w-xl text-muted">
                {project.sourceCode.availability === "proprietary"
                  ? "Client source code is proprietary and not publicly available."
                  : project.sourceCode.availability === "not-published"
                    ? "Source code is not publicly available."
                    : "Source code is publicly available."}
              </p>
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
          </div>
        </Container>
      </header>

      <section className="py-14 sm:py-16 lg:py-20" aria-label="Case study">
        <Container size="reading">
          {caseStudy}
        </Container>
      </section>

      <footer className="border-t border-border bg-surface py-10 sm:py-12">
        <Container size="reading" className="flex flex-wrap gap-3">
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
        </Container>
      </footer>
    </article>
  );
}
