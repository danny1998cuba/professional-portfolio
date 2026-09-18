import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  newTab?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary:
    "border-foreground bg-foreground text-surface hover:border-accent-strong hover:bg-accent-strong",
  secondary:
    "border-border bg-surface text-foreground hover:border-foreground hover:bg-background",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  newTab = false,
  ariaLabel,
}: ButtonLinkProps) {
  const className = `inline-flex min-h-11 items-center justify-center rounded-sm border px-4 py-2.5 text-sm font-semibold transition-colors duration-150 active:translate-y-px motion-reduce:transition-none ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
