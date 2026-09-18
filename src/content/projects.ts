import type {
  CaseStudyMetadata,
  FeaturedProject,
  Project,
} from "./types";

export const projects = [
  {
    slug: "comidas-bracamonte",
    title: "Comidas Bracamonte",
    shortDescription:
      "Production web application for multilingual weekly menus, ordering, and delivery workflows.",
    classification: "client",
    type: "web-application",
    status: "production",
    featured: true,
    period: {
      start: "2024-11",
      end: "2026-02",
    },
    lastUpdated: "2026-02-01",
    delivery: {
      scope: "end-to-end",
    },
    responsibilities: [
      "End-to-end web application development",
      "Custom Strapi plugin development",
      "Deployment and infrastructure",
    ],
    technologies: ["Next.js", "React", "Strapi"],
    capabilities: [
      "multilingual-content",
      "weekly-menus",
      "checkout",
      "shipping-validation",
      "coupons",
      "payments",
      "seo",
      "deployment-infrastructure",
    ],
    publicUrl: "https://comidasbracamonte.com",
    sourceCode: {
      availability: "proprietary",
    },
    caseStudy: {
      available: true,
      focusAreas: [
        "Geographic menu and pricing rules",
        "Custom Strapi plugin for purchase-flow recommendations",
      ],
      facts: [
        "Menu and recommended-dish logic initially varied by Spanish province.",
        "The geographic rules later evolved to use customer postal codes.",
        "Pricing uses a primary default price with exceptions for specific postal codes.",
        "Customer ZIP codes drive predefined recommendations and suggestions managed through a custom Strapi plugin.",
      ],
    },
  },
  {
    slug: "madres-de-la-leche",
    title: "Madres de la Leche",
    shortDescription:
      "Bilingual production web application with CMS-managed structured and legal content.",
    classification: "client",
    type: "web-application",
    status: "production",
    featured: true,
    period: {
      start: "2025-08",
      end: "2026-01",
    },
    delivery: {
      scope: "end-to-end",
      soleDeveloper: true,
    },
    responsibilities: ["Sole end-to-end web application development"],
    technologies: ["Next.js", "Payload CMS"],
    capabilities: [
      "responsive-frontend",
      "cms-managed-content",
      "structured-content",
      "seo",
      "multilingual-content",
      "legal-content",
    ],
    contentLanguages: ["English", "Spanish"],
    publicUrl: "https://madresdelaleche.org",
    sourceCode: {
      availability: "proprietary",
    },
    caseStudy: {
      available: true,
    },
  },
  {
    slug: "tipstertotal",
    title: "Tipstertotal",
    shortDescription:
      "Pre-launch client web product with authentication, subscriptions, rankings, and Stripe Connect workflows.",
    classification: "client",
    type: "web-application",
    status: "pre-launch",
    featured: true,
    period: {
      start: "2024-08",
      end: "2025-02",
    },
    delivery: {
      scope: "end-to-end",
    },
    responsibilities: ["End-to-end web application development"],
    technologies: ["Next.js", "MongoDB", "Stripe Connect"],
    capabilities: [
      "authentication",
      "subscriptions",
      "payments",
      "rankings",
      "webhooks",
    ],
    publicUrl: "https://tipstertotal.com",
    sourceCode: {
      availability: "proprietary",
    },
    relatedProjects: [
      {
        slug: "comidas-bracamonte",
        relationship: "same-client",
      },
    ],
    notes: [
      "Side product for the same client as Comidas Bracamonte.",
      "The product did not proceed commercially because of client-side administrative circumstances.",
    ],
    caseStudy: {
      available: true,
    },
  },
] as const satisfies readonly Project[];

export type ProjectWithCaseStudy = Project & {
  caseStudy: CaseStudyMetadata;
};

export function getAllProjects(): readonly Project[] {
  return projects;
}

export function getFeaturedProjects(): readonly FeaturedProject[] {
  return projects.filter(
    (project): project is (typeof projects)[number] & FeaturedProject =>
      project.featured,
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function hasCaseStudy(
  project: Project,
): project is ProjectWithCaseStudy {
  return project.caseStudy?.available === true;
}
