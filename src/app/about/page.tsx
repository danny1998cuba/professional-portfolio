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
  "inline-flex min-h-11 items-center rounded-sm font-semibold text-accent underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:decoration-current active:translate-y-px motion-reduce:transition-none";

export default function AboutPage() {
  const emailHref = `mailto:${professionalProfile.email}`;

  return (
    <>
      <header className="page-section border-b border-border">
        <Container size="reading">
          <h1 className="type-page-heading text-balance">About</h1>
        </Container>
      </header>

      <div className="py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,46rem)_18rem] lg:items-start lg:justify-between">
          <div className="space-y-12 sm:space-y-14">
            <section aria-labelledby="product-needs-heading">
              <h2 id="product-needs-heading" className="type-section-heading text-balance">
                I build software around real product needs
              </h2>
              <div className="type-body mt-6 space-y-5 text-pretty text-muted">
                <p>
                  I’m a full-stack software developer based in Kingston,
                  Ontario, with a background in Computer Engineering and
                  hands-on experience building production applications for
                  clients.
                </p>
                <p>
                  My work has taken me across frontend development, backend
                  services, content management systems, payments,
                  authentication, APIs, and deployment. I’m comfortable owning
                  a feature from the interface through the supporting data and
                  integrations, while also fitting well into frontend-heavy
                  roles where product UI and component architecture are the
                  main focus.
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-12 sm:pt-14" aria-labelledby="background-heading">
              <h2 id="background-heading" className="type-section-heading text-balance">
                From systems and IT to product development
              </h2>
              <div className="type-body mt-6 space-y-5 text-pretty text-muted">
                <p>
                  My background started with Computer Engineering, where I
                  worked with databases, web development, networking, servers,
                  and Java-based systems. I later worked in IT infrastructure
                  and contributed to software projects using Angular and
                  Express before moving further into client-facing full-stack
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

            <section className="border-t border-border pt-12 sm:pt-14" aria-labelledby="end-to-end-heading">
              <h2 id="end-to-end-heading" className="type-section-heading text-balance">
                Building end to end
              </h2>
              <div className="type-body mt-6 space-y-5 text-pretty text-muted">
                <p>
                  A large part of my recent work has involved taking client
                  requirements and turning them into complete web products.
                </p>
                <p>
                  That has included a subscription food-service platform with
                  custom CMS workflows and geographic pricing rules, a
                  nonprofit membership platform with payments and custom
                  Payload extensions, and a sports-analysis marketplace with
                  subscription and payout infrastructure.
                </p>
                <p>
                  Across those projects, I have handled frontend development,
                  backend logic, integrations, CMS architecture, deployment,
                  and ongoing maintenance rather than working on only one
                  isolated layer.
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-12 sm:pt-14" aria-labelledby="work-style-heading">
              <h2 id="work-style-heading" className="type-section-heading text-balance">
                How I like to work
              </h2>
              <div className="type-body mt-6 space-y-5 text-pretty text-muted">
                <p>I prefer understanding the problem before choosing the implementation.</p>
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

            <section className="border-t border-border pt-12 sm:pt-14" aria-labelledby="roles-heading">
              <h2 id="roles-heading" className="type-section-heading text-balance">
                What I’m looking for
              </h2>
              <div className="type-body mt-6 space-y-5 text-pretty text-muted">
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

          <aside className="rounded-sm border border-border bg-surface p-5 sm:p-6 lg:sticky lg:top-28" aria-labelledby="about-facts-heading">
            <h2 id="about-facts-heading" className="type-meta text-accent">
              At a glance
            </h2>
            <dl className="mt-6 space-y-6">
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

            <nav className="mt-7 border-t border-border pt-5" aria-label="About page contact links">
              <ul className="flex flex-col items-start gap-1">
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
