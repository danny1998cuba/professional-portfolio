import { Container } from "@/components/layout/container";
import { EngineeringVisual } from "@/components/home/engineering-visual";
import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { professionalProfile } from "@/content/profile";
import { getFeaturedProjects } from "@/content/projects";

const capabilityGroups = [
  {
    title: "Product interfaces",
    description:
      "Responsive application interfaces built with React, Next.js, Angular, and modern TypeScript patterns.",
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs, application services, webhooks, data flows, and backend integrations using Node.js and related frameworks.",
  },
  {
    title: "CMS, payments & authentication",
    description:
      "Headless CMS implementations and product integrations involving Strapi, Payload, Stripe, authentication providers, and business workflows.",
  },
  {
    title: "Delivery & infrastructure",
    description:
      "Practical deployment and operations across Linux servers, Docker, Nginx, process management, and self-hosted web infrastructure.",
  },
] as const;

const professionalLinkStyles =
  "inline-flex min-h-11 items-center rounded-sm font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
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
              <span className="whitespace-nowrap">end to end.</span>
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
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="featured-work-heading"
      >
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="featured-work-heading"
              eyebrow="Selected client projects"
              title="Featured Work"
              description="Production and pre-launch applications delivered from product requirements through implementation and deployment."
            />
            <ButtonLink href="/projects" variant="secondary">
              View all projects
            </ButtonLink>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24"
        aria-labelledby="capabilities-heading"
      >
        <Container>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Capabilities"
            title="What I build"
            description="Product-focused software across interfaces, services, integrations, and the infrastructure required to operate it."
          />

          <div className="mt-10 grid gap-x-8 gap-y-9 md:grid-cols-2">
            {capabilityGroups.map((capability) => (
              <article
                key={capability.title}
                className="border-t border-border pt-5"
              >
                <h3 className="type-card-heading">{capability.title}</h3>
                <p className="type-body-small mt-3 max-w-xl text-pretty text-muted">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="approach-heading"
      >
        <Container size="reading">
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
        </Container>
      </section>

      <section
        className="border-t border-border py-16 sm:py-20"
        aria-labelledby="availability-heading"
      >
        <Container>
          <div className="rounded-sm border border-border bg-surface p-6 sm:p-8 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="type-meta text-accent">Availability</p>
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
              <p className="type-body-small mt-4 font-medium text-foreground">
                Canadian permanent resident · No sponsorship required
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <ButtonLink href={emailHref} external>
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
