import ComidasBracamonteCaseStudy from "./comidas-bracamonte.mdx";
import MadresDeLaLecheCaseStudy from "./madres-de-la-leche.mdx";
import TipstertotalCaseStudy from "./tipstertotal.mdx";
import { projects } from "../projects";

type ProjectWithCaseStudySlug = Extract<
  (typeof projects)[number],
  { readonly caseStudy: { readonly available: true } }
>["slug"];

export const caseStudies = {
  "comidas-bracamonte": ComidasBracamonteCaseStudy,
  "madres-de-la-leche": MadresDeLaLecheCaseStudy,
  tipstertotal: TipstertotalCaseStudy,
} as const satisfies Record<
  ProjectWithCaseStudySlug,
  typeof ComidasBracamonteCaseStudy
>;

export type CaseStudySlug = keyof typeof caseStudies;
export type CaseStudyComponent = (typeof caseStudies)[CaseStudySlug];

export function hasCaseStudyContent(slug: string): slug is CaseStudySlug {
  return Object.hasOwn(caseStudies, slug);
}

export function getCaseStudyBySlug(
  slug: string,
): CaseStudyComponent | undefined {
  return hasCaseStudyContent(slug) ? caseStudies[slug] : undefined;
}
