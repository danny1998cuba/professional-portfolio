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
      <div className="overflow-hidden rounded-sm border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          sizes={
            isPortrait
              ? "(min-width: 768px) 32rem, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
              : "(min-width: 768px) 41rem, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          }
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
