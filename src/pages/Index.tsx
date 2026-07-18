import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import EditorialSection from "@/components/EditorialSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import ApproachSection from "@/components/ApproachSection";
import MissionSection from "@/components/MissionSection";
import FitSection from "@/components/FitSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background font-body overflow-x-hidden">
        <Navigation />
        <Hero />
        <ProblemSection />
        <EditorialSection />
        <PortfolioPreview />
        <ApproachSection />
        <MissionSection />
        <FitSection />
        <CTASection />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
