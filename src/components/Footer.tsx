import { Logo } from "./Logo";
import { Star } from "./Star";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 border-border border-t pt-10 text-center">
      <Logo className="h-8 w-auto text-foreground/80" />
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-muted text-xs">
        <Star className="size-3 text-primary-soft" />
        Looking for full-time work · freelance &amp; contract
      </p>
      <p className="text-muted text-xs">
        &copy; {new Date().getFullYear()} Cameron Keokolo Tabion
      </p>
    </footer>
  );
}
