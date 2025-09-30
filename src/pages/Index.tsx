import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Gallery } from "@/components/portfolio/Gallery";
// Blog section removed; import intentionally omitted
import { QuotesSection } from "@/components/portfolio/QuotesSection";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
  <Gallery />
  <QuotesSection />
  <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
