import { professionalProfile } from "./profile";
import { absoluteUrl, siteConfig } from "./site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: professionalProfile.name,
      url: absoluteUrl(),
      jobTitle: siteConfig.professionalTitle,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kingston",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
      email: professionalProfile.email,
      sameAs: [
        professionalProfile.links.github,
        professionalProfile.links.linkedin,
        professionalProfile.technicalInitiatives.coreX4Dev,
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: professionalProfile.name,
      url: absoluteUrl(),
      inLanguage: siteConfig.language,
      author: {
        "@id": personId,
      },
    },
  ],
} as const;

export function createCaseStudyBreadcrumbs(title: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: absoluteUrl("/projects"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: absoluteUrl(`/projects/${slug}`),
      },
    ],
  } as const;
}
