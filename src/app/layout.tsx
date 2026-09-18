import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { professionalProfile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { siteStructuredData } from "@/content/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: professionalProfile.name,
  authors: [
    {
      name: professionalProfile.name,
      url: siteConfig.url,
    },
  ],
  creator: professionalProfile.name,
  keywords: [
    "full-stack software developer",
    "frontend developer",
    "software developer",
    "Next.js developer",
    "Kingston Ontario",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: professionalProfile.name,
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
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.socialImagePath],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd data={siteStructuredData} />
        <a
          href="#main-content"
          className="fixed top-4 left-4 z-50 -translate-y-24 rounded-sm bg-foreground px-4 py-2 text-sm font-semibold text-surface shadow-sm focus:translate-y-0"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
