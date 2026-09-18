export type ExternalUrl = `https://${string}`;

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

type Day =
  | `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `${1 | 2}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `3${0 | 1}`;

export type YearMonth = `${number}-${Month}`;
export type IsoDate = `${YearMonth}-${Day}`;

export type ProjectClassification = "client" | "personal" | "experimental";

export type ProjectType =
  | "web-application"
  | "website"
  | "mobile-application"
  | "developer-tool";

export type ProjectStatus =
  | "production"
  | "pre-launch"
  | "in-development"
  | "archived";

export type Technology =
  | "Next.js"
  | "React"
  | "Strapi"
  | "Payload CMS"
  | "MongoDB"
  | "Stripe"
  | "Wise API"
  | "Google OAuth"
  | "Leaflet"
  | "OpenStreetMap";

export type Capability =
  | "authentication"
  | "checkout"
  | "cms-managed-content"
  | "coupons"
  | "custom-admin-fields"
  | "deployment-infrastructure"
  | "digital-member-identification"
  | "email-template-management"
  | "event-management"
  | "forms-and-submissions"
  | "json-ld"
  | "legal-content"
  | "location-management"
  | "marketplace-financial-state"
  | "memberships"
  | "multilingual-content"
  | "oauth"
  | "payments"
  | "payouts"
  | "rankings"
  | "responsive-frontend"
  | "seo"
  | "shipping-validation"
  | "sitemap"
  | "structured-content"
  | "subscriptions"
  | "webhooks"
  | "weekly-menus";

export type SourceCode =
  | {
      availability: "public";
      repositoryUrl: ExternalUrl;
    }
  | {
      availability: "proprietary" | "not-published";
      repositoryUrl?: never;
    };

export interface CaseStudyMetadata {
  available: true;
  focusAreas?: readonly string[];
  facts?: readonly string[];
}

interface ProjectBase {
  slug: string;
  title: string;
  shortDescription: string;
  classification: ProjectClassification;
  type: ProjectType;
  status: ProjectStatus;
  period: {
    start: YearMonth;
    end: YearMonth;
  };
  lastUpdated?: IsoDate;
  delivery: {
    scope: "end-to-end";
    soleDeveloper?: true;
  };
  responsibilities: readonly string[];
  technologies: readonly Technology[];
  capabilities: readonly Capability[];
  contentLanguage?: {
    primary: string;
    selectedAdditionalContent?: readonly string[];
    fullInternationalization: boolean;
  };
  publicUrl?: ExternalUrl;
  sourceCode: SourceCode;
  relatedProjects?: readonly {
    slug: string;
    relationship: "same-client";
  }[];
  notes?: readonly string[];
}

export interface FeaturedProject extends ProjectBase {
  featured: true;
  caseStudy: CaseStudyMetadata;
}

export interface SecondaryProject extends ProjectBase {
  featured: false;
  caseStudy?: CaseStudyMetadata;
}

export type Project = FeaturedProject | SecondaryProject;

export type ProfessionalRole =
  | "Full-Stack Developer"
  | "Frontend Developer"
  | "Software Developer";

export type ExperienceArea =
  | "frontend-applications"
  | "backend-api-development"
  | "cms-integrations"
  | "authentication"
  | "payments"
  | "deployment-infrastructure";

export interface ProfessionalProfile {
  name: string;
  location: string;
  siteUrl: ExternalUrl;
  primaryDirection: ProfessionalRole;
  additionalDirections: readonly ProfessionalRole[];
  experienceAreas: readonly ExperienceArea[];
  workAuthorization: {
    country: "Canada";
    status: "permanent-resident";
    sponsorshipRequired: false;
  };
  links: {
    github: ExternalUrl;
    linkedin?: ExternalUrl;
  };
  email?: string;
  technicalInitiatives?: {
    coreX4Dev: ExternalUrl;
  };
}
