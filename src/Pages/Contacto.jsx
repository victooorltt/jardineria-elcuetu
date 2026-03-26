import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/Components/ui/AnimatedSection.jsx";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/Components/ui/button.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { Textarea } from "@/Components/ui/textarea.jsx";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/Components/ui/select.jsx";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "629 612 422",
    href: "tel:629612422",
    description: "Llámanos para una consulta rápida"
  },
  {
    icon: Mail,
    title: "Email",
    value: "jardineria.elcuetu@gmail.com",
    href: "mailto:jardineria.elcuetu@gmail.com",
    description: "Escríbenos para presupuestos"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "San Roque del Acebal, Llanes",
    href: null,
    description: "Servicio en toda la comarca"
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lunes a Viernes, 8:00 - 19:00",
    href: null,
    description: "Sábados con cita previa"
  }
];

const services = [
  "Mantenimiento de jardín",
  "Plantación de árboles y plantas",
  "Instalación de drenajes",
  "Podas profesionales",
  "Tala de árboles",
  "Otro servicio"
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop"
            alt="Contacto"
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
              Contacto
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-[1.1]">
              Hablemos de
              <span className="block text-[#9a8866] italic mt-2">tu jardín</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">
              Estamos aquí para ayudarte y guiarte hacia la mejor opción.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 border-b border-[#1a3a2f]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={item.title} delay={0.1 * index}>
                <div className="bg-white p-6 lg:p-8 h-full border border-[#1a3a2f]/5 hover:border-[#9a8866]/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#1a3a2f]/5 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#1a3a2f]" />
                  </div>
                  <h3 className="text-[#2d2d2d]/50 text-xs tracking-wider uppercase mb-2">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="font-playfair text-lg text-[#2d2d2d] hover:text-[#1a3a2f] transition-colors block mb-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-playfair text-lg text-[#2d2d2d] block mb-2">
                      {item.value}
                    </span>
                  )}
                  <p className="text-[#2d2d2d]/50 text-sm">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Content */}
            <div>
              <AnimatedSection>
                <span className="text-[#9a8866] tracking-[0.3em] uppercase text-xs">
                  Solicita información
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="font-playfair text-4xl md:text-5xl text-[#2d2d2d] mt-6 leading-[1.2]">
                  ¿Tienes un proyecto en mente?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="w-16 h-[1px] bg-[#9a8866] my-8" />
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-[#2d2d2d]/70 text-lg leading-relaxed mb-8">
                  Rellena el formulario y nos pondremos en contacto contigo para 
                  conocer los detalles de tu proyecto.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-[#F5F3EF] p-8">
                  <h3 className="font-playfair text-xl text-[#2d2d2d] mb-4">
                    ¿Prefieres llamarnos?
                  </h3>
                  <p className="text-[#2d2d2d]/70 mb-6">
                    Si tienes prisa o prefieres hablar directamente, estamos 
                    disponibles por teléfono de lunes a viernes.
                  </p>
                  <a 
                    href="tel:629612422"
                    className="inline-flex items-center gap-3 text-[#1a3a2f] font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-xl">629 612 422</span>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-white p-8 lg:p-12 border border-[#1a3a2f]/10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#4a6741]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-[#4a6741]" />
                    </div>
                    <h3 className="font-playfair text-2xl text-[#2d2d2d] mb-4">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-[#2d2d2d]/70 mb-8">
                      Gracias por contactarnos. Te responderemos en menos de 24 horas.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-[#1a3a2f] text-[#1a3a2f] hover:bg-[#1a3a2f] hover:text-white"
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[#2d2d2d]/60 text-sm tracking-wide block mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="border-[#1a3a2f]/20 focus:border-[#1a3a2f] rounded-none h-12"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="text-[#2d2d2d]/60 text-sm tracking-wide block mb-2">
                          Teléfono *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-[#1a3a2f]/20 focus:border-[#1a3a2f] rounded-none h-12"
                          placeholder="Tu teléfono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[#2d2d2d]/60 text-sm tracking-wide block mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-[#1a3a2f]/20 focus:border-[#1a3a2f] rounded-none h-12"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="text-[#2d2d2d]/60 text-sm tracking-wide block mb-2">
                        Servicio de interés
                      </label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleChange("service", value)}
                      >
                        <SelectTrigger className="border-[#1a3a2f]/20 focus:border-[#1a3a2f] rounded-none h-12">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-[#2d2d2d]/60 text-sm tracking-wide block mb-2">
                        Cuéntanos tu proyecto *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="border-[#1a3a2f]/20 focus:border-[#1a3a2f] rounded-none min-h-[150px] resize-none"
                        placeholder="Describe brevemente lo que necesitas..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1a3a2f] hover:bg-[#2a4a3f] text-white rounded-none h-14 text-sm tracking-wider uppercase"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Enviar mensaje
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>

                    <p className="text-[#2d2d2d]/40 text-xs text-center">
                      Al enviar este formulario aceptas que contactemos contigo 
                      para responder a tu consulta.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#1a3a2f] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <h2 className="font-playfair text-3xl md:text-4xl text-white leading-tight">
                  Servicio en toda la comarca de Llanes
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-white/70 text-lg mt-6 leading-relaxed">
                  Desde San Roque del Acebal cubrimos toda la zona oriental de Asturias. 
                  No importa dónde estés, si tienes un jardín, podemos ayudarte.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="flex items-center gap-4 mt-8">
                  <MapPin className="w-6 h-6 text-[#9a8866]" />
                  <span className="text-white text-lg">
                    San Roque del Acebal, Llanes, Asturias
                  </span>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-8 text-center">
                <p className="text-white/60 mb-4">Zona de servicio</p>
                <p className="font-playfair text-2xl text-white">
                  Llanes y alrededores
                </p>
                <p className="text-[#9a8866] mt-2">
                  Consulta disponibilidad para otras zonas
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}