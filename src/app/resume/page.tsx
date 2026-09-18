import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { professionalProfile } from "@/content/profile";
import { getProjectBySlug } from "@/content/projects";

const technologyGroups = [
  {
    title: "Frontend",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "Expo",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    technologies: [
      "Node.js",
      "NestJS",
      "Fastify",
      "Express.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Webhooks",
    ],
  },
  {
    title: "Data & CMS",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Drizzle ORM",
      "Prisma",
      "Strapi",
      "Payload CMS",
    ],
  },
  {
    title: "Product integrations",
    technologies: [
      "Stripe",
      "Redsys",
      "Wise API",
      "Clerk",
      "Better Auth",
      "Supabase",
    ],
  },
  {
    title: "Delivery",
    technologies: [
      "Docker",
      "Linux",
      "VPS deployments",
      "Nginx",
      "PM2",
      "Dokploy",
      "Git",
      "CI/CD workflows",
    ],
  },
] as const;

const selectedProjectSlugs = ["gas-tracker", "sonner-next-intl"] as const;

const selectedProjectLinks = Object.fromEntries(
  selectedProjectSlugs.map((slug) => {
    const project = getProjectBySlug(slug);
    return [slug, project && !project.featured ? project.externalActions : []];
  }),
) as Record<(typeof selectedProjectSlugs)[number], readonly { label: string; url: string }[]>;

const textLinkStyles =
  "inline-flex min-h-11 items-center rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none";

interface ResumeSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  surface?: boolean;
}

function ResumeSection({
  id,
  title,
  children,
  surface = false,
}: ResumeSectionProps) {
  return (
    <section
      className={`border-t border-border py-14 sm:py-16 ${surface ? "bg-surface" : ""}`}
      aria-labelledby={id}
    >
      <Container>
        <div className="grid gap-7 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
          <h2 id={id} className="type-section-heading text-balance">
            {title}
          </h2>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
}

export default function ResumePage() {
  const emailHref = `mailto:${professionalProfile.email}`;

  return (
    <>
      <header className="page-section">
        <Container size="reading">
          <h1 className="type-page-heading text-balance">Resume</h1>
          <p className="type-body mt-6 text-pretty text-muted">
            Full-stack software developer based in Kingston, Ontario, building
            production web applications across frontend, backend, CMS
            integrations, payments, APIs, and deployment.
          </p>
          <p className="type-body-small mt-5 font-medium text-foreground">
            Canadian permanent resident · Authorized to work in Canada without
            sponsorship
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href="/resume/daniel-gonzalez-cuetara-full-stack-resume.pdf"
              download="daniel-gonzalez-cuetara-full-stack-resume.pdf"
            >
              Download Full-Stack Resume
            </ButtonLink>
            <ButtonLink
              href="/resume/daniel-gonzalez-cuetara-frontend-resume.pdf"
              variant="secondary"
              download="daniel-gonzalez-cuetara-frontend-resume.pdf"
            >
              Download Frontend Resume
            </ButtonLink>
          </div>
        </Container>
      </header>

      <ResumeSection id="experience-heading" title="Experience">
        <div className="space-y-10">
          <article>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="type-card-heading">Freelance Full-Stack Web Developer</h3>
                <p className="type-body-small mt-2 font-medium">
                  Workana &amp; Independent Clients
                </p>
                <p className="type-body-small mt-1 text-muted">Remote</p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted">
                July 2024 – December 2025
              </p>
            </div>
            <p className="type-body-small mt-4 font-medium text-foreground">
              Client maintenance continued through February 2026.
            </p>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Delivered end-to-end web applications for food services, sports
              technology, and nonprofit organizations, covering product
              requirements, frontend and backend development, CMS architecture,
              integrations, deployment, and ongoing support.
            </p>
            <ul className="type-body-small mt-5 list-disc space-y-3 pl-5 text-muted marker:text-accent">
              <li className="pl-1">
                Built{" "}
                <Link href="/projects/comidas-bracamonte" className={textLinkStyles}>
                  Comidas Bracamonte
                </Link>
                , a production subscription platform using Next.js and Strapi,
                with configurable menus, postal-code-based pricing and
                recommendations, payments, custom CMS tooling, and deployment
                infrastructure.
              </li>
              <li className="pl-1">
                Developed{" "}
                <Link href="/projects/madres-de-la-leche" className={textLinkStyles}>
                  Madres de la Leche
                </Link>
                , a membership and content platform using Next.js and Payload
                CMS, including authentication, Stripe payments, events, digital
                member identification, custom admin functionality, email
                workflows, and SEO.
              </li>
              <li className="pl-1">
                Built{" "}
                <Link href="/projects/tipstertotal" className={textLinkStyles}>
                  Tipstertotal
                </Link>
                , a pre-launch sports-analysis marketplace with separate analyst
                and customer workflows, recurring subscriptions, marketplace
                financial tracking, Stripe payments, Wise payouts, MongoDB, and
                scheduled backend processes.
              </li>
            </ul>
          </article>

          <article className="border-t border-border pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="type-card-heading">Information Technology and Programming Expert</h3>
                <p className="type-body-small mt-2 font-medium">Innovative Ideas LLC</p>
                <p className="type-body-small mt-1 text-muted">Remote, Puerto Rico</p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted">
                June 2023 – July 2024
              </p>
            </div>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Contributed to frontend and backend development for the YiiES
              platform as part of a distributed team using Angular and
              Express.js.
            </p>
          </article>

          <article className="border-t border-border pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="type-card-heading">IT Specialist</h3>
                <p className="type-body-small mt-2 font-medium">UEB Confecciones Tropicales</p>
                <p className="type-body-small mt-1 text-muted">Mayabeque, Cuba</p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted">
                January 2023 – April 2024
              </p>
            </div>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Supported business operations through hardware and software
              installation, network maintenance, and administration of Windows
              Server and SQL Server environments.
            </p>
          </article>
        </div>
      </ResumeSection>

      <ResumeSection id="technologies-heading" title="Selected technologies" surface>
        <div className="grid gap-7 sm:grid-cols-2">
          {technologyGroups.map((group) => (
            <article key={group.title} className="border-t border-border pt-4">
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection id="selected-projects-heading" title="Selected projects">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-border bg-surface p-5 sm:p-6">
            <h3 className="type-card-heading">Gas Tracker</h3>
            <p className="type-body-small mt-3 text-pretty text-muted">
              Offline-first React Native application for tracking work trips,
              fuel costs, balances, payments, reports, and local backups.
            </p>
            <p className="mt-4 font-mono text-xs leading-6 text-foreground">
              React Native · Expo · TypeScript · SQLite · Drizzle ORM
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
              {selectedProjectLinks["gas-tracker"].map((action) => (
                <a
                  key={action.label}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkStyles}
                  aria-label={`${action.label} for Gas Tracker (opens in a new tab)`}
                >
                  {action.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-sm border border-border bg-surface p-5 sm:p-6">
            <h3 className="type-card-heading">sonner-next-intl</h3>
            <p className="type-body-small mt-3 text-pretty text-muted">
              Open-source package for internationalized Sonner toast
              notifications in Next.js applications, published on npm with
              documentation and an example project.
            </p>
            <p className="mt-4 font-mono text-xs leading-6 text-foreground">
              Next.js · TypeScript · next-intl · Sonner
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
              {selectedProjectLinks["sonner-next-intl"].map((action) => (
                <a
                  key={action.label}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkStyles}
                  aria-label={`${action.label} for sonner-next-intl (opens in a new tab)`}
                >
                  {action.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        </div>
        <div className="mt-7">
          <ButtonLink href="/projects" variant="secondary">
            Explore all projects
          </ButtonLink>
        </div>
      </ResumeSection>

      <ResumeSection id="education-heading" title="Education" surface>
        <div className="space-y-9">
          <article>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="type-card-heading">Bachelor of Computer Engineering</h3>
                <p className="type-body-small mt-2 font-medium">Agrarian University of Havana</p>
                <p className="type-body-small mt-1 text-muted">Mayabeque, Cuba</p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted">2017 – 2022</p>
            </div>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Studied data structures, databases, web development, servers,
              networking, and Java. Built contract-management and HR systems
              during a university practicum using Angular, Java REST APIs, and
              MySQL.
            </p>
          </article>

          <article className="border-t border-border pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="type-card-heading">Computational Intelligence Coursework</h3>
                <p className="type-body-small mt-2 font-medium">University of the Amazon</p>
                <p className="type-body-small mt-1 text-muted">Remote, Colombia</p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted">2022</p>
            </div>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Coursework covering machine learning, natural language
              processing, and neural networks using Python.
            </p>
          </article>
        </div>
      </ResumeSection>

      <ResumeSection id="credentials-heading" title="Certifications & languages">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="type-meta text-muted">Certifications</h3>
            <ul className="type-body-small mt-4 space-y-3 text-foreground">
              <li>Full Stack Open — University of Helsinki, 2025</li>
              <li>IELTS General Training — Overall Band 7.5, 2025</li>
            </ul>
          </div>
          <div>
            <h3 className="type-meta text-muted">Languages</h3>
            <ul className="type-body-small mt-4 space-y-3 text-foreground">
              <li>Spanish — Native</li>
              <li>English — Advanced professional proficiency</li>
            </ul>
          </div>
        </div>
      </ResumeSection>

      <ResumeSection id="contact-heading" title="Contact" surface>
        <p className="type-body-small font-medium text-foreground">
          {professionalProfile.location}
        </p>
        <nav className="mt-5" aria-label="Resume contact links">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <a href={emailHref} className={textLinkStyles}>Email</a>
            </li>
            <li>
              <a
                href={professionalProfile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkStyles}
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href={professionalProfile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkStyles}
                aria-label="GitHub profile (opens in a new tab)"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </ResumeSection>
    </>
  );
}
