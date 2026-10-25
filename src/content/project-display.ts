import type {
  Capability,
  ProjectClassification,
  ProjectPeriod,
  ProjectStatus,
  ProjectType,
  YearMonth,
} from "./types";

export const classificationLabels: Record<ProjectClassification, string> = {
  client: "Client work",
  "co-owned-product": "Co-owned product",
  personal: "Personal project",
  "open-source": "Open source",
  "technical-initiative": "Technical initiative",
  experimental: "Experiment",
};

export const typeLabels: Record<ProjectType, string> = {
  "web-application": "Web application",
  website: "Website",
  "mobile-application": "Mobile application",
  "desktop-application": "Desktop application",
  "developer-tool": "Developer tool",
};

export const statusLabels: Record<ProjectStatus, string> = {
  production: "Production",
  "production-mvp": "Production MVP",
  "pre-launch": "Pre-launch",
  "in-development": "In development",
  archived: "Archived",
};

export const capabilityLabels: Record<Capability, string> = {
  authentication: "Authentication",
  "client-qualification": "Client qualification",
  "capacity-management": "Shared coaching capacity",
  "client-onboarding": "Client onboarding",
  "coach-operations": "Coach operations",
  checkout: "Checkout",
  "cms-managed-content": "CMS-managed content",
  coupons: "Coupons",
  "custom-admin-fields": "Custom admin fields",
  "deployment-infrastructure": "Deployment & infrastructure",
  "digital-member-identification": "Digital member ID",
  "email-template-management": "Email template management",
  "event-management": "Event management",
  "forms-and-submissions": "Forms & submissions",
  "json-ld": "JSON-LD",
  "legal-content": "Legal content",
  "location-management": "Location management",
  "marketplace-financial-state": "Marketplace financial state",
  memberships: "Memberships",
  "multilingual-content": "Multilingual content",
  oauth: "OAuth",
  payments: "Payments",
  payouts: "Payouts",
  rankings: "Rankings",
  "responsive-frontend": "Responsive frontend",
  seo: "SEO",
  "shipping-validation": "Shipping validation",
  sitemap: "Sitemap",
  "structured-content": "Structured content",
  subscriptions: "Subscriptions",
  webhooks: "Webhooks",
  "weekly-menus": "Weekly menus",
};

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export function formatYearMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  return `${monthLabels[Number(month) - 1]} ${year}`;
}

export function formatProjectPeriod(period: ProjectPeriod): string {
  if ("mvpLaunched" in period) {
    return `MVP launched ${formatYearMonth(period.mvpLaunched)}`;
  }

  return `${formatYearMonth(period.start)}–${formatYearMonth(period.end)}`;
}
