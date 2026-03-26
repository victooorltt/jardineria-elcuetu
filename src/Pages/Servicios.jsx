import { motion } from "framer-motion";
import AnimatedSection from "@/Components/ui/AnimatedSection.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  Leaf, 
  TreeDeciduous, 
  Droplets, 
  Scissors, 
  Axe,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    id: "mantenimiento",
    icon: Leaf,
    title: "Limpieza y Mantenimiento de Jardines",
    subtitle: "El cuidado que tu jardín merece",
    description: "Contamos con la experiencia y capacidades necesarias para limpiar y mantener tu jardín en perfectas condiciones durante todo el año.",
    features: [
      "Corte de césped profesional",
      "Limpieza de malas hierbas",
      "Fertilización y abonado",
      "Mantenimiento estacional",
      "Control de plagas preventivo"
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: "plantacion",
    icon: TreeDeciduous,
    title: "Plantación de Árboles y Plantas",
    subtitle: "Asesoramiento especializado",
    description: "Al contratar a Jardinería El Cuetu, ofrecemos asesoramiento especializado para poner las mejores plantas para el tipo de suelo y clima de tu jardín.",
    features: [
      "Análisis del tipo de suelo",
      "Selección de especies adaptadas",
      "Plantación profesional",
      "Asesoramiento de ubicación",
      "Cuidados iniciales incluidos"
    ],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "drenajes",
    icon: Droplets,
    title: "Instalación de Drenajes",
    subtitle: "Soluciones técnicas efectivas",
    description: "Tenemos experiencia en colocación de sistemas de drenaje para su jardín, evitando problemas de encharcamiento y protegiendo la salud de tus plantas.",
    features: [
      "Estudio del terreno",
      "Diseño del sistema de drenaje",
      "Instalación profesional",
      "Materiales de calidad",
      "Garantía de funcionamiento"
    ],
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "podas",
    icon: Scissors,
    title: "Podas Profesionales",
    subtitle: "Arte y técnica en cada corte",
    description: "Nuestra empresa realiza todo tipo de podas en sus respectivas épocas, tanto en setos, árboles, palmeras, etc. Respetamos los ciclos naturales de cada especie.",
    features: [
      "Poda de formación",
      "Poda de mantenimiento",
      "Poda de rejuvenecimiento",
      "Recorte de setos",
      "Tratamiento de heridas"
    ],
    image: "https://images.unsplash.com/photo-1599629954294-14df9ec50e76?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "tala",
    icon: Axe,
    title: "Tala de Árboles",
    subtitle: "Seguridad y responsabilidad",
    description: "Cortamos todo tipo de árboles y procedemos a su recogida. Trabajamos con total seguridad y nos encargamos de la gestión completa de residuos.",
    features: [
      "Evaluación del árbol",
      "Tala controlada y segura",
      "Desramado y troceado",
      "Recogida de residuos",
      "Limpieza del área"
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2513&auto=format&fit=crop"
  }
];

export default function Servicios() {
  return (
    <div className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2532&auto=format&fit=crop"
            alt="Servicios de jardinería"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a3a2f]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
              Nuestros servicios
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-[1.1]">
              Soluciones integrales
              <span className="block text-[#9a8866] italic mt-2">para tu jardín</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">
              Desde el mantenimiento diario hasta proyectos de transformación completos. 
              Cada servicio está respaldado por años de experiencia y pasión por la naturaleza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.1}>
              <div 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24 ${
                  index !== 0 ? "border-t border-[#1a3a2f]/10" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-[#1a3a2f] flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Decorative Frame */}
                  <div className={`absolute -bottom-6 w-full h-full border border-[#9a8866]/30 -z-10 ${
                    index % 2 === 1 ? "-right-6" : "-left-6"
                  }`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:pl-8"}>
                  <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                    {service.subtitle}
                  </span>
                  <h2 className="font-playfair text-3xl md:text-4xl text-[#2d2d2d] mt-4 leading-tight">
                    {service.title}
                  </h2>
                  <div className="w-16 h-[1px] bg-[#9a8866] my-6" />
                  <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[#2d2d2d]/80">
                        <Check className="w-5 h-5 text-[#4a6741] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={createPageUrl("Contacto")}
                    className="group inline-flex items-center gap-3 bg-[#1a3a2f] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#2a4a3f] transition-all duration-500"
                  >
                    Solicitar este servicio
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a3a2f] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              ¿No encuentras lo que buscas?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Cada jardín es único y puede requerir soluciones personalizadas. 
              Cuéntanos tu proyecto y encontraremos la mejor manera de ayudarte.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              to={createPageUrl("Contacto")}
              className="inline-flex items-center gap-3 bg-[#9a8866] text-white px-10 py-5 text-sm tracking-wider uppercase hover:bg-[#8a7856] transition-all duration-500 mt-10"
            >
              Consulta sin compromiso
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}