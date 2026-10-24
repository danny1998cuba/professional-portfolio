import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getFeaturedProjects,
  getSecondaryProjects,
} from "@/content/projects";
import { createPageMetadata } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected client and product work by Daniel Gonzalez Cuetara across full-stack applications, CMS platforms, payments, subscriptions, APIs, and deployment.",
  path: "/projects",
});

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects();
  const secondaryProjects = getSecondaryProjects();

  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="Projects"
        description="Selected client and product work spanning full-stack web applications, content platforms, subscriptions, payments, CMS customization, and deployment."
        display
        size="site"
      />

      <section
        className="pb-14 sm:pb-16 lg:pb-20"
        aria-labelledby="featured-projects-heading"
      >
        <Container>
          <SectionHeading
            id="featured-projects-heading"
            title="Featured projects"
          />
          <ul className="mt-8 grid gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="min-w-0">
                <ProjectCard project={project} variant="detailed" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {secondaryProjects.length > 0 ? (
        <section
          className="pb-14 sm:pb-16 lg:pb-20"
          aria-labelledby="other-projects-heading"
        >
          <Container>
            <SectionHeading
              id="other-projects-heading"
              title="Other projects"
              description="Open-source tools, personal products, and technical initiatives."
            />
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <li key={project.slug} className="min-w-0">
                  <ProjectCard project={project} variant="secondary" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
