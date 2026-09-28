import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "~/utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Lift + highlight border on hover. */
  interactive?: boolean;
  /** Drop the card chrome under `sm`, where borders read as clutter. */
  bareOnMobile?: boolean;
  className?: string;
}

export const Card = ({
  children,
  interactive = true,
  bareOnMobile = false,
  className,
  ...props
}: Props) => (
  <div
    className={cn(
      "relative rounded-2xl border border-border bg-surface/80 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_20px_40px_-24px_rgba(0,0,0,0.7)] backdrop-blur-sm",
      bareOnMobile &&
        "max-sm:rounded-none max-sm:border-0 max-sm:bg-transparent max-sm:shadow-none max-sm:backdrop-blur-none",
      interactive &&
        "hover:-translate-y-1 transition duration-300 ease-out hover:border-border-strong hover:shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_28px_60px_-26px_rgba(0,0,0,0.85)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;
