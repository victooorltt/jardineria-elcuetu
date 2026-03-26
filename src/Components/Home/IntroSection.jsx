import AnimatedSection from "@/components/ui/AnimatedSection.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function IntroSection() {
  return (
    <section className="bg-[#FAFAF8] py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <AnimatedSection delay={0.1}>
              <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                Nuestra esencia
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#2d2d2d] mt-6 leading-[1.2]">
                Más que jardinería,
                <span className="block text-[#4a6741] italic">cuidamos tu hogar</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="w-16 h-[1px] bg-[#9a8866] my-8" />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-6">
                En Jardinería El Cuetu creemos que cada jardín cuenta una historia. 
                Somos una empresa familiar arraigada en San Roque del Acebal, 
                donde la tradición asturiana se une con técnicas modernas de paisajismo.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-10">
                Nuestro compromiso es simple: ofrecer un servicio tan personalizado 
                que cada cliente sienta que su jardín recibe la atención que merece. 
                No trabajamos con plantillas, trabajamos con personas.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Link
                to={createPageUrl("Nosotros")}
                className="inline-flex items-center gap-3 text-[#1a3a2f] font-medium tracking-wide group"
              >
                <span className="border-b border-[#1a3a2f]/30 group-hover:border-[#1a3a2f] transition-colors duration-300">
                  Conoce nuestra historia
                </span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>

          {/* Right Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop"
                    alt="Jardinero profesional trabajando"
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                </div>

                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#9a8866]/30 -z-10" />

                {/* Floating Badge */}
                <div className="absolute -bottom-8 -right-4 lg:right-8 bg-[#1a3a2f] text-white p-6 lg:p-8 z-20">
                  <span className="font-playfair text-4xl lg:text-5xl block">5+</span>
                  <span className="text-white/70 text-sm tracking-wider uppercase mt-1 block">
                    Años de<br />experiencia
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}