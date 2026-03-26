import AnimatedSection from "@/components/ui/AnimatedSection.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Scissors, TreeDeciduous, Droplets, Axe } from "lucide-react";

const services = [
  {
    icon: TreeDeciduous,
    title: "Mantenimiento de Jardines",
    description: "Cuidado integral y personalizado para mantener tu jardín en su máximo esplendor durante todo el año.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2532&auto=format&fit=crop"
  },
  {
    icon: Scissors,
    title: "Podas Profesionales",
    description: "Arte y técnica en cada corte. Realizamos podas estéticas y de mantenimiento respetando los ciclos naturales.",
    image: "https://images.unsplash.com/photo-1599629954294-14df9ec50e76?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Droplets,
    title: "Sistemas de Drenaje",
    description: "Soluciones técnicas para proteger tu jardín del exceso de agua y garantizar un suelo saludable.",
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2069&auto=format&fit=crop"
  },
  {
    icon: Axe,
    title: "Tala Controlada",
    description: "Retiramos árboles de forma segura y responsable, incluyendo la gestión completa de residuos.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2513&auto=format&fit=crop"
  }
];

export default function ServicesPreview() {
  return (
    <section className="bg-[#F5F3EF] py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection>
            <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
              Nuestros servicios
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2d2d2d] mt-6 leading-[1.2]">
              Soluciones completas para
              <span className="text-[#4a6741] italic"> tu jardín</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[#2d2d2d]/60 text-lg mt-6 leading-relaxed">
              Cada espacio verde es único. Por eso adaptamos nuestros servicios 
              a las necesidades específicas de tu jardín y tu estilo de vida.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              delay={0.1 * index}
              className={index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                to={createPageUrl("Servicios")}
                className="group block relative overflow-hidden bg-white h-full"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image */}
                  <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-[#1a3a2f]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1a3a2f] transition-colors duration-500">
                      <service.icon className="w-5 h-5 text-[#1a3a2f] group-hover:text-white transition-colors duration-500" />
                    </div>

                    <h3 className="font-playfair text-2xl text-[#2d2d2d] mb-4 group-hover:text-[#1a3a2f] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[#2d2d2d]/60 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-[#9a8866] text-sm tracking-wider uppercase">
                      Saber más
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-16">
            <Link
              to={createPageUrl("Servicios")}
              className="inline-flex items-center gap-3 bg-[#1a3a2f] text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-[#2a4a3f] transition-all duration-500"
            >
              Ver todos los servicios
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}