import { MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(waMessages.agendar)}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">Agendar</span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </a>
  );
}
