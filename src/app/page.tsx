import { Container } from "@/components/layout/container";
import { EngineeringVisual } from "@/components/home/engineering-visual";
import { DeliveryVisual } from "@/components/home/delivery-visual";
import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { professionalProfile } from "@/content/profile";
import { getHomepageFeaturedProjects } from "@/content/projects";

const capabilityGroups = [
  {
    title: "Product interfaces",
    iconPath: "M4 4h16v12H4zM8 20h8m-4-4v4",
    technologies: ["React", "Next.js", "TypeScript"],
    description:
      "Responsive application interfaces built with React, Next.js, Angular, and modern TypeScript patterns.",
  },
  {
    title: "Backend & APIs",
    iconPath: "M8 8 4 12l4 4m8-8 4 4-4 4m-3-11-2 14",
    technologies: ["Node.js", "REST APIs"],
    description:
      "REST APIs, application services, webhooks, data flows, and backend integrations using Node.js and related frameworks.",
  },
  {
    title: "CMS, payments & authentication",
    iconPath: "M4 5h16v14H4zM4 9h16M8 15h4m4-2v4m-2-2h4",
    technologies: ["Strapi", "Payload", "Stripe"],
    description:
      "Headless CMS implementations and product integrations involving Strapi, Payload, Stripe, authentication providers, and business workflows.",
  },
  {
    title: "Delivery & infrastructure",
    iconPath: "M7 18a4 4 0 0 1-1-7.9 6 6 0 0 1 11.6-1.6A4.5 4.5 0 0 1 18 18H7Z",
    technologies: ["Linux", "Docker", "Nginx"],
    description:
      "Practical deployment and operations across Linux servers, Docker, Nginx, process management, and self-hosted web infrastructure.",
  },
] as const;

const professionalLinkStyles =
  "link-feedback inline-flex min-h-11 items-center rounded-sm font-medium text-accent underline decoration-transparent underline-offset-4";

export default function Home() {
  const featuredProjects = getHomepageFeaturedProjects();
  const emailHref = `mailto:${professionalProfile.email}`;

  return (
    <>
      <section
        className="border-b border-border/40 py-8 sm:py-12 lg:py-14"
        aria-labelledby="homepage-heading"
      >
        <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <div className="min-w-0 max-w-2xl lg:max-w-none">
            <p className="type-meta inline-flex items-center gap-2 rounded-full border border-accent/10 bg-surface-tint px-3 py-1 text-accent-strong">
              <span
                className="size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {professionalProfile.location}
            </p>
            <h1
              id="homepage-heading"
              className="type-display mt-5 text-[1.875rem] leading-[1.1] text-balance min-[375px]:text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Full-stack software developer building{" "}
              <span className="text-accent">production web applications</span>{" "}
              <span className="inline-block max-w-full">end to end.</span>
            </h1>
            <p className="type-body mt-5 max-w-xl text-pretty text-muted lg:mt-6">
              I work across frontend, backend, CMS integrations, payments,
              APIs, and deployment — turning real product requirements into
              maintainable software.
            </p>

            <p className="type-caption mt-4 inline-flex rounded-full border border-border/60 bg-surface px-3 py-1.5 font-medium text-muted">
              Canadian permanent resident · No sponsorship required
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:gap-3 [&>a]:px-4 sm:[&>a]:px-5">
              <ButtonLink href="/projects">
                View projects{" "}
                <span className="hidden sm:inline" aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                View resume
                <svg
                  className="hidden size-4 sm:block"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M11.5 2.5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7m-4.5-4.5L16 7h-4.5V2.5ZM7 10h6m-6 3h6" />
                </svg>
              </ButtonLink>
            </div>

            <nav
              className="mt-3"
              aria-label="Professional profiles and contact"
            >
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <li>
                  <a
                    href={professionalProfile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={professionalLinkStyles}
                    aria-label="GitHub profile (opens in a new tab)"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={professionalProfile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={professionalLinkStyles}
                    aria-label="LinkedIn profile (opens in a new tab)"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={emailHref} className={professionalLinkStyles}>
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <EngineeringVisual />
        </Container>
      </section>

      <section
        className="pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-18 lg:pb-20"
        aria-labelledby="featured-work-heading"
      >
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="featured-work-heading"
              eyebrow="Selected projects"
              title="Featured Work"
              description="Production and pre-launch applications delivered from product requirements through implementation and deployment."
            />
            <ButtonLink href="/projects" variant="secondary">
              View all projects
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="min-w-0">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className="pb-14 sm:pb-16 lg:pb-20"
        aria-labelledby="capabilities-heading"
      >
        <Container>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Capabilities"
            title="What I build"
            description="Product-focused software across interfaces, services, integrations, and the infrastructure required to operate it."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((capability) => (
              <article
                key={capability.title}
                className="flex min-w-0 flex-col rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-surface-tint text-accent" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <path d={capability.iconPath} />
                  </svg>
                </div>
                <h3 className="mt-5 text-[1.0625rem] leading-6 font-semibold tracking-[-0.01em]">{capability.title}</h3>
                <p className="type-body-small mt-3 text-pretty text-muted">
                  {capability.description}
                </p>
                <div className="mt-auto pt-6">
                  <ul className="flex flex-wrap gap-1.5 border-t border-border/30 pt-4" aria-label={`${capability.title} technologies`}>
                    {capability.technologies.map((technology) => (
                      <li key={technology} className="rounded-md bg-surface-tint px-2 py-1 font-mono text-[0.6875rem] text-muted">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="pb-14 sm:pb-16 lg:pb-20"
        aria-labelledby="approach-heading"
      >
        <Container>
          <div className="grid items-center gap-8 rounded-3xl border border-border/40 bg-surface-tint/70 p-5 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 lg:p-10">
            <div className="min-w-0 lg:order-2">
              <h2 id="approach-heading" className="type-section-heading">
                From requirements to production
              </h2>
              <div className="type-body mt-6 space-y-5 text-pretty text-muted">
                <p>
                  My strongest work has involved owning complete client
                  applications: understanding the business rules, building the
                  interface and backend integrations, shaping CMS workflows, and
                  supporting the product through deployment and maintenance.
                </p>
                <p>
                  I am comfortable working full-stack, while also being a strong
                  fit for frontend-heavy roles where product UI, component
                  architecture, API integration, and responsive implementation are
                  central.
                </p>
              </div>
            </div>
            <DeliveryVisual />
          </div>
        </Container>
      </section>

      <section
        className="pb-14 sm:pb-16 lg:pb-20"
        aria-labelledby="availability-heading"
      >
        <Container>
          <div className="grid items-center gap-7 rounded-3xl border border-border/40 bg-surface p-5 shadow-soft sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:p-9">
            <div className="max-w-2xl">
              <p className="section-eyebrow type-meta text-accent">Availability</p>
              <h2
                id="availability-heading"
                className="type-section-heading mt-3 text-balance"
              >
                Looking for my next software development role
              </h2>
              <p className="type-body mt-5 text-pretty text-muted">
                I am currently exploring frontend, full-stack, and software
                developer opportunities in Canada, including remote roles and
                positions compatible with Kingston, Ontario.
              </p>
              <p className="type-body-small mt-4 inline-flex rounded-full border border-accent/15 bg-surface-tint px-3 py-1.5 font-medium text-accent-strong">
                Canadian permanent resident · No sponsorship required
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={emailHref} external>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
                </svg>
                Email me
              </ButtonLink>
              <ButtonLink
                href={professionalProfile.links.linkedin}
                variant="secondary"
                external
                newTab
                ariaLabel="LinkedIn profile (opens in a new tab)"
              >
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
