import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Layout, Smartphone, Globe, Package, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Creating memorable and unique brand identities that capture your company's essence and values.",
    features: ["Brand Identity", "Logo Variations", "Style Guides"]
  },
  {
    icon: Layout,
    title: "Brand Design",
    description: "Comprehensive branding solutions including visual identity systems and brand guidelines.",
    features: ["Visual Identity", "Brand Strategy", "Marketing Materials"]
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces for web and mobile applications.",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Modern, responsive websites that deliver exceptional user experiences across all devices.",
    features: ["Responsive Design", "User Experience", "Performance"]
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Eye-catching product packaging that stands out on shelves and connects with customers.",
    features: ["Product Packaging", "Label Design", "Print Ready"]
  },
  {
    icon: Zap,
    title: "Digital Marketing",
    description: "Creative digital assets for social media, advertising, and online marketing campaigns.",
    features: ["Social Media", "Ad Campaigns", "Content Creation"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift group cursor-pointer border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}