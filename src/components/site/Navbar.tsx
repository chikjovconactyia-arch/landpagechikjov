import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { waLink, waMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Criolipólise", href: "#criolipolise" },
  { label: "Resultados", href: "#resultados" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl shadow-soft"
          : "py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="ChicJov Studio">
          <Logo light={!scrolled} />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-accent",
                scrolled ? "text-foreground/80" : "text-primary-foreground/90",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton href={waLink(waMessages.agendar)} target="_blank" rel="noopener" size="sm">
            Agendar Agora
          </CTAButton>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-full p-2 lg:hidden",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-border bg-background p-4 shadow-card lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <CTAButton
            href={waLink(waMessages.agendar)}
            target="_blank"
            rel="noopener"
            className="mt-3 w-full"
            size="sm"
          >
            Agendar Agora
          </CTAButton>
        </div>
      )}
    </header>
  );
}
