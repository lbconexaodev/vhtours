import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchCTA = () => {
  return (
    <section id="search" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 vh-gradient rounded-3xl blur-2xl opacity-20" />
          <div className="relative vh-gradient-dark rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-black text-primary-foreground mb-4">
                Busque su Viaje
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                ¡Encuentre el mejor precio ahora y finalice su reserva en segundos en nuestro portal oficial!
              </p>
              <a
                href="https://www.comprarviagem.com.br/viajaseguroconvhtours/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary-foreground text-primary font-display font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                <Search className="w-6 h-6" />
                Buscar mi Viaje Ahora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchCTA;
