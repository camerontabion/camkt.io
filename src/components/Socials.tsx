import { SiGithub } from "@icons-pack/react-simple-icons";
import { CheckIcon, MailIcon } from "lucide-react";
import { CONTACT_EMAIL } from "~/constants/contact";
import { cn } from "~/utils/cn";

interface SocialsProps {
  isCopied: boolean;
  copyToClipboard: (text: string) => void;
  className?: string;
}

const buttonBase =
  "group flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground/80 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-2 hover:text-foreground motion-reduce:transition-none motion-reduce:hover:transform-none";

export const Socials = ({
  isCopied,
  copyToClipboard,
  className,
}: SocialsProps) => (
  <div className={cn("flex items-center gap-3", className)}>
    <EmailButton isCopied={isCopied} copyToClipboard={copyToClipboard} />
    <LinkedInButton />
    <GithubButton />
  </div>
);

interface EmailButtonProps {
  isCopied: boolean;
  copyToClipboard: (text: string) => void;
}

export const EmailButton = ({
  isCopied,
  copyToClipboard,
}: EmailButtonProps) => (
  <button
    type="button"
    onClick={() => copyToClipboard(CONTACT_EMAIL)}
    aria-label={
      isCopied ? "Email address copied to clipboard" : "Copy email address"
    }
    title={isCopied ? "Email copied" : "Copy email address"}
    className={cn(buttonBase, "relative cursor-pointer")}
  >
    {isCopied && (
      <span className="-translate-x-1/2 absolute bottom-2/3 left-full animate-copied whitespace-nowrap text-primary-soft text-xs">
        Copied!
      </span>
    )}
    {isCopied ? (
      <CheckIcon className="size-5 text-accent" />
    ) : (
      <MailIcon className="size-5" />
    )}
  </button>
);

export const LinkedInButton = () => (
  <a
    href="https://www.linkedin.com/in/camerontabion/"
    target="_blank"
    rel="noreferrer"
    aria-label="Open Cameron Tabion's LinkedIn profile"
    title="LinkedIn"
    className={buttonBase}
  >
    <img
      src="/InBug-White.png"
      alt="LinkedIn"
      width="20"
      height="20"
      className="size-5 opacity-80 transition-opacity group-hover:opacity-100"
      loading="eager"
      decoding="async"
    />
  </a>
);

export const GithubButton = () => (
  <a
    href="https://github.com/camerontabion"
    target="_blank"
    rel="noreferrer"
    aria-label="Open Cameron Tabion's GitHub profile"
    title="GitHub"
    className={buttonBase}
  >
    <SiGithub className="size-5" />
  </a>
);
