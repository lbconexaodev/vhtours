import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import destBuenosAires from "@/assets/dest-buenos-aires.jpg";
import destRio from "@/assets/dest-rio.jpg";
import destSantiago from "@/assets/dest-santiago.jpg";
import destMontevideo from "@/assets/dest-montevideo.jpg";

const PackagesSection = () => {
  const { t } = useLanguage();

  const packages = [
    {
      image: destBuenosAires,
      destination: "Buenos Aires",
      country: "Argentina",
      price: "USD 350",
      installment: "6x sin interés",
      descKey: "pkg.buenos_aires.desc",
    },
    {
      image: destRio,
      destination: "Rio de Janeiro",
      country: "Brasil",
      price: "USD 420",
      installment: "6x sin interés",
      descKey: "pkg.rio.desc",
    },
    {
      image: destSantiago,
      destination: "Santiago",
      country: "Chile",
      price: "USD 380",
      installment: "6x sin interés",
      descKey: "pkg.santiago.desc",
    },
    {
      image: destMontevideo,
      destination: "Montevideo",
      country: "Uruguay",
      price: "USD 290",
      installment: "6x sin interés",
      descKey: "pkg.montevideo.desc",
    },
  ];

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("packages.title1")} <span className="vh-gradient-text">{t("packages.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("packages.subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.destination}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:vh-shadow transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">
                  {pkg.destination}
                </h3>

                <p className="text-2xl font-display font-black text-primary mb-1">
                  {pkg.price}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <CreditCard className="w-4 h-4 text-primary" />
                  <span>{pkg.installment}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {t(pkg.descKey)}
                </p>

                <a
                  href={`https://wa.me/559591763272?text=Quiero%20información%20sobre%20${pkg.destination}`}
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
      </div>
    </section>
  );
};

export default PackagesSection;
