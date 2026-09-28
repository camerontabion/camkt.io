import { ChevronDown } from "lucide-react";
import { Card } from "~/components/Card";
import { Socials } from "~/components/Socials";
import { StarField } from "~/components/Star";
import { CONTACT_EMAIL } from "~/constants/contact";
import useCopyToClipboard from "~/hooks/useCopyToClipboard";
import { cn } from "~/utils/cn";

export default function Hero() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <section className="mx-auto w-full max-w-5xl animate-reveal">
      <Card
        interactive={false}
        bareOnMobile
        className="relative overflow-hidden p-6 max-sm:overflow-visible max-sm:px-0 max-sm:pt-8 max-sm:pb-0 sm:p-8 md:p-12"
      >
        <div className="-top-24 -right-16 pointer-events-none absolute size-72 rounded-full bg-primary/15 blur-[100px] max-sm:hidden" />
        <StarField />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">
          {/* One flat column so mobile can reorder; `sm:mt-2` on the socials
              row keeps the wider group gap the old nested layout had. */}
          <div className="flex flex-col gap-5 max-sm:gap-6">
            <p className="font-display text-lg text-primary-soft italic max-sm:order-2">
              Full stack engineer who builds web and mobile apps with care.
            </p>
            <h1 className="font-display font-medium text-4xl text-foreground leading-[1.05] tracking-tight max-sm:order-1 sm:text-5xl sm:leading-[1.02] md:text-6xl">
              Cameron Keokolo Tabion
            </h1>
            <About
              className="max-sm:order-3"
              copyToClipboard={copyToClipboard}
            />
            <div className="flex flex-wrap items-center gap-4 max-sm:order-4 sm:mt-2">
              <Socials isCopied={isCopied} copyToClipboard={copyToClipboard} />
            </div>
          </div>

          <Portrait />
        </div>
      </Card>
      <ScrollHint />
    </section>
  );
}

const ScrollHint = () => (
  <div className="mt-8 flex animate-scroll-hint justify-center opacity-0 motion-reduce:animate-none motion-reduce:opacity-70">
    <span
      aria-hidden="true"
      className="flex flex-col items-center gap-1.5 text-muted"
    >
      <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
      <ChevronDown className="size-5 animate-bounce motion-reduce:animate-none" />
    </span>
  </div>
);

const Portrait = () => (
  <div className="relative mx-auto w-44 shrink-0 max-md:order-first md:w-56">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />
    <div className="relative overflow-hidden rounded-3xl bg-surface-2">
      <img
        src="/me.jpg"
        alt="Portrait of Cameron Keokolo Tabion"
        width={240}
        height={276}
        className="w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  </div>
);

interface AboutProps {
  copyToClipboard: (text: string) => void;
  className?: string;
}

const About = ({ copyToClipboard, className }: AboutProps) => (
  <p className={cn("max-w-xl text-base text-muted leading-relaxed", className)}>
    Currently looking for full-time work and the odd freelance project—find me
    at{" "}
    <button
      type="button"
      onClick={() => copyToClipboard(CONTACT_EMAIL)}
      aria-label="Copy email address to clipboard"
      title="Copy email address"
      className="text-foreground/90 underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary-soft hover:decoration-primary-soft"
    >
      {CONTACT_EMAIL}
    </button>
    .
  </p>
);
