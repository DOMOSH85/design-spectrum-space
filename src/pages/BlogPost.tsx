import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Color in Brand Design",
    excerpt: "Understanding how color choices impact consumer behavior and brand perception in modern design practices.",
    content: `
      <p>Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, influence decisions, and create lasting impressions that define a brand's identity.</p>
      
      <h2>The Science Behind Color Psychology</h2>
      <p>Research has consistently shown that color can increase brand recognition by up to 80%. Different colors trigger different psychological responses:</p>
      
      <ul>
        <li><strong>Blue</strong> - Trust, stability, and professionalism</li>
        <li><strong>Red</strong> - Energy, passion, and urgency</li>
        <li><strong>Green</strong> - Growth, harmony, and freshness</li>
        <li><strong>Yellow</strong> - Optimism, creativity, and attention</li>
      </ul>
      
      <h2>Implementing Color Strategy</h2>
      <p>When developing a color strategy for a brand, consider the target audience, industry standards, and cultural implications. The goal is to create a cohesive visual language that resonates with your audience and supports your brand values.</p>
      
      <h2>Case Studies</h2>
      <p>Looking at successful brands like Coca-Cola (red for energy), Facebook (blue for trust), and Starbucks (green for growth), we can see how strategic color choices have contributed to their global recognition and success.</p>
    `,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Designer",
    category: "Branding"
  },
  {
    id: 2,
    title: "Minimalism vs. Maximalism in Web Design",
    excerpt: "Exploring the benefits and challenges of both design philosophies and when to apply each approach.",
    content: `
      <p>The eternal debate between minimalism and maximalism in design continues to shape how we approach web and digital experiences. Both philosophies have their place in modern design.</p>
      
      <h2>The Power of Minimalism</h2>
      <p>Minimalist design focuses on simplicity, clean lines, and purposeful use of space. Benefits include:</p>
      
      <ul>
        <li>Faster loading times</li>
        <li>Better user focus</li>
        <li>Timeless aesthetics</li>
        <li>Easier maintenance</li>
      </ul>
      
      <h2>When Maximalism Works</h2>
      <p>Maximalist approaches can be effective when you need to convey richness, creativity, or cultural depth. They work well for:</p>
      
      <ul>
        <li>Creative portfolios</li>
        <li>Entertainment websites</li>
        <li>Cultural institutions</li>
        <li>Brand storytelling</li>
      </ul>
      
      <h2>Finding the Right Balance</h2>
      <p>The key is understanding your audience, brand personality, and the story you want to tell. Sometimes the best approach combines elements of both philosophies.</p>
    `,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "March 10, 2024",
    readTime: "7 min read",
    author: "Designer",
    category: "Web Design"
  },
  {
    id: 3,
    title: "Creating Inclusive Design Systems",
    excerpt: "Best practices for building design systems that prioritize accessibility and inclusivity for all users.",
    content: `
      <p>Inclusive design isn't just about compliance—it's about creating experiences that work for everyone, regardless of their abilities, context, or circumstances.</p>
      
      <h2>Principles of Inclusive Design</h2>
      <p>Inclusive design should be:</p>
      
      <ul>
        <li><strong>Recognizing Exclusion</strong> - Understanding how design decisions can exclude people</li>
        <li><strong>Learning from Diversity</strong> - Involving diverse perspectives in the design process</li>
        <li><strong>Solving for One, Extending to Many</strong> - Solutions that help one person often benefit everyone</li>
      </ul>
      
      <h2>Practical Implementation</h2>
      <p>Start with these key areas:</p>
      
      <ul>
        <li>Color contrast ratios (WCAG AA standards)</li>
        <li>Keyboard navigation support</li>
        <li>Screen reader compatibility</li>
        <li>Clear, descriptive alt text</li>
        <li>Consistent navigation patterns</li>
      </ul>
      
      <h2>Testing and Iteration</h2>
      <p>Regular testing with real users, including those with disabilities, is crucial for creating truly inclusive experiences. Use automated tools as a starting point, but human testing is irreplaceable.</p>
    `,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Designer",
    category: "UX Design"
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-white/90">{post.excerpt}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}