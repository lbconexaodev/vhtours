import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  const petals = [0, 72, 144, 216, 288];
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, {
    once: false,
    amount: 0.45,
    margin: "-8% 0px -8% 0px",
  });

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
        variants={{
          closed: { opacity: 0.36, scale: 1.08, clipPath: "circle(6% at 50% 50%)" },
          open: { opacity: 1, scale: 1, clipPath: "circle(86% at 50% 50%)" },
        }}
        initial="closed"
        animate={heroInView ? "open" : "closed"}
        transition={{ duration: 3.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute left-1/2 top-1/2 w-[140vmax] h-[28vmax] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-primary/22 will-change-transform"
            style={{ rotate: `${angle}deg` }}
            variants={{
              closed: { scaleX: 0.18, opacity: 0.28 },
              open: { scaleX: 1.34, opacity: 0 },
            }}
            initial="closed"
            animate={heroInView ? "open" : "closed"}
            transition={{ duration: 2.8, delay: i * 0.16, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-vh-purple-deep/90"
        variants={{ closed: { opacity: 0.64 }, open: { opacity: 1 } }}
        initial="closed"
        animate={heroInView ? "open" : "closed"}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/30"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-primary-foreground mb-6 leading-tight tracking-tight">
            {t("hero.title1")}<br /><span className="text-accent">{t("hero.title2")}</span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary-foreground/90 font-display font-semibold mb-4">
          {t("hero.subtitle")}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
          {t("hero.description")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://www.comprarviagem.com.br/viajaseguroconvhtours/home" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full vh-gradient text-primary-foreground font-display font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-glow">
            <Search className="w-5 h-5" />
            {t("hero.cta1")}
          </a>
          <a href="https://linkfly.to/vhtours" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-display font-bold text-lg hover:bg-primary-foreground/10 transition-all hover:scale-105">
            <MessageCircle className="w-5 h-5" />
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
