import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { ProjectImage } from "@/components/projects/project-image";

function MdxLink({ href, ...props }: ComponentPropsWithoutRef<"a">) {
  const isExternal =
    typeof href === "string" && /^(https?:)?\/\//.test(href);

  return (
    <a
      href={href}
      className="rounded-sm font-medium text-accent underline underline-offset-4 transition-colors duration-150 hover:text-accent-strong active:translate-y-px motion-reduce:transition-none"
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
      className="type-section-heading mt-12 scroll-mt-28 text-balance first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="type-card-heading mt-9 scroll-mt-28 text-balance" {...props} />
  ),
  p: (props) => <p className="type-body mt-5 text-pretty text-muted" {...props} />,
  ul: (props) => (
    <ul
      className="type-body mt-5 list-disc space-y-2 pl-6 text-muted marker:text-accent"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="type-body mt-5 list-decimal space-y-2 pl-6 text-muted marker:font-semibold marker:text-accent"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  a: MdxLink,
  blockquote: (props) => (
    <blockquote
      className="type-body mt-7 border-l-2 border-accent pl-5 text-foreground"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
