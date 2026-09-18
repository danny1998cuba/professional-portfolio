import type {
  CaseStudyMetadata,
  FeaturedProject,
  Project,
  SecondaryProject,
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
  {
    slug: "gas-tracker",
    title: "Gas Tracker",
    shortDescription:
      "Offline-first mobile application for tracking work trips, fuel costs, driver balances, payments and reports, with local data persistence and backup workflows.",
    classification: "personal",
    type: "mobile-application",
    featured: false,
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
    sourceCode: {
      availability: "public",
      repositoryUrl: "https://github.com/danny1998cuba/gas-tracker",
    },
    externalActions: [
      {
        label: "View source",
        url: "https://github.com/danny1998cuba/gas-tracker",
      },
    ],
  },
  {
    slug: "sonner-next-intl",
    title: "sonner-next-intl",
    shortDescription:
      "Open-source package that adds internationalized Sonner toast notifications to Next.js applications through a small reusable API, with documentation and a working example application.",
    classification: "open-source",
    type: "developer-tool",
    featured: false,
    technologies: ["Next.js", "TypeScript", "next-intl", "Sonner", "npm"],
    sourceCode: {
      availability: "public",
      repositoryUrl: "https://github.com/corex4dev/sonner-next-intl",
    },
    externalActions: [
      {
        label: "Docs",
        url: "https://sonner-next-intl.vercel.app",
      },
      {
        label: "GitHub",
        url: "https://github.com/corex4dev/sonner-next-intl",
      },
      {
        label: "npm",
        url: "https://www.npmjs.com/package/sonner-next-intl",
      },
    ],
  },
  {
    slug: "corex4dev",
    title: "CoreX4Dev",
    shortDescription:
      "Active Spanish-language developer platform combining practical technical content, open-source projects and video tutorials about modern web development.",
    classification: "technical-initiative",
    type: "website",
    featured: false,
    technologies: [
      "Next.js",
      "React",
      "Technical Writing",
      "Developer Education",
    ],
    sourceCode: {
      availability: "not-published",
    },
    externalActions: [
      {
        label: "Visit CoreX4Dev",
        url: "https://corex4dev.com",
      },
    ],
  },
  {
    slug: "pixeldrain-uploader",
    title: "Pixeldrain Uploader",
    shortDescription:
      "Windows desktop utility for sending large files directly to a Pixeldrain account without sharing the account credentials. Built around a revocable API key, a persistent local upload queue, and direct synchronization with Pixeldrain through its API.",
    classification: "personal",
    type: "desktop-application",
    featured: false,
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "Electron",
      "Pixeldrain API",
    ],
    sourceCode: {
      availability: "public",
      repositoryUrl: "https://github.com/danny1998cuba/pixeldrain-uploader",
    },
    externalActions: [
      {
        label: "View source",
        url: "https://github.com/danny1998cuba/pixeldrain-uploader",
      },
      {
        label: "View releases",
        url: "https://github.com/danny1998cuba/pixeldrain-uploader/releases",
      },
    ],
  },
] as const satisfies readonly Project[];

export type ProjectWithCaseStudy = FeaturedProject & {
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

export function getSecondaryProjects(): readonly SecondaryProject[] {
  return getAllProjects().filter(
    (project): project is SecondaryProject => !project.featured,
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
