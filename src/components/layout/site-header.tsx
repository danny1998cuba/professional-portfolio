import Link from "next/link";
import { professionalProfile } from "@/content/profile";
import { Container } from "./container";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
] as const;

const linkStyles =
  "inline-flex min-h-11 items-center rounded-lg px-3 text-[0.8125rem] font-medium text-muted underline-offset-4 transition-colors duration-150 hover:bg-surface-tint hover:text-accent-strong hover:underline active:translate-y-px motion-reduce:transition-none";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background shadow-soft">
      <Container className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link
          href="/"
          className="inline-flex min-h-11 w-fit items-center rounded-lg text-sm font-semibold tracking-[-0.02em] underline-offset-4 transition-colors duration-150 hover:text-accent-strong hover:underline active:translate-y-px motion-reduce:transition-none"
        >
          {professionalProfile.name}
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkStyles}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
