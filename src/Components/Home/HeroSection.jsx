import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2532&auto=format&fit=crop"
          alt="Jardín profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2f]/90 via-[#1a3a2f]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center"> {/* Contenedor centralizado */}
          
          {/* Decorative Line (Centrada) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-[#9a8866] mb-8 mx-auto" 
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white tracking-[0.3em] uppercase text-sm font-light mb-6"
          >
            Jardinería de confianza en Llanes
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8"
          >
            Donde la naturaleza
            <span className="block text-[#CFB288] italic mt-2">encuentra su arte</span>
          </motion.h1>

          {/* Description (Centrada explícitamente) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto" 
          >
            Una empresa familiar dedicada a transformar espacios exteriores 
            en refugios de belleza natural. Servicio personalizado, 
            experiencia comprobada.
          </motion.p>

          {/* CTA Buttons (Centrados horizontalmente) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          >
            <Link
              to={createPageUrl("Contacto")}
              className="group inline-flex items-center justify-center gap-3 bg-[#9a8866] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#8a7856] transition-all duration-500"
            >
              Solicitar Información
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to={createPageUrl("Servicios")}
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-all duration-500"
            >
              Descubrir servicios
            </Link>
          </motion.div>
        </div>
      </div> 
    </section>
  );
}