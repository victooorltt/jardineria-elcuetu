import HeroSection from "@/Components/Home/HeroSection.jsx";
import IntroSection from "@/Components/Home/IntroSection.jsx";
import ServicesPreview from "@/Components/Home/ServicesPreview.jsx";
import CTASection from "@/Components/Home/CTASection.jsx";

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