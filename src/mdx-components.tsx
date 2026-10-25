import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { ProjectImage } from "@/components/projects/project-image";

function MdxLink({ href, ...props }: ComponentPropsWithoutRef<"a">) {
  const isExternal =
    typeof href === "string" && /^(https?:)?\/\//.test(href);

  return (
    <a
      href={href}
      className="link-feedback rounded-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 wrap-anywhere"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    />
  );
}

const components: MDXComponents = {
  ProjectImage,
  h2: (props) => (
    <h2
      className="type-section-heading mt-12 scroll-mt-36 text-balance before:mb-4 before:block before:h-0.5 before:w-6 before:rounded-full before:bg-accent before:content-[''] first:mt-0 sm:mt-14 sm:first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="type-card-heading mt-8 scroll-mt-36 text-balance" {...props} />
  ),
  p: (props) => <p className="type-body mt-4 leading-[1.75] text-pretty text-muted" {...props} />,
  ul: (props) => (
    <ul
      className="type-body mt-5 list-disc space-y-2.5 pl-6 leading-[1.75] text-muted marker:text-accent"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="type-body mt-5 list-decimal space-y-2.5 pl-6 leading-[1.75] text-muted marker:font-semibold marker:text-accent"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1 [&>p]:mt-2" {...props} />,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  em: (props) => <em className="text-foreground italic" {...props} />,
  a: MdxLink,
  blockquote: (props) => (
    <blockquote
      className="type-body mt-7 rounded-r-xl border-l-2 border-accent bg-surface-tint/70 p-5 pl-6 text-foreground [&>p]:mt-0 [&>p]:text-foreground"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
