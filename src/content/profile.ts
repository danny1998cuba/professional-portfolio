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
    linkedin: "https://www.linkedin.com/in/danny98cuba/?locale=en-US",
  },
  email: "danny.glezcuet98@gmail.com",
  technicalInitiatives: {
    coreX4Dev: "https://corex4dev.com",
  },
} as const satisfies ProfessionalProfile;
