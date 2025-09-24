import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    title: "Luxury Brand Identity - Elevé",
    category: "branding",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=400&fit=crop",
    description: "Complete visual identity for luxury fashion brand including logo, packaging, and brand guidelines"
  },
  {
    id: 2,
    title: "Minimalist Logo Collection",
    category: "branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Clean and modern logo designs for various tech startups and creative agencies"
  },
  {
    id: 3,
    title: "Editorial Magazine Layout",
    category: "print-design",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    description: "Contemporary magazine layout design with focus on typography and visual hierarchy"
  },
  {
    id: 4,
    title: "Corporate Brand Guidelines",
    category: "branding",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=400&fit=crop",
    description: "Comprehensive brand guideline system for financial services company"
  },
  {
    id: 5,
    title: "Restaurant Identity Design",
    category: "branding",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    description: "Full brand identity including logo, menu design, and interior graphics for modern bistro"
  },
  {
    id: 6,
    title: "Product Label Design",
    category: "packaging",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop",
    description: "Premium organic skincare product packaging and label design system"
  },
  {
    id: 7,
    title: "Book Cover Design Series",
    category: "print-design",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
    description: "Creative book cover designs for contemporary fiction series with unified visual theme"
  },
  {
    id: 8,
    title: "Concert Poster Collection",
    category: "print-design",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    description: "Bold and dynamic poster designs for electronic music events and festivals"
  }
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "branding", name: "Branding" },
  { id: "print-design", name: "Print Design" },
  { id: "packaging", name: "Packaging" }
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