import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  newTab?: boolean;
  ariaLabel?: string;
  download?: string;
}

const variants = {
  primary:
    "button-primary border-accent bg-accent text-surface",
  secondary:
    "button-secondary border-border bg-surface text-foreground",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  newTab = false,
  ariaLabel,
  download,
}: ButtonLinkProps) {
  const className = `button-feedback inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-center text-sm font-semibold shadow-soft ${variants[variant]}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={className}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        download={download}
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
