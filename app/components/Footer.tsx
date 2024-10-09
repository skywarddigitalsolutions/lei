"use client"
import { useState } from 'react';
import { FaBehance, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { CiMail } from 'react-icons/ci';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    { 
      icon: FaWhatsapp, 
      href: "https://wa.me/541138717447?text=Hola%20Leila,%20trabajemos%20juntos", 
      label: "WhatsApp" 
    },
    { 
      icon: FaBehance, 
      href: "https://www.behance.net/leilaabalos", 
      label: "Behance" 
    },
    { 
      icon: CiMail, 
      href: "mailto:leilaabalos1@gmail.com", 
      label: "Mail" 
    },
  ];

  return (
    <footer className="bg-yellow-200 text-gris py-16 px-5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h5 className="text-5xl font-bold mb-4">Leila Abalos</h5>
          <div className="w-24 h-1 bg-rojo mx-auto mb-4"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center space-x-8 mt-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-gris hover:text-black transition-colors duration-200 text-3xl relative"
              onHoverStart={() => setHoveredIcon(social.label)}
              onHoverEnd={() => setHoveredIcon(null)}
              whileHover={{ scale: 1.2 }}
              aria-label={social.label}
              target="_blank" // Abre en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
            >
              <social.icon />
              {hoveredIcon === social.label && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap"
                >
                  {social.label}
                </motion.span>
              )}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center text-sm text-gris"
        >
          <p>&copy; {new Date().getFullYear()} Skyward Digital Solutions. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
