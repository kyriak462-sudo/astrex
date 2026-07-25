import { cn } from "@/lib/utils";

export function PlanetMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="13" stroke="currentColor" strokeWidth="2.25" />
      <ellipse
        cx="32"
        cy="32"
        rx="25"
        ry="7"
        transform="rotate(-20 32 32)"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-white", className)}>
      <PlanetMark className={cn("h-6 w-6", markClassName)} />
      <span className={cn("wordmark text-lg leading-none", wordmarkClassName)}>
        Astrex
      </span>
    </span>
  );
}
