import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "Working with this designer was an absolute pleasure. They transformed our brand identity completely and delivered beyond our expectations. The attention to detail and creative vision is outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowthLab",
    content: "The UI/UX design for our mobile app was phenomenal. User engagement increased by 150% after the redesign. Professional, creative, and always delivered on time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, EcoBloom",
    content: "The branding package was exactly what we needed to stand out in the market. The logo design perfectly captures our eco-friendly values and the entire brand identity is cohesive and beautiful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Product Manager, InnovateCorp",
    content: "Exceptional work on our website redesign. The new design is not only visually stunning but also significantly improved our conversion rates. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-accent fill-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-12 text-center shadow-custom-lg border-border/50">
                  <CardContent className="p-0">
                    <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                    
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center justify-center mb-6">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover shadow-custom-md"
                      />
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}