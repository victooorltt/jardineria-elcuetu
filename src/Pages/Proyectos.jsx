import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/Components/ui/AnimatedSection.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jardín Residencial en Llanes",
    category: "Mantenimiento",
    description: "Transformación completa de un jardín abandonado en un espacio verde vibrante y acogedor. Incluye nuevo césped, plantación de especies autóctonas y sistema de riego.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Poda de Encinas Centenarias",
    category: "Podas",
    description: "Trabajo especializado de poda de formación y saneamiento en encinas con más de 100 años de antigüedad, respetando su estructura natural.",
    image: "https://images.unsplash.com/photo-1599629954294-14df9ec50e76?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Diseño de Jardín Mediterráneo",
    category: "Plantación",
    description: "Creación de un jardín de bajo mantenimiento con especies mediterráneas adaptadas al clima cantábrico. Incluye zonas de grava decorativa y plantas aromáticas.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Sistema de Drenaje en Finca",
    category: "Drenajes",
    description: "Instalación de un sistema de drenaje completo en una finca con problemas de encharcamiento. Solución técnica que protege las raíces de los frutales.",
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Tala Controlada de Eucaliptos",
    category: "Tala",
    description: "Retirada segura de eucaliptos que amenazaban una vivienda. Trabajo complejo realizado con técnicas de trepa y posterior recogida de residuos.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2513&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Jardín de Casa de Indianos",
    category: "Mantenimiento",
    description: "Recuperación del jardín histórico de una casa de indianos en Nueva. Respeto por el diseño original con incorporación de técnicas modernas de mantenimiento.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2532&auto=format&fit=crop"
  }
];

const categories = ["Todos", "Mantenimiento", "Podas", "Plantación", "Drenajes", "Tala"];

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2532&auto=format&fit=crop"
            alt="Nuestros proyectos"
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
              Portfolio
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-[1.1]">
              Proyectos que
              <span className="block text-[#9a8866] italic mt-2">hablan por nosotros</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">
              Cada jardín cuenta una historia. Aquí te mostramos algunos de los 
              trabajos que hemos realizado con dedicación y profesionalidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 border-b border-[#1a3a2f]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#1a3a2f] text-white"
                    : "bg-transparent text-[#2d2d2d]/70 hover:text-[#1a3a2f] border border-[#1a3a2f]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div 
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-sm text-[#1a3a2f] px-4 py-1 text-xs tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* View More */}
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span className="text-white text-sm tracking-wider flex items-center gap-2">
                          Ver proyecto
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <h3 className="font-playfair text-xl text-[#2d2d2d] group-hover:text-[#1a3a2f] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1a3a2f] text-white px-4 py-1 text-xs tracking-wider uppercase">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="font-playfair text-3xl text-[#2d2d2d]">
                  {selectedProject.title}
                </h2>
                <div className="w-12 h-[1px] bg-[#9a8866] my-6" />
                <p className="text-[#2d2d2d]/70 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-8 pt-8 border-t border-[#1a3a2f]/10">
                  <Link
                    to={createPageUrl("Contacto")}
                    className="group inline-flex items-center gap-3 bg-[#1a3a2f] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#2a4a3f] transition-all duration-500"
                  >
                    ¿Quieres algo similar?
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-[#F5F3EF] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2d2d2d]">
              Tu jardín podría ser el próximo
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[#2d2d2d]/60 text-lg mt-6 max-w-2xl mx-auto">
              Cuéntanos tu proyecto y haremos realidad el jardín que siempre has soñado.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              to={createPageUrl("Contacto")}
              className="inline-flex items-center gap-3 bg-[#1a3a2f] text-white px-10 py-5 text-sm tracking-wider uppercase hover:bg-[#2a4a3f] transition-all duration-500 mt-10"
            >
              Empezar mi proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}