import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { WhoWeAre } from "@/components/landing/WhoWeAre";
import { StickyNav } from "@/components/landing/StickyNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <WhoWeAre />
    </div>
  );
};

export default Index;
