import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-orange">
        <span className="font-display text-2xl font-semibold leading-none text-primary-foreground">
          C
        </span>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-wide",
            light ? "text-primary-foreground" : "text-foreground",
          )}
        >
          ChicJov
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-medium uppercase tracking-[0.35em]",
            light ? "text-primary-foreground/70" : "text-accent",
          )}
        >
          Studio
        </span>
      </span>
    </span>
  );
}
