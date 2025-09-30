import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

// Import images from the repository `uploads` folder so Vite bundles them into dist
import logoImg from "../../../uploads/Logo.webp";
import brandImg from "../../../uploads/Brand Identity.png";
import posterImg from "../../../uploads/poster.webp";
import socialImg from "../../../uploads/social.jpg";
import packagingImg from "../../../uploads/Packaging labe.jpeg";
import illustrationImg from "../../../uploads/illustration.jpg";
import typographyImg from "../../../uploads/typography.jpg";
import cardsImg from "../../../uploads/cards.jpg";

// Simplified, designer-focused gallery data
const galleryItems = [
  {
    id: 1,
    title: "Logo Suite — Clean Marks",
    category: "logos",
    image: logoImg,
    description: "Flexible logo variations and marks for small brands"
  },
  {
    id: 2,
    title: "Brand Identity — Café Mono",
    category: "branding",
    image: brandImg,
    description: "Logo, color system, and simple usage guidelines"
  },
  {
    id: 3,
    title: "Poster Series — Event Posters",
    category: "print",
    image: posterImg,
    description: "Bold typographic posters for local events"
  },
  {
    id: 4,
    title: "Social Templates",
    category: "digital",
    image: socialImg,
    description: "Editable social media post templates with clear hierarchy"
  },
  {
    id: 5,
    title: "Packaging Label",
    category: "packaging",
    image: packagingImg,
    description: "Simple, print-ready label for a boutique product"
  },
  {
    id: 6,
    title: "Illustration Study",
    category: "illustration",
    image: illustrationImg,
    description: "Hand-drawn vector illustrations and iconography"
  },
  {
    id: 7,
    title: "Typography Exploration",
    category: "branding",
    image: typographyImg,
    description: "Type pairing and layout samples for brand use"
  },
  {
    id: 8,
    title: "Business Card Suite",
    category: "print",
    image: cardsImg,
    description: "Simple card systems for consistency across touchpoints"
  }
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "logos", name: "Logos" },
  { id: "branding", name: "Branding" },
  { id: "print", name: "Print" },
  { id: "digital", name: "Digital" },
  { id: "packaging", name: "Packaging" },
  { id: "illustration", name: "Illustration" }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent projects and creative solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-custom-md"
                    : "hover:bg-muted"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl bg-card shadow-custom-md hover:shadow-custom-lg transition-all duration-300"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                >
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </motion.div>

                {/* Bottom Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}