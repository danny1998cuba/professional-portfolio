import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { professionalProfile } from "@/content/profile";
import { getProjectBySlug } from "@/content/projects";
import { createPageMetadata } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
  title: "Resume",
  description:
    "Software development experience, technologies, projects, education, and resume downloads for Daniel Gonzalez Cuetara.",
  path: "/resume",
});

const technologyGroups = [
  {
    title: "Frontend",
    iconPath: "M4 4h16v12H4zM8 20h8m-4-4v4",
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
    iconPath: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16",
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
    iconPath: "M20 6c0 2-3.6 3-8 3S4 8 4 6s3.6-3 8-3 8 1 8 3ZM4 6v12c0 2 3.6 3 8 3s8-1 8-3V6M4 12c0 2 3.6 3 8 3s8-1 8-3",
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
    iconPath: "M4 5h16v14H4zM4 9h16M8 15h4m4-2v4m-2-2h4",
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
    iconPath: "M7 18a4 4 0 0 1-1-7.9 6 6 0 0 1 11.6-1.6A4.5 4.5 0 0 1 18 18H7Z",
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
  "inline-flex min-h-11 items-center gap-1.5 rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none";

interface ResumeSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function ResumeSection({
  id,
  title,
  children,
}: ResumeSectionProps) {
  return (
    <section
      className="pb-14 sm:pb-16 lg:pb-20"
      aria-labelledby={id}
    >
      <Container>
        <div className="min-w-0 [overflow-wrap:anywhere]">
          <h2 id={id} className="type-section-heading text-balance before:mb-4 before:block before:h-0.5 before:w-6 before:rounded-full before:bg-accent before:content-['']">
            {title}
          </h2>
          <div className="mt-7">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export default function ResumePage() {
  const emailHref = `mailto:${professionalProfile.email}`;

  return (
    <>
      <header className="pt-12 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <Container className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <h1 className="type-display text-balance">Resume</h1>
            <p className="type-body mt-6 max-w-2xl text-pretty text-muted">
              Full-stack software developer based in Kingston, Ontario, building
              production web applications across frontend, backend, CMS
              integrations, payments, APIs, and deployment.
            </p>
            <p className="type-body-small mt-5 inline-flex rounded-xl border border-accent/15 bg-surface-tint px-3 py-2 font-medium text-accent-strong">
              Canadian permanent resident · Authorized to work in Canada without
              sponsorship
            </p>
          </div>
          <nav className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6" aria-label="Resume PDF downloads">
            <ButtonLink
              href="/resume/daniel-gonzalez-cuetara-full-stack-resume.pdf"
              download="daniel-gonzalez-cuetara-full-stack-resume.pdf"
            >
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />
              </svg>
              Download Full-Stack Resume
            </ButtonLink>
            <ButtonLink
              href="/resume/daniel-gonzalez-cuetara-frontend-resume.pdf"
              variant="secondary"
              download="daniel-gonzalez-cuetara-frontend-resume.pdf"
            >
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />
              </svg>
              Download Frontend Resume
            </ButtonLink>
          </nav>
        </Container>
      </header>

      <ResumeSection id="experience-heading" title="Experience">
        <div className="space-y-5">
          <article className="rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-7">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
              <div>
                <h3 className="type-card-heading">Freelance Full-Stack Web Developer</h3>
                <p className="type-body-small mt-2 font-medium">
                  Workana &amp; Independent Clients
                </p>
                <p className="type-body-small mt-1 text-muted">Remote</p>
              </div>
              <p className="max-w-full shrink-0 self-start rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted">
                July 2024 – December 2025
              </p>
            </div>
            <p className="type-body-small mt-5 border-l-2 border-accent/50 pl-3 font-medium text-accent-strong">
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

          <article className="rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-7">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
              <div>
                <h3 className="type-card-heading">Information Technology and Programming Expert</h3>
                <p className="type-body-small mt-2 font-medium">Innovative Ideas LLC</p>
                <p className="type-body-small mt-1 text-muted">Remote, Puerto Rico</p>
              </div>
              <p className="max-w-full shrink-0 self-start rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted">
                June 2023 – July 2024
              </p>
            </div>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Contributed to frontend and backend development for the YiiES
              platform as part of a distributed team using Angular and
              Express.js.
            </p>
          </article>

          <article className="rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-7">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
              <div>
                <h3 className="type-card-heading">IT Specialist</h3>
                <p className="type-body-small mt-2 font-medium">UEB Confecciones Tropicales</p>
                <p className="type-body-small mt-1 text-muted">Mayabeque, Cuba</p>
              </div>
              <p className="max-w-full shrink-0 self-start rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted">
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

      <ResumeSection id="technologies-heading" title="Selected technologies">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <article key={group.title} className="min-w-0 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft">
              <div className="mb-4 flex size-9 items-center justify-center rounded-xl bg-surface-tint text-accent" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                  <path d={group.iconPath} />
                </svg>
              </div>
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5 font-mono text-xs text-muted">
                {group.technologies.map((technology) => (
                  <li key={technology} className="rounded-md bg-surface-tint px-2 py-1">{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection id="selected-projects-heading" title="Selected projects">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full min-w-0 flex-col rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6">
            <h3 className="type-card-heading">Gas Tracker</h3>
            <p className="type-body-small mt-3 text-pretty text-muted">
              Offline-first React Native application for tracking work trips,
              fuel costs, balances, payments, reports, and local backups.
            </p>
            <p className="mt-4 font-mono text-xs leading-6 text-foreground">
              React Native · Expo · TypeScript · SQLite · Drizzle ORM
            </p>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-5">
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

          <article className="flex h-full min-w-0 flex-col rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6">
            <h3 className="type-card-heading">sonner-next-intl</h3>
            <p className="type-body-small mt-3 text-pretty text-muted">
              Open-source package for internationalized Sonner toast
              notifications in Next.js applications, published on npm with
              documentation and an example project.
            </p>
            <p className="mt-4 font-mono text-xs leading-6 text-foreground">
              Next.js · TypeScript · next-intl · Sonner
            </p>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-5">
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

      <ResumeSection id="education-heading" title="Education">
        <div className="space-y-7 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-7">
          <article>
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
              <div>
                <h3 className="type-card-heading">Bachelor of Computer Engineering</h3>
                <p className="type-body-small mt-2 font-medium">Agrarian University of Havana</p>
                <p className="type-body-small mt-1 text-muted">Mayabeque, Cuba</p>
              </div>
              <p className="max-w-full shrink-0 self-start rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted">2017 – 2022</p>
            </div>
            <p className="type-body-small mt-5 max-w-3xl text-pretty text-muted">
              Studied data structures, databases, web development, servers,
              networking, and Java. Built contract-management and HR systems
              during a university practicum using Angular, Java REST APIs, and
              MySQL.
            </p>
          </article>

          <article className="border-t border-border/30 pt-7">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
              <div>
                <h3 className="type-card-heading">Computational Intelligence Coursework</h3>
                <p className="type-body-small mt-2 font-medium">University of the Amazon</p>
                <p className="type-body-small mt-1 text-muted">Remote, Colombia</p>
              </div>
              <p className="max-w-full shrink-0 self-start rounded-md border border-border/40 bg-surface-tint px-2.5 py-1 font-mono text-xs text-muted">2022</p>
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
          <div className="rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6">
            <h3 className="type-meta text-accent">Certifications</h3>
            <ul className="type-body-small mt-4 space-y-3 text-foreground">
              <li>Full Stack Open — University of Helsinki, 2025</li>
              <li>IELTS General Training — Overall Band 7.5, 2025</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6">
            <h3 className="type-meta text-accent">Languages</h3>
            <ul className="type-body-small mt-4 space-y-3 text-foreground">
              <li>Spanish — Native</li>
              <li>English — Advanced professional proficiency</li>
            </ul>
          </div>
        </div>
      </ResumeSection>

      <ResumeSection id="contact-heading" title="Contact">
        <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="type-body-small font-medium text-foreground">
            {professionalProfile.location}
          </p>
          <nav className="min-w-0" aria-label="Resume contact links">
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
        </div>
      </ResumeSection>
    </>
  );
}
