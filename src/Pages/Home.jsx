import HeroSection from "@/components/Home/HeroSection.jsx";
import IntroSection from "@/components/Home/IntroSection.jsx";
import ServicesPreview from "@/components/Home/ServicesPreview.jsx";
import CTASection from "@/components/Home/CTASection.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <CTASection />
    </div>
  );
}