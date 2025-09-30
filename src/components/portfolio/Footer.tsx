import { Heart, Instagram, Linkedin, Github, Dribbble } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">ArwaGraphics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Creating exceptional digital experiences through innovative design and creative storytelling.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>info.arwagraphics@gmail.com</p>
              <p>+254 793 278 375</p>
              <p>Baba Dogo, Laundry</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Arwa Graphics. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/ArwaGraphics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-pink-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com/ArwaGraphics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="text-muted-foreground hover:text-pink-400"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ArwaGraphics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-blue-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ArwaGraphics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-gray-600"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm flex items-center gap-1">
              @Arwa.Devs
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}