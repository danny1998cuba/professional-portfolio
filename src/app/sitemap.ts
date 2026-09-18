import type { MetadataRoute } from "next";
import { hasCaseStudyContent } from "@/content/case-studies";
import { getAllProjects, hasCaseStudy } from "@/content/projects";
import { absoluteUrl } from "@/content/site";

const staticRoutes = ["/", "/projects", "/about", "/resume"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes = getAllProjects()
    .filter((project) =>
      hasCaseStudy(project) && hasCaseStudyContent(project.slug),
    )
    .map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...caseStudyRoutes].map((route) => ({
    url: absoluteUrl(route),
  }));
}
