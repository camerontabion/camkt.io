import type { SVGProps } from "react";
import { cn } from "~/utils/cn";

export const Star = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 0c.5 7.5 4 11 12 12-8 1-11.5 4.5-12 12-.5-7.5-4-11-12-12 8-1 11.5-4.5 12-12Z" />
  </svg>
);

interface DecorativeStar {
  position: string;
  size: number;
  delay: string;
  duration: string;
}

const decorativeStars: DecorativeStar[] = [
  // Anchored near the portrait, whose height doesn't move with copy length.
  { position: "top-6 right-10", size: 14, delay: "0s", duration: "4s" },
  { position: "top-20 right-28", size: 8, delay: "1.2s", duration: "5s" },
  // Bottom-anchored: safe on desktop's wide card, but on mobile the card's
  // height tracks the text stack below the portrait, so these drift into
  // whatever copy is shortest that week. Hidden on mobile instead of
  // re-guessing offsets that will just break again next edit.
  {
    position: "bottom-10 right-16 max-sm:hidden",
    size: 11,
    delay: "0.6s",
    duration: "4.5s",
  },
  {
    position: "bottom-24 left-8 max-sm:hidden",
    size: 9,
    delay: "1.8s",
    duration: "5.5s",
  },
];

export const StarField = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 text-primary-soft"
  >
    {decorativeStars.map((star) => (
      <Star
        key={star.position}
        className={cn(
          "absolute animate-twinkle motion-reduce:animate-none motion-reduce:opacity-40",
          star.position,
        )}
        style={{
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>
);
