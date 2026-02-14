import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import destBuenosAires from "@/assets/dest-buenos-aires.jpg";
import destRio from "@/assets/dest-rio.jpg";
import destSantiago from "@/assets/dest-santiago.jpg";
import destMontevideo from "@/assets/dest-montevideo.jpg";

const packages = [
  {
    image: destBuenosAires,
    destination: "Buenos Aires",
    country: "Argentina",
    price: "USD 350",
    installment: "6x sin interés",
    description: "Descubre la capital del tango, su gastronomía y cultura única.",
  },
  {
    image: destRio,
    destination: "Rio de Janeiro",
    country: "Brasil",
    price: "USD 420",
    installment: "6x sin interés",
    description: "Playas paradisíacas, samba y el Cristo Redentor te esperan.",
  },
  {
    image: destSantiago,
    destination: "Santiago",
    country: "Chile",
    price: "USD 380",
    installment: "6x sin interés",
    description: "Modernidad y naturaleza al pie de los Andes.",
  },
  {
    image: destMontevideo,
    destination: "Montevideo",
    country: "Uruguay",
    price: "USD 290",
    installment: "6x sin interés",
    description: "Ciudad costera con encanto europeo y playas increíbles.",
  },
];

const PackagesSection = () => {
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
            Paquetes <span className="vh-gradient-text">Destacados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Las mejores ofertas seleccionadas para ti.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.destination}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:vh-shadow transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-display font-bold text-background">
                    {pkg.destination}, {pkg.country}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Desde</p>
                    <p className="text-2xl font-display font-black text-primary">
                      {pkg.price}
                    </p>
                    <p className="text-xs text-muted-foreground">{pkg.installment}</p>
                  </div>
                  <a
                    href={`https://wa.me/559591763272?text=Quiero%20información%20sobre%20${pkg.destination}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full vh-gradient text-primary-foreground text-xs font-display font-bold hover:scale-105 transition-transform"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
