import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatsAppPromo = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {t("whatsapp.title1")} <span className="text-green-500">{t("whatsapp.title2")}</span>
              </h2>
              <p className="text-muted-foreground mb-8">{t("whatsapp.desc")}</p>
              <a href="https://chat.whatsapp.com/KM1HhieqK7zGb7jOSsRDdp" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-primary-foreground font-display font-bold hover:bg-green-600 hover:scale-105 transition-all w-fit shadow-lg">
                <MessageCircle className="w-5 h-5" />
                {t("whatsapp.cta")}
              </a>
            </div>
            <div className="vh-gradient-dark flex items-center justify-center p-12">
              <div className="text-center">
                <MessageCircle className="w-24 h-24 text-primary-foreground/30 mx-auto mb-4" />
                <p className="text-primary-foreground/60 font-display font-semibold text-lg">{t("whatsapp.exclusive")}</p>
                <p className="text-primary-foreground/40 text-sm mt-2">{t("whatsapp.realtime")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppPromo;
