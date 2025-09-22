import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const designQuotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    text: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Design creates culture. Culture shapes values. Values determine the future.",
    author: "Robert L. Peters"
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames"
  },
  {
    text: "Design is a solution to a problem. Art is a question to a problem.",
    author: "John Maeda"
  }
];

const designFacts = [
  "The color blue is associated with trust and reliability, which is why it's popular among tech companies.",
  "The golden ratio (1.618) appears frequently in nature and is often used in design for pleasing proportions.",
  "Studies show that people form first impressions of websites in as little as 50 milliseconds.",
  "White space, or negative space, is just as important as the elements it surrounds in good design.",
  "The average person sees over 5,000 advertisements per day in modern society.",
  "Typography accounts for 95% of web design, making font choice crucial for user experience."
];

export function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [showQuote, setShowQuote] = useState(true);

  // Auto-rotate quotes and facts
  useEffect(() => {
    const interval = setInterval(() => {
      if (showQuote) {
        setCurrentQuote((prev) => (prev + 1) % designQuotes.length);
      } else {
        setCurrentFact((prev) => (prev + 1) % designFacts.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [showQuote]);

  // Switch between quotes and facts
  useEffect(() => {
    const switchInterval = setInterval(() => {
      setShowQuote((prev) => !prev);
    }, 12000);

    return () => clearInterval(switchInterval);
  }, []);

  const refreshContent = () => {
    if (showQuote) {
      setCurrentQuote((prev) => (prev + 1) % designQuotes.length);
    } else {
      setCurrentFact((prev) => (prev + 1) % designFacts.length);
    }
  };

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur border-white/20 shadow-custom-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Quote className="w-6 h-6 text-accent" />
                  <span className="text-white/80 font-medium">
                    {showQuote ? "Design Quote" : "Design Fact"}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={refreshContent}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                {showQuote ? (
                  <motion.div
                    key={`quote-${currentQuote}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                      "{designQuotes[currentQuote].text}"
                    </blockquote>
                    <cite className="text-accent text-lg font-semibold">
                      — {designQuotes[currentQuote].author}
                    </cite>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`fact-${currentFact}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                      Did you know?
                    </div>
                    <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                      {designFacts[currentFact]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {(showQuote ? designQuotes : designFacts).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === (showQuote ? currentQuote : currentFact)
                        ? "bg-accent scale-125"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}