import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export function ProjectImage({
  src,
  alt,
  caption,
  width,
  height,
}: ProjectImageProps) {
  const isPortrait = height > width;

  return (
    <figure className={`my-10 sm:my-12 ${isPortrait ? "mx-auto max-w-[32rem]" : ""}`}>
      <div className="rounded-2xl border border-border/40 bg-surface-tint/60 p-2 shadow-soft sm:p-3">
        <div className="overflow-hidden rounded-xl border border-border/30 bg-surface">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            sizes={
              isPortrait
                ? "(min-width: 640px) 30.25rem, calc(100vw - 3.75rem)"
                : "(min-width: 1024px) 39.25rem, (min-width: 768px) 40.25rem, (min-width: 640px) calc(100vw - 5.75rem), calc(100vw - 3.75rem)"
            }
            className="h-auto w-full"
          />
        </div>
      </div>
      <figcaption className="mt-3 flex items-start gap-3 px-1 text-[0.8125rem] leading-6 text-muted">
        <span className="mt-3 h-px w-4 shrink-0 bg-accent/60" aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  );
}
