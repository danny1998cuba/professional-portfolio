import type { Metadata } from "next";
import { professionalProfile } from "./profile";

export const siteConfig = {
  name: professionalProfile.name,
  url: professionalProfile.siteUrl,
  defaultTitle:
    "Daniel Gonzalez Cuetara | Full-Stack Software Developer",
  titleTemplate: "%s | Daniel Gonzalez Cuetara",
  description:
    "Full-stack software developer based in Kingston, Ontario, building production web applications across frontend, backend, CMS integrations, payments, APIs, and deployment.",
  professionalTitle: "Full-Stack Software Developer",
  locale: "en_CA",
  language: "en",
  socialImagePath: "/opengraph-image",
  socialImageAlt:
    "Daniel Gonzalez Cuetara, Full-Stack Software Developer in Kingston, Ontario",
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      title: socialTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.socialImagePath,
          width: 1200,
          height: 630,
          alt: siteConfig.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [siteConfig.socialImagePath],
    },
  };
}
