import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Heart, Shield, Users, Leaf, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por la naturaleza",
    description: "Cada proyecto es una oportunidad de crear belleza y armonía con el entorno natural asturiano."
  },
  {
    icon: Shield,
    title: "Confianza y profesionalidad",
    description: "Nuestro mayor orgullo es la satisfacción de todos nuestros clientes y las relaciones que construimos."
  },
  {
    icon: Users,
    title: "Cercanía familiar",
    description: "Somos una empresa familiar que entiende tus necesidades y ofrece un trato cercano y personalizado."
  },
  {
    icon: Leaf,
    title: "Respeto al medio ambiente",
    description: "Trabajamos en armonía con la naturaleza, utilizando técnicas sostenibles y respetuosas."
  }
];

export default function Nosotros() {
  return (
    <div className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2671&auto=format&fit=crop"
            alt="Sobre nosotros"
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
              Nuestra historia
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-[1.1]">
              Una familia dedicada
              <span className="block text-[#9a8866] italic mt-2">a tu jardín</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                  Quiénes somos
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="font-playfair text-4xl md:text-5xl text-[#2d2d2d] mt-6 leading-[1.2]">
                  Jardinería El Cuetu
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="w-16 h-[1px] bg-[#9a8866] my-8" />
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-6">
                  Somos una empresa familiar de servicios de jardinería con raíces 
                  profundas en San Roque del Acebal, Llanes. Nuestra historia está 
                  escrita en cada jardín que cuidamos, en cada árbol que plantamos 
                  y en cada cliente que confía en nosotros.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-6">
                  Ofrecemos un servicio completamente personalizado, adaptándonos a 
                  las necesidades específicas de cada cliente. Disponemos de la 
                  experiencia acumulada durante años y la maquinaria necesaria para 
                  realizar cualquier tipo de trabajo.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-[#F5F3EF] p-8 border-l-4 border-[#9a8866] mt-10">
                  <p className="text-[#2d2d2d] text-xl font-playfair italic leading-relaxed">
                    "Nuestro mayor logro es tener el agrado de todos nuestros clientes. 
                    Un servicio de jardinería confiable."
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Image Composition */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="Equipo de Jardinería El Cuetu"
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#9a8866]/30 -z-10" />
                
                {/* Stats Card */}
                <div className="absolute -bottom-10 right-0 lg:right-10 bg-[#1a3a2f] text-white p-8 z-20">
                  <div className="text-center">
                    <span className="font-playfair text-5xl block">100%</span>
                    <span className="text-white/70 text-sm tracking-wider uppercase mt-2 block">
                      Clientes<br />satisfechos
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F5F3EF] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                Lo que nos define
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#2d2d2d] mt-6 leading-[1.2]">
                Nuestros valores
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={0.1 * index}>
                <div className="bg-white p-8 h-full group hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[#1a3a2f]/5 flex items-center justify-center mb-6 group-hover:bg-[#1a3a2f] transition-colors duration-500">
                    <value.icon className="w-6 h-6 text-[#1a3a2f] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-playfair text-xl text-[#2d2d2d] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#2d2d2d]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                  alt="Llanes, Asturias"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2f]/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-white/70 text-sm tracking-wider uppercase">Ubicación</span>
                  <h3 className="font-playfair text-3xl text-white mt-2">
                    San Roque del Acebal
                  </h3>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                Nuestra tierra
              </span>
              <h2 className="font-playfair text-4xl text-[#2d2d2d] mt-6 leading-[1.2]">
                Arraigados en <span className="text-[#4a6741] italic">Llanes</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#9a8866] my-8" />
              <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-6">
                Desde San Roque del Acebal, en el corazón de la comarca de Llanes, 
                ofrecemos nuestros servicios a toda la zona oriental de Asturias. 
                Conocemos el clima, el suelo y las especies autóctonas como nadie.
              </p>
              <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-10">
                Esta conexión con nuestra tierra nos permite ofrecer un servicio 
                verdaderamente adaptado a las condiciones únicas de esta región, 
                donde el verde intenso de los prados se encuentra con el azul 
                del Cantábrico.
              </p>
              <Link
                to={createPageUrl("Contacto")}
                className="group inline-flex items-center gap-3 bg-[#1a3a2f] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#2a4a3f] transition-all duration-500"
              >
                Contactar con nosotros
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}