import { motion } from "framer-motion";
import { IdCard, Globe, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: IdCard,
    title: "Sin Pasaporte",
    desc: "Viaja solo con tu documento de identidad vigente.",
  },
  {
    icon: Globe,
    title: "MERCOSUR",
    desc: "Acceso a Brasil, Argentina, Uruguay, Paraguay, Chile y Colombia.",
  },
  {
    icon: Clock,
    title: "Menos Burocracia",
    desc: "Trámites migratorios más ágiles y sencillos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    desc: "Asesoría completa para que viajes tranquilo.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Viaja solo con tu <span className="vh-gradient-text">Cédula</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora Sudamérica sin necesidad de pasaporte. Facilitamos tu viaje por el MERCOSUR.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 hover:vh-shadow transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:vh-gradient transition-all duration-300">
                <b.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/559591763272?text=Información%20sobre%20viajes%20con%20cédula"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full vh-gradient text-primary-foreground font-display font-bold hover:scale-105 transition-transform vh-shadow"
          >
            Más Información
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
