import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Color in Brand Design",
    excerpt: "Understanding how color choices impact consumer behavior and brand perception in modern design practices.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Designer",
    category: "Branding"
  },
  {
    id: 2,
    title: "Minimalism vs. Maximalism in Web Design",
    excerpt: "Exploring the benefits and challenges of both design philosophies and when to apply each approach.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    date: "March 10, 2024",
    readTime: "7 min read",
    author: "Designer",
    category: "Web Design"
  },
  {
    id: 3,
    title: "Creating Inclusive Design Systems",
    excerpt: "Best practices for building design systems that prioritize accessibility and inclusivity for all users.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Designer",
    category: "UX Design"
  },
  {
    id: 4,
    title: "Typography Trends for Modern Branding",
    excerpt: "Exploring the latest typography trends and how they're shaping brand identities in 2024.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
    date: "February 28, 2024",
    readTime: "4 min read",
    author: "Designer",
    category: "Typography"
  },
  {
    id: 5,
    title: "Sustainable Design: Creating for the Future",
    excerpt: "How designers can contribute to environmental sustainability through conscious design choices.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=250&fit=crop",
    date: "February 22, 2024",
    readTime: "8 min read",
    author: "Designer",
    category: "Sustainability"
  },
  {
    id: 6,
    title: "The Art of Visual Hierarchy",
    excerpt: "Mastering the principles of visual hierarchy to guide user attention and improve communication.",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=250&fit=crop",
    date: "February 15, 2024",
    readTime: "6 min read",
    author: "Designer",
    category: "Design Principles"
  }
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Design Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Thoughts, trends, and insights from the world of graphic design. 
                Discover articles about branding, typography, color theory, and creative processes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <Card className="h-full hover-lift group cursor-pointer overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}