import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionVision from "@/components/MissionVision";
import BenefitsSection from "@/components/BenefitsSection";
import SearchCTA from "@/components/SearchCTA";
import PackagesSection from "@/components/PackagesSection";
import PaymentSection from "@/components/PaymentSection";
import WhatsAppPromo from "@/components/WhatsAppPromo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <MissionVision />
        <BenefitsSection />
        <SearchCTA />
        <PackagesSection />
        <PaymentSection />
        <WhatsAppPromo />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
