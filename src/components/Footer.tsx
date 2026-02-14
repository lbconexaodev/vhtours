import { Plane, Phone, Mail, MapPin, QrCode } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full vh-gradient flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">VH TOURS</span>
            </div>
            <p className="text-background/60 text-sm mb-4">{t("footer.trust")}</p>
            <p className="text-sm font-bold text-background/80">CNPJ: 33.662.094/0001-13</p>
            <p className="text-xs text-background/50">VH TOURS EMPREENDIMENTOS LTDA</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="https://wa.me/559591763272" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" /> +55 95 9176-3272
                </a>
              </li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> vhtoursviajes.ga@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Av Brigadeiro Eduardo Gomes 1082, Sala 01, Boa Vista, RR</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t("footer.follow")}</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="https://www.instagram.com/vhtours_br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">📸 Instagram (@vhtours_br)</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100091712356669" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">📘 Facebook</a></li>
              <li><a href="https://chat.whatsapp.com/KM1HhieqK7zGb7jOSsRDdp" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">💬 {t("footer.channel")}</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t("footer.certifications")}</h3>
            <div className="bg-background/10 rounded-xl p-4 space-y-4">
              {/* Cadastur Badge */}
              <div className="bg-background/10 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-green-400 font-bold text-lg">✗</span>
                  <span className="text-accent font-display font-bold text-sm">Cadastur</span>
                </div>
                <p className="text-[10px] text-background/50 italic">Fazendo o turismo legal.</p>
                <div className="mt-1 px-3 py-1 bg-green-500/20 rounded text-green-400 text-xs font-bold uppercase tracking-wider">
                  CERTIFICADO
                </div>
              </div>

              {/* QR Code */}
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-12 h-12 text-foreground" />
                </div>
                <p className="text-[11px] text-background/60 leading-tight">
                  {t("footer.cert.scan")}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t("footer.location")}</h3>
            <div className="rounded-xl overflow-hidden border border-background/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.0570261361464!2d-60.671361399999995!3d2.8416136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93095bd98d372d%3A0xb4a94e46ebd49aa7!2sVH%20TOURS!5e0!3m2!1spt-BR!2sbr!4v1768608793680!5m2!1spt-BR!2sbr"
                width="100%" height="180" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="VH Tours Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/50">
          © 2026 VH Tours Empreendimentos Ltda. CNPJ: 33.662.094/0001-13. {t("footer.rights")} | {t("footer.developed")}{" "}
          <span className="font-bold text-background/70">LB CONEXÃO DEV</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
