import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://linkfly.to/vhtours"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group"
      title="Grupo WhatsApp VH Tours"
      aria-label="Entrar no grupo WhatsApp da VH Tours"
    >
      <div className="flex items-center gap-2 rounded-2xl border border-green-500/30 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white shadow-md">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-xs font-bold text-green-800">WhatsApp VH Tours</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
