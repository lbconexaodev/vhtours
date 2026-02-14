import { motion } from "framer-motion";
import { CreditCard, Building, QrCode } from "lucide-react";

const methods = [
  { icon: "💳", label: "Visa" },
  { icon: "💳", label: "Mastercard" },
  { icon: "💳", label: "Amex" },
  { icon: "📱", label: "PIX" },
  { icon: "🏦", label: "Transferencia" },
  { icon: "📲", label: "QR Code" },
];

const PaymentSection = () => {
  return (
    <section id="payment" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Medios de Pago <span className="vh-gradient-text">Flexibles</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Pagos 100% Seguros y Verificados
          </p>
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
              className="flex flex-col items-center gap-2 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:vh-shadow transition-all w-28"
            >
              <span className="text-3xl">{m.icon}</span>
              <span className="text-xs font-medium text-muted-foreground">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
