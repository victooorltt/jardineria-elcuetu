import HeroSection from "@/components/home/HeroSection.jsx";
import IntroSection from "@/components/home/IntroSection.jsx";
import ServicesPreview from "@/components/home/ServicesPreview.jsx";
import CTASection from "@/components/home/CTASection.jsx";

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