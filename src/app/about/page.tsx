import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { professionalProfile } from "@/content/profile";
import { createPageMetadata } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "About Daniel Gonzalez Cuetara, a full-stack software developer based in Kingston, Ontario, with experience building production web applications end to end.",
  path: "/about",
});

const professionalLinkStyles =
  "link-feedback inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-semibold text-accent underline decoration-transparent underline-offset-4";

export default function AboutPage() {
  const emailHref = `mailto:${professionalProfile.email}`;

  return (
    <>
      <header className="pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
        <Container>
          <h1 className="type-display text-balance">About</h1>
        </Container>
      </header>

      <div className="pb-14 sm:pb-16 lg:pb-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-14">
          <div className="min-w-0 max-w-2xl space-y-10 wrap-anywhere sm:space-y-12">
            <section aria-labelledby="product-needs-heading">
              <h2
                id="product-needs-heading"
                className="text-[1.75rem] leading-[1.2] font-bold tracking-tight text-balance before:mb-5 before:block before:h-0.5 before:w-6 before:rounded-full before:bg-accent before:content-[''] sm:text-[2rem] lg:text-[2.25rem]"
              >
                I build software around real product needs
              </h2>
              <div className="type-body mt-5 space-y-4 leading-[1.75] text-pretty text-muted">
                <p>
                  I’m a full-stack software developer based in Kingston,
                  Ontario, with a background in Computer Engineering and
                  hands-on experience building production applications for
                  clients.
                </p>
                <p>
                  My work has taken me across frontend development, backend
                  services, content management systems, payments,
                  authentication, APIs, and deployment. I’m comfortable owning a
                  feature from the interface through the supporting data and
                  integrations, while also fitting well into frontend-heavy
                  roles where product UI and component architecture are the main
                  focus.
                </p>
              </div>
            </section>

            <section
              className="border-t border-border/40 pt-10 sm:pt-12"
              aria-labelledby="background-heading"
            >
              <h2
                id="background-heading"
                className="type-section-heading text-balance"
              >
                From systems and IT to product development
              </h2>
              <div className="type-body mt-5 space-y-4 leading-[1.75] text-pretty text-muted">
                <p>
                  My background started with Computer Engineering, where I
                  worked with databases, web development, networking, servers,
                  and Java-based systems. I later worked in IT infrastructure
                  and contributed to software projects using Angular and Express
                  before moving further into client-facing full-stack
                  development.
                </p>
                <p>
                  That progression shaped the way I approach software today. I
                  tend to think about the whole system rather than only the
                  screen in front of the user: how content is managed, how data
                  moves, how business rules are represented, how external
                  services fit into the product, and how the application will
                  actually be deployed and maintained.
                </p>
              </div>
            </section>

            <section
              className="border-t border-border/40 pt-10 sm:pt-12"
              aria-labelledby="end-to-end-heading"
            >
              <h2
                id="end-to-end-heading"
                className="type-section-heading text-balance"
              >
                Building end to end
              </h2>
              <div className="type-body mt-5 space-y-4 leading-[1.75] text-pretty text-muted">
                <p>
                  A large part of my recent work has involved taking client
                  requirements and turning them into complete web products.
                </p>
                <p>
                  That has included a subscription food-service platform with
                  custom CMS workflows and geographic pricing rules, a nonprofit
                  membership platform with payments and custom Payload
                  extensions, and a sports-analysis marketplace with
                  subscription and payout infrastructure.
                </p>
                <p>
                  Across those projects, I have handled frontend development,
                  backend logic, integrations, CMS architecture, deployment, and
                  ongoing maintenance rather than working on only one isolated
                  layer.
                </p>
              </div>
            </section>

            <section
              className="border-t border-border/40 pt-10 sm:pt-12"
              aria-labelledby="work-style-heading"
            >
              <h2
                id="work-style-heading"
                className="type-section-heading text-balance"
              >
                How I like to work
              </h2>
              <div className="type-body mt-5 space-y-4 leading-[1.75] text-pretty text-muted">
                <p>
                  I prefer understanding the problem before choosing the
                  implementation.
                </p>
                <p>
                  Sometimes the right answer is a reusable React component.
                  Other times it is changing the data model, extending a CMS,
                  moving logic out of the frontend, or replacing an integration
                  that no longer fits the product.
                </p>
                <p>
                  I value maintainable code, clear boundaries, practical
                  solutions, and systems that the people using them can manage
                  without unnecessary developer intervention.
                </p>
                <p>
                  I also enjoy working on smaller technical projects outside
                  client work, especially when they solve a concrete problem or
                  let me explore a different part of the stack.
                </p>
              </div>
            </section>

            <section
              className="rounded-2xl border border-border/40 bg-surface-tint/70 p-5 sm:p-7"
              aria-labelledby="roles-heading"
            >
              <h2
                id="roles-heading"
                className="type-section-heading text-balance"
              >
                What I’m looking for
              </h2>
              <div className="type-body mt-5 space-y-4 leading-[1.75] text-pretty text-muted">
                <p>
                  I’m currently looking for frontend, full-stack, or software
                  developer opportunities in Canada.
                </p>
                <p>
                  I’m especially interested in product teams where I can
                  contribute across the application, work closely with real
                  requirements, and continue growing while shipping software
                  that people actually use.
                </p>
                <p>
                  I’m based in Kingston, Ontario, and I’m a Canadian permanent
                  resident authorized to work in Canada without sponsorship.
                </p>
              </div>
            </section>
          </div>

          <aside
            className="min-w-0 rounded-2xl border border-border/40 bg-surface p-5 shadow-soft sm:p-6 lg:sticky lg:top-28"
            aria-labelledby="about-facts-heading"
          >
            <h2
              id="about-facts-heading"
              className="section-eyebrow type-meta text-accent"
            >
              At a glance
            </h2>
            <dl className="mt-5 space-y-5 [&>div+div]:border-t [&>div+div]:border-border/30 [&>div+div]:pt-5">
              <div>
                <dt className="type-meta text-muted">Location</dt>
                <dd className="type-body-small mt-2 text-foreground">
                  {professionalProfile.location}
                </dd>
              </div>
              <div>
                <dt className="type-meta text-muted">Focus</dt>
                <dd className="type-body-small mt-2 text-foreground">
                  Full-stack development
                  <br />
                  Frontend-heavy product roles
                </dd>
              </div>
              <div>
                <dt className="type-meta text-muted">Work authorization</dt>
                <dd className="type-body-small mt-2 text-foreground">
                  Canadian permanent resident
                  <br />
                  {professionalProfile.workAuthorization.sponsorshipRequired
                    ? "Sponsorship required"
                    : "No sponsorship required"}
                </dd>
              </div>
            </dl>

            <nav
              className="mt-6 border-t border-border/30 pt-3"
              aria-label="About page contact links"
            >
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                <li>
                  <a
                    href={professionalProfile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={professionalLinkStyles}
                    aria-label="GitHub profile (opens in a new tab)"
                  >
                    GitHub <span aria-hidden="true">↗</span>
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
                    LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href={emailHref} className={professionalLinkStyles}>
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </Container>
      </div>
    </>
  );
}
