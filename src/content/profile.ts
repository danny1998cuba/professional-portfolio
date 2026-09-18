import type { ProfessionalProfile } from "./types";

export const professionalProfile = {
  name: "Daniel Gonzalez Cuetara",
  location: "Kingston, Ontario, Canada",
  siteUrl: "https://daniel.corex4dev.com",
  primaryDirection: "Full-Stack Developer",
  additionalDirections: ["Frontend Developer", "Software Developer"],
  experienceAreas: [
    "frontend-applications",
    "backend-api-development",
    "cms-integrations",
    "authentication",
    "payments",
    "deployment-infrastructure",
  ],
  workAuthorization: {
    country: "Canada",
    status: "permanent-resident",
    sponsorshipRequired: false,
  },
  links: {
    github: "https://github.com/danny1998cuba",
  },
} as const satisfies ProfessionalProfile;
