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

const Index = () => {
  return (
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
  );
};

export default Index;
