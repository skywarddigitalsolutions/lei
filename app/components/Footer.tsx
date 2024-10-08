"use client"
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion } from 'framer-motion';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: SiTiktok, href: "#", label: "TikTok" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
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