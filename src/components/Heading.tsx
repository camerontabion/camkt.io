import { cn } from "~/utils/cn";
import { Star } from "./Star";

interface Props {
  title: string;
  id?: string;
  className?: string;
}

export const Heading = ({ title, id, className }: Props) => (
  <div className={cn("flex flex-col gap-4", className)}>
    <div className="flex items-center gap-3">
      <Star className="size-5 shrink-0 text-primary-soft md:size-6" />
      <h2
        id={id}
        className="font-display font-medium text-3xl text-foreground tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="ml-2 h-px flex-1 bg-gradient-to-r from-border-strong to-transparent"
      />
      <Star className="size-5 shrink-0 text-primary-soft md:size-6" />
    </div>
  </div>
);
