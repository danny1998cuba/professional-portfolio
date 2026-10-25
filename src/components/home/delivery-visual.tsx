const steps = [
  { label: "Requirements", path: "M4 4h6l2 2 2-2h6v14h-6l-2 2-2-2H4ZM12 6v14" },
  { label: "Implementation", path: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" },
  { label: "Delivery", path: "M4 5h16v14H4ZM8 12h8m-3-3 3 3-3 3" },
] as const;

/** A conceptual workflow, not a timeline or a screenshot of a client product. */
export function DeliveryVisual() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-sm rounded-2xl border border-border/40 bg-surface p-3 shadow-soft wrap-break-word sm:p-4 lg:order-1" aria-hidden="true">
      <div className="mb-4 hidden overflow-hidden rounded-xl border border-border/30 bg-background lg:block">
        <svg className="h-auto w-full" width="320" height="156" viewBox="0 0 320 156" fill="none" focusable="false">
          <path d="M0 26h320" stroke="var(--border)" strokeOpacity="0.45" />
          <circle cx="15" cy="13" r="2.5" fill="var(--accent)" />
          <circle cx="25" cy="13" r="2.5" fill="var(--border)" />
          <circle cx="35" cy="13" r="2.5" fill="var(--border)" />
          <rect x="18" y="42" width="132" height="96" rx="8" fill="var(--surface-tint)" stroke="var(--border)" strokeOpacity="0.4" />
          <rect x="31" y="57" width="79" height="7" rx="3.5" fill="var(--accent)" />
          <path d="M31 77h99M31 87h76" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
          <rect x="31" y="105" width="45" height="19" rx="5" fill="var(--accent)" fillOpacity="0.15" />
          <rect x="165" y="42" width="137" height="42" rx="8" fill="var(--surface)" stroke="var(--border)" strokeOpacity="0.4" />
          <rect x="177" y="54" width="19" height="18" rx="5" fill="var(--surface-tint)" />
          <path d="M207 57h76m-76 10h49" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
          <rect x="165" y="96" width="137" height="42" rx="8" fill="var(--surface)" stroke="var(--border)" strokeOpacity="0.4" />
          <rect x="177" y="108" width="19" height="18" rx="5" fill="var(--surface-tint)" />
          <path d="M207 111h57m-57 10h76" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="grid gap-2 min-[480px]:grid-cols-3 lg:grid-cols-1">
        {steps.map((step) => (
          <div key={step.label} className="flex min-w-0 items-center gap-3 rounded-xl border border-border/40 bg-surface px-3 py-3 min-[480px]:flex-col min-[480px]:gap-2 lg:flex-row lg:gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-tint text-accent">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                <path d={step.path} />
              </svg>
            </span>
            <span className="min-w-0 text-xs font-medium text-foreground">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
