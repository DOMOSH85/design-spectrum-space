import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    title: "Brand Identity - TechCorp",
    category: "branding",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    description: "Complete brand identity design for a technology startup"
  },
  {
    id: 2,
    title: "Mobile App UI - FitTracker",
    category: "ui-ux",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop",
    description: "Modern mobile app interface design for fitness tracking"
  },
  {
    id: 3,
    title: "Website Design - Creative Agency",
    category: "web-design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    description: "Responsive website design for a creative agency"
  },
  {
    id: 4,
    title: "Logo Design - GreenLeaf",
    category: "branding",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
    description: "Eco-friendly brand logo design"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "ui-ux",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "User interface design for online shopping platform"
  },
  {
    id: 6,
    title: "Product Packaging",
    category: "packaging",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop",
    description: "Premium product packaging design"
  }
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "branding", name: "Branding" },
  { id: "ui-ux", name: "UI/UX" },
  { id: "web-design", name: "Web Design" },
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
                    <p className="text-white/90 mb-4 text-sm">{item.description}</p>
                    <div className="flex justify-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit
                      </Button>
                    </div>
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