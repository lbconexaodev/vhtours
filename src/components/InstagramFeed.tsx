import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const instagramPosts = [
  { id: '1', url: 'https://www.instagram.com/reel/DND7gpNxtaq/' },
  { id: '2', url: 'https://www.instagram.com/reel/DTdqCtGiWOG/' },
  { id: '3', url: 'https://www.instagram.com/reel/DTQq9PPlJwT/' },
  { id: '4', url: 'https://www.instagram.com/reel/DS7i-SnkZlU/' },
  { id: '5', url: 'https://www.instagram.com/reel/DUts9aOiNDR/' }
];

const InstagramFeed = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden" id="instagram">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 italic">
            {t("insta.title") || "Síguenos en Instagram"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("insta.desc") || "Mantente al día con nuestras últimas ofertas y destinos @vhtours_br"}
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center text-foreground transition-all opacity-0 group-hover:opacity-100 -ml-5"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center text-foreground transition-all opacity-0 group-hover:opacity-100 -mr-5"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="min-w-[320px] max-w-[320px] bg-card rounded-2xl shadow-xl overflow-hidden snap-center border border-border"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '320px', padding: 0, width: '99.375%' }}
                >
                  {/* Fallback space for script to populate */}
                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                      <Instagram className="w-12 h-12 text-primary mx-auto" strokeWidth={1} />
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/vhtours_br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 vh-gradient text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            {t("insta.btn") || "Ver más en Instagram"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
