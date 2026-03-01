import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const methods = [
  { icon: "payment/visa.svg", label: "Visa" },
  { icon: "payment/mastercard.svg", label: "Mastercard" },
  { icon: "payment/pix.svg", label: "PIX" },
  { icon: "payment/transfer.svg", label: "Transferencia" },
];

const PaymentSection = () => {
  const { t } = useLanguage();

  return (
    <section id="payment" className="py-24 bg-gradient-to-b from-secondary/70 to-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("payment.title1")} <span className="vh-gradient-text">{t("payment.title2")}</span>
          </h2>
          <p className="text-muted-foreground mb-12">{t("payment.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 max-w-3xl mx-auto"
        >
          {methods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-32 rounded-3xl p-[1px] bg-gradient-to-b from-primary/25 via-border to-primary/15 transition-all duration-500 hover:-translate-y-1 hover:from-primary/45 hover:to-accent/35 hover:vh-shadow"
            >
              <div className="relative flex flex-col items-center gap-3 rounded-3xl bg-card/95 px-5 py-6 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/80 p-2.5 shadow-inner shadow-primary/10 transition-all duration-500 group-hover:bg-primary/10 group-hover:shadow-primary/20">
                  <img
                    src={`${import.meta.env.BASE_URL}${m.icon}`}
                    alt={m.label}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground/90 tracking-wide">{m.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
