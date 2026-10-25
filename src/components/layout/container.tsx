import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: "site" | "reading";
};

const widths = {
  site: "max-w-[75rem]",
  reading: "max-w-[46rem]",
} as const;

export function Container({
  className = "",
  size = "site",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${size === "site" ? "lg:px-12" : "lg:px-10"} ${widths[size]} ${className}`}
      {...props}
    />
  );
}
