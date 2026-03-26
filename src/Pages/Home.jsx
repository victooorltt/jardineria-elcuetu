import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/home/CTASection";

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