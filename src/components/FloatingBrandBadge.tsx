const FloatingBrandBadge = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 rounded-2xl border border-primary/20 bg-gradient-to-r from-background to-secondary/70 backdrop-blur-sm px-4 py-2.5 vh-shadow">
      <video
        className="w-8 h-8 rounded-full object-cover bg-white ring-2 ring-primary/20"
        autoPlay
        loop
        muted
        playsInline
        poster="logo-vhtours.jpg"
      >
        <source src="logo-animado-vhtours.mp4" type="video/mp4" />
        <img src="logo-vhtours.jpg" alt="VH Tours Logo" />
      </video>
      <span className="text-xs font-bold tracking-wide text-primary whitespace-nowrap">VHTOURS</span>
    </div>
  );
};

export default FloatingBrandBadge;
