import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2532&auto=format&fit=crop"
          alt="Jardín"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3a2f]/90" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                Empecemos juntos
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mt-6 leading-[1.1]">
                ¿Listo para transformar
                <span className="block text-[#9a8866] italic mt-2">tu jardín?</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-white/70 text-lg mt-8 leading-relaxed max-w-lg">
                Cuéntanos tu proyecto y recibe un información. Nuestro equipo te asesorará sobre las mejores 
                soluciones para tu espacio.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10">
                <Link
                  to={createPageUrl("Contacto")}
                  className="group inline-flex items-center gap-3 bg-[#9a8866] text-white px-10 py-5 text-sm tracking-wider uppercase hover:bg-[#8a7856] transition-all duration-500"
                >
                  Solicitar información
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:pl-12">
            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-12">
                <h3 className="font-playfair text-2xl text-white mb-8">
                  Contacto directo
                </h3>

                <div className="space-y-6">
                  <a 
                    href="tel:629612422" 
                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#9a8866] group-hover:bg-[#9a8866]/20 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white/50 text-xs tracking-wider uppercase block mb-1">Teléfono</span>
                      <span className="text-lg">629 612 422</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:jardineria.elcuetu@gmail.com" 
                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#9a8866] group-hover:bg-[#9a8866]/20 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white/50 text-xs tracking-wider uppercase block mb-1">Email</span>
                      <span className="text-lg">jardineria.elcuetu@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white/50 text-xs tracking-wider uppercase block mb-1">Ubicación</span>
                      <span className="text-lg">San Roque del Acebal, Llanes</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}