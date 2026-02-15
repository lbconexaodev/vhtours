import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const langLabels: Record<Language, string> = { es: "ES", pt: "PT", en: "EN" };
const langFlags: Record<Language, string> = { es: "🇪🇸", pt: "🇧🇷", en: "🇺🇸" };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#mission", label: t("nav.mission") },
    { href: "#benefits", label: t("nav.benefits") },
    { href: "#search", label: t("nav.search") },
    { href: "#packages", label: t("nav.packages") },
    { href: "#payment", label: t("nav.payment") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-lg border-b border-border"
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <video
              className="w-11 h-11 rounded-full object-cover bg-white"
              autoPlay
              loop
              muted
              playsInline
              poster="logo-vhtours.jpg"
            >
              <source src="logo-animado-vhtours.mp4" type="video/mp4" />
              <img src="logo-vhtours.jpg" alt="VH Tours Logo" />
            </video>
            <span className="text-xl font-display font-bold tracking-tight text-foreground transition-colors">
              VH TOURS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary transition-all hover:bg-primary/10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <Link
              to="/admin"
              className="ml-2 mr-1 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary transition-all hover:bg-primary/10"
            >
              {t("nav.admin")}
            </Link>
            <div className="relative ml-1">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-foreground transition-all hover:bg-primary/10"
              >
                <Globe className="w-4 h-4" />
                {langFlags[language]} {langLabels[language]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[120px]"
                  >
                    {(Object.keys(langLabels) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${language === lang ? "text-primary font-bold" : "text-foreground"
                          }`}
                      >
                        {langFlags[lang]} {langLabels[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 rounded-lg text-foreground transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Language Dropdown */}
      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 flex gap-2">
              {(Object.keys(langLabels) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setLangOpen(false); }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${language === lang
                    ? "vh-gradient text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                >
                  {langFlags[lang]} {langLabels[lang]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium"
                >
                  {t("nav.admin")}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
