import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navigation = [
  { name: "Inicio", page: "Home" },
  { name: "Servicios", page: "Servicios" },
  { name: "Nosotros", page: "Nosotros" },
  { name: "Proyectos", page: "Proyectos" },
  { name: "Contacto", page: "Contacto" }
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = currentPageName === "Home";

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      {/* Main Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm" 
            : isHome 
              ? "bg-transparent" 
              : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link 
              to={createPageUrl("Home")} 
              className="relative z-10 group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 border-2 flex items-center justify-center transition-colors duration-300 ${
                  isScrolled || !isHome ? "border-[#1a3a2f]" : "border-white"
                }`}>
                  <span className={`font-playfair text-xl font-semibold transition-colors duration-300 ${
                    isScrolled || !isHome ? "text-[#1a3a2f]" : "text-white"
                  }`}>
                    C
                  </span>
                </div>
                <div>
                  <span className={`font-playfair text-lg tracking-wide block leading-none transition-colors duration-300 ${
                    isScrolled || !isHome ? "text-[#1a3a2f]" : "text-white"
                  }`}>
                    El Cuetu
                  </span>
                  <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled || !isHome ? "text-[#1a3a2f]/60" : "text-white/60"
                  }`}>
                    Jardinería
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`text-sm tracking-wide transition-colors duration-300 relative group ${
                    currentPageName === item.page
                      ? isScrolled || !isHome ? "text-[#1a3a2f]" : "text-white"
                      : isScrolled || !isHome ? "text-[#2d2d2d]/70 hover:text-[#1a3a2f]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${
                    currentPageName === item.page ? "w-full" : "w-0 group-hover:w-full"
                  } ${isScrolled || !isHome ? "bg-[#1a3a2f]" : "bg-white"}`} />
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              to={createPageUrl("Contacto")}
              className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                isScrolled || !isHome
                  ? "bg-[#1a3a2f] text-white hover:bg-[#2a4a3f]"
                  : "bg-white/10 border border-white/30 text-white hover:bg-white/20"
              }`}
            >
              Información
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled || !isHome ? "text-[#1a3a2f]" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[#1a3a2f]/10"
            >
              <div className="px-6 py-8 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className={`block py-3 text-lg transition-colors ${
                      currentPageName === item.page
                        ? "text-[#1a3a2f] font-medium"
                        : "text-[#2d2d2d]/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 mt-4 border-t border-[#1a3a2f]/10">
                  <a href="tel:629612422" className="flex items-center gap-3 py-2 text-[#1a3a2f]">
                    <Phone className="w-4 h-4" />
                    629 612 422
                  </a>
                  <a href="mailto:jardineria.elcuetu@gmail.com" className="flex items-center gap-3 py-2 text-[#1a3a2f]">
                    <Mail className="w-4 h-4" />
                    jardineria.elcuetu@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a3a2f] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center">
                  <span className="font-playfair text-xl font-semibold">C</span>
                </div>
                <div>
                  <span className="font-playfair text-lg tracking-wide block leading-none">El Cuetu</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">Jardinería</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                Una empresa familiar dedicada a transformar espacios exteriores 
                en refugios de belleza natural. Servicio de jardinería confiable 
                en toda la comarca de Llanes.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-playfair text-lg mb-6">Navegación</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={createPageUrl(item.page)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <a href="tel:629612422" className="hover:text-white transition-colors">
                    629 612 422
                  </a>
                </li>
                <li>
                  <a href="mailto:jardineria.elcuetu@gmail.com" className="hover:text-white transition-colors break-all">
                    jardineria.elcuetu@gmail.com
                  </a>
                </li>
                <li>
                  San Roque del Acebal<br />
                  Llanes, Asturias
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Jardinería El Cuetu. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-sm">
              Servicio de jardinería profesional en Llanes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}