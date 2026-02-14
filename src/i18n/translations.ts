export type Language = "es" | "pt" | "en";

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.mission": "Misión y Visión",
    "nav.benefits": "Beneficios",
    "nav.search": "Busque su Viaje",
    "nav.packages": "Paquetes",
    "nav.payment": "Pagos",
    "nav.contact": "Contacto",

    // Hero
    "hero.title1": "EL MOMENTO DE",
    "hero.title2": "VIAJAR ES AHORA",
    "hero.subtitle": "Viaja más, pagando menos, con VH TOURS",
    "hero.description": "Expertos en conectar destinos con confianza y los mejores precios del mercado.",
    "hero.cta1": "Comprar Pasaje",
    "hero.cta2": "Hablar con Asesor",

    // Mission/Vision
    "mission.title": "Nuestra Misión",
    "mission.desc": "Conectar sueños con destinos, brindando experiencias de viaje accesibles y seguras para todos nuestros clientes en Sudamérica.",
    "vision.title": "Nuestra Visión",
    "vision.desc": "Ser la agencia de turismo líder en la región, reconocida por nuestra innovación, transparencia y excelencia en el servicio al cliente.",

    // Benefits
    "benefits.title1": "Viaja solo con tu",
    "benefits.title2": "Cédula",
    "benefits.subtitle": "Explora Sudamérica sin necesidad de pasaporte. Facilitamos tu viaje por el MERCOSUR.",
    "benefits.passport": "Sin Pasaporte",
    "benefits.passport.desc": "Viaja solo con tu documento de identidad vigente.",
    "benefits.mercosur": "MERCOSUR",
    "benefits.mercosur.desc": "Acceso a Brasil, Argentina, Uruguay, Paraguay, Chile y Colombia.",
    "benefits.bureaucracy": "Menos Burocracia",
    "benefits.bureaucracy.desc": "Trámites migratorios más ágiles y sencillos.",
    "benefits.security": "Seguridad",
    "benefits.security.desc": "Asesoría completa para que viajes tranquilo.",
    "benefits.cta": "Más Información",

    // Search CTA
    "search.title": "Busque su Viaje",
    "search.desc": "¡Encuentre el mejor precio ahora y finalice su reserva en segundos en nuestro portal oficial!",
    "search.cta": "Buscar mi Viaje Ahora",

    // Packages
    "packages.title1": "Paquetes",
    "packages.title2": "Destacados",
    "packages.subtitle": "Las mejores ofertas seleccionadas para ti.",
    "packages.from": "Desde",
    "packages.cta": "VER OFERTA",

    // Payment
    "payment.title1": "Medios de Pago",
    "payment.title2": "Flexibles",
    "payment.subtitle": "Pagos 100% Seguros y Verificados",

    // WhatsApp Promo
    "whatsapp.title1": "¡Únete a nuestro Grupo de",
    "whatsapp.title2": "WhatsApp!",
    "whatsapp.desc": "Recibe las mejores promociones aéreas y ofertas exclusivas directamente en tu celular. ¡No te pierdas ninguna oportunidad de viajar!",
    "whatsapp.cta": "Entrar al Grupo",
    "whatsapp.exclusive": "Ofertas Exclusivas",
    "whatsapp.realtime": "Promociones en tiempo real",

    // Footer
    "footer.trust": "Tu agencia de confianza para viajes internacionales.",
    "footer.contact": "Contacto",
    "footer.follow": "Síguenos",
    "footer.channel": "Canal de WhatsApp",
    "footer.location": "Ubicación",
    "footer.certifications": "Certificaciones",
    "footer.cert.scan": "Escanee para verificar nuestra licencia oficial en el Ministério do Turismo.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.developed": "Desenvolvido por",

    // Packages descriptions
    "pkg.buenos_aires.desc": "Descubre la capital del tango, su gastronomía y cultura única.",
    "pkg.rio.desc": "Playas paradisíacas, samba y el Cristo Redentor te esperan.",
    "pkg.santiago.desc": "Modernidad y naturaleza al pie de los Andes.",
    "pkg.montevideo.desc": "Ciudad costera con encanto europeo y playas increíbles.",
  },
  pt: {
    "nav.home": "Início",
    "nav.mission": "Missão e Visão",
    "nav.benefits": "Benefícios",
    "nav.search": "Busque sua Viagem",
    "nav.packages": "Pacotes",
    "nav.payment": "Pagamentos",
    "nav.contact": "Contato",

    "hero.title1": "O MOMENTO DE",
    "hero.title2": "VIAJAR É AGORA",
    "hero.subtitle": "Viaje mais, pagando menos, com VH TOURS",
    "hero.description": "Especialistas em conectar destinos com confiança e os melhores preços do mercado.",
    "hero.cta1": "Comprar Passagem",
    "hero.cta2": "Falar com Assessor",

    "mission.title": "Nossa Missão",
    "mission.desc": "Conectar sonhos com destinos, proporcionando experiências de viagem acessíveis e seguras para todos os nossos clientes na América do Sul.",
    "vision.title": "Nossa Visão",
    "vision.desc": "Ser a agência de turismo líder na região, reconhecida pela nossa inovação, transparência e excelência no atendimento ao cliente.",

    "benefits.title1": "Viaje apenas com sua",
    "benefits.title2": "Identidade",
    "benefits.subtitle": "Explore a América do Sul sem necessidade de passaporte. Facilitamos sua viagem pelo MERCOSUL.",
    "benefits.passport": "Sem Passaporte",
    "benefits.passport.desc": "Viaje apenas com seu documento de identidade vigente.",
    "benefits.mercosur": "MERCOSUL",
    "benefits.mercosur.desc": "Acesso ao Brasil, Argentina, Uruguai, Paraguai, Chile e Colômbia.",
    "benefits.bureaucracy": "Menos Burocracia",
    "benefits.bureaucracy.desc": "Trâmites migratórios mais ágeis e simples.",
    "benefits.security": "Segurança",
    "benefits.security.desc": "Assessoria completa para você viajar tranquilo.",
    "benefits.cta": "Mais Informações",

    "search.title": "Busque sua Viagem",
    "search.desc": "Encontre o melhor preço agora e finalize sua reserva em segundos no nosso portal oficial!",
    "search.cta": "Buscar minha Viagem Agora",

    "packages.title1": "Pacotes",
    "packages.title2": "Destaque",
    "packages.subtitle": "As melhores ofertas selecionadas para você.",
    "packages.from": "A partir de",
    "packages.cta": "VER OFERTA",

    "payment.title1": "Meios de Pagamento",
    "payment.title2": "Flexíveis",
    "payment.subtitle": "Pagamentos 100% Seguros e Verificados",

    "whatsapp.title1": "Junte-se ao nosso Grupo de",
    "whatsapp.title2": "WhatsApp!",
    "whatsapp.desc": "Receba as melhores promoções aéreas e ofertas exclusivas diretamente no seu celular. Não perca nenhuma oportunidade de viajar!",
    "whatsapp.cta": "Entrar no Grupo",
    "whatsapp.exclusive": "Ofertas Exclusivas",
    "whatsapp.realtime": "Promoções em tempo real",

    "footer.trust": "Sua agência de confiança para viagens internacionais.",
    "footer.contact": "Contato",
    "footer.follow": "Siga-nos",
    "footer.channel": "Canal do WhatsApp",
    "footer.location": "Localização",
    "footer.certifications": "Certificações",
    "footer.cert.scan": "Escaneie para verificar nossa licença oficial no Ministério do Turismo.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.developed": "Desenvolvido por",

    "pkg.buenos_aires.desc": "Descubra a capital do tango, sua gastronomia e cultura única.",
    "pkg.rio.desc": "Praias paradisíacas, samba e o Cristo Redentor te esperam.",
    "pkg.santiago.desc": "Modernidade e natureza ao pé dos Andes.",
    "pkg.montevideo.desc": "Cidade costeira com charme europeu e praias incríveis.",
  },
  en: {
    "nav.home": "Home",
    "nav.mission": "Mission & Vision",
    "nav.benefits": "Benefits",
    "nav.search": "Find your Trip",
    "nav.packages": "Packages",
    "nav.payment": "Payment",
    "nav.contact": "Contact",

    "hero.title1": "THE TIME TO",
    "hero.title2": "TRAVEL IS NOW",
    "hero.subtitle": "Travel more, paying less, with VH TOURS",
    "hero.description": "Experts in connecting destinations with trust and the best prices on the market.",
    "hero.cta1": "Buy Ticket",
    "hero.cta2": "Talk to an Advisor",

    "mission.title": "Our Mission",
    "mission.desc": "Connect dreams with destinations, providing accessible and safe travel experiences for all our clients in South America.",
    "vision.title": "Our Vision",
    "vision.desc": "To be the leading tourism agency in the region, recognized for our innovation, transparency and excellence in customer service.",

    "benefits.title1": "Travel only with your",
    "benefits.title2": "ID Card",
    "benefits.subtitle": "Explore South America without a passport. We make your MERCOSUR trip easy.",
    "benefits.passport": "No Passport",
    "benefits.passport.desc": "Travel only with your valid ID card.",
    "benefits.mercosur": "MERCOSUR",
    "benefits.mercosur.desc": "Access to Brazil, Argentina, Uruguay, Paraguay, Chile and Colombia.",
    "benefits.bureaucracy": "Less Bureaucracy",
    "benefits.bureaucracy.desc": "Faster and simpler immigration procedures.",
    "benefits.security": "Security",
    "benefits.security.desc": "Full advisory so you can travel worry-free.",
    "benefits.cta": "More Information",

    "search.title": "Find your Trip",
    "search.desc": "Find the best price now and finalize your booking in seconds on our official portal!",
    "search.cta": "Search my Trip Now",

    "packages.title1": "Featured",
    "packages.title2": "Packages",
    "packages.subtitle": "The best offers selected for you.",
    "packages.from": "From",
    "packages.cta": "SEE OFFER",

    "payment.title1": "Payment Methods",
    "payment.title2": "Flexible",
    "payment.subtitle": "100% Secure and Verified Payments",

    "whatsapp.title1": "Join our",
    "whatsapp.title2": "WhatsApp Group!",
    "whatsapp.desc": "Receive the best flight promotions and exclusive offers directly on your phone. Don't miss any travel opportunity!",
    "whatsapp.cta": "Join the Group",
    "whatsapp.exclusive": "Exclusive Offers",
    "whatsapp.realtime": "Real-time promotions",

    "footer.trust": "Your trusted agency for international travel.",
    "footer.contact": "Contact",
    "footer.follow": "Follow Us",
    "footer.channel": "WhatsApp Channel",
    "footer.location": "Location",
    "footer.certifications": "Certifications",
    "footer.cert.scan": "Scan to verify our official license at the Ministry of Tourism.",
    "footer.rights": "All rights reserved.",
    "footer.developed": "Developed by",

    "pkg.buenos_aires.desc": "Discover the capital of tango, its gastronomy and unique culture.",
    "pkg.rio.desc": "Paradise beaches, samba and Christ the Redeemer await you.",
    "pkg.santiago.desc": "Modernity and nature at the foot of the Andes.",
    "pkg.montevideo.desc": "Coastal city with European charm and incredible beaches.",
  },
};
