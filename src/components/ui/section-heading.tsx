interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="type-meta text-accent">{eyebrow}</p> : null}
      <h2
        id={id}
        className={`${eyebrow ? "mt-3" : ""} type-section-heading`}
      >
        {title}
      </h2>
      {description ? (
        <p className="type-body mt-4 text-pretty text-muted">{description}</p>
      ) : null}
    </div>
  );
}
