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
      "Production food-service platform built end to end with Next.js and Strapi, including multilingual content, weekly menus, checkout, postal-code-aware pricing and recommendations, coupons, payments, and deployment.",
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
      "Content-driven membership platform built end to end with Next.js and Payload CMS, combining responsive interfaces, CMS-managed publishing, events, Stripe payments, authentication, and SEO.",
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
    technologies: [
      "Next.js",
      "Payload CMS",
      "Stripe",
      "Leaflet",
      "OpenStreetMap",
      "Google OAuth",
    ],
    capabilities: [
      "responsive-frontend",
      "cms-managed-content",
      "structured-content",
      "authentication",
      "oauth",
      "payments",
      "memberships",
      "digital-member-identification",
      "event-management",
      "forms-and-submissions",
      "custom-admin-fields",
      "email-template-management",
      "location-management",
      "seo",
      "json-ld",
      "sitemap",
      "legal-content",
    ],
    contentLanguage: {
      primary: "Spanish",
      selectedAdditionalContent: ["English"],
      fullInternationalization: false,
    },
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
      "Pre-launch sports analyst marketplace built end to end with Next.js and MongoDB, including authentication, subscriptions, Stripe payments, application-managed financial tracking, Wise payouts, rankings, and webhooks.",
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
    technologies: ["Next.js", "MongoDB", "Stripe", "Wise API"],
    capabilities: [
      "authentication",
      "subscriptions",
      "payments",
      "marketplace-financial-state",
      "payouts",
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
      "Stripe Connect was evaluated and replaced because its geographic coverage did not fit the intended analyst market.",
      "Customer payments used Stripe; analyst balances, commission, subscription and payment state, and payout eligibility were tracked in MongoDB.",
      "Analyst payouts used the Wise API with settlement scheduled twice per month.",
      "No meaningful customer or analyst base was established before discontinuation.",
      "The project was discontinued for commercial and analyst-acquisition reasons rather than incomplete core technical implementation.",
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
