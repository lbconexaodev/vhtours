import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { fetchPackages, type VhPackage } from "@/lib/vhApi";

const PackagesSection = () => {
  const { t } = useLanguage();
  const [packages, setPackages] = useState<VhPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
      } catch {
        setError("Erro ao conectar com o servidor.");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("packages.title1")} <span className="vh-gradient-text">{t("packages.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("packages.subtitle")}</p>
        </motion.div>

        {loading ? <p className="text-center text-muted-foreground">Carregando pacotes...</p> : null}
        {error ? <p className="text-center text-destructive">{error}</p> : null}

        {!loading && !error ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={`${pkg.destination}-${pkg.line}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:vh-shadow transition-all duration-500 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.imageUrl || "https://via.placeholder.com/600x400?text=Imagem+nao+disponivel"}
                    alt={pkg.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">{pkg.destination}</h3>
                  <p className="text-2xl font-display font-black text-primary mb-1">{pkg.price}</p>

                  {pkg.cardPrice ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>{pkg.cardPrice}</span>
                    </div>
                  ) : null}

                  <p className="text-muted-foreground text-sm mb-6 flex-1">{pkg.description}</p>

                  <a
                    href={`https://wa.me/559591763272?text=Quero%20informacao%20sobre%20${encodeURIComponent(pkg.destination)}%20por%20${encodeURIComponent(pkg.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full vh-gradient text-primary-foreground font-display font-bold text-sm hover:scale-105 transition-transform w-fit"
                  >
                    {t("packages.cta")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PackagesSection;
