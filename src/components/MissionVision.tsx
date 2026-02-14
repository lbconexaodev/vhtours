import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const MissionVision = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Target, title: t("mission.title"), description: t("mission.desc") },
    { icon: Eye, title: t("vision.title"), description: t("vision.desc") },
  ];

  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="relative group">
              <div className="absolute inset-0 vh-gradient rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl vh-gradient flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
