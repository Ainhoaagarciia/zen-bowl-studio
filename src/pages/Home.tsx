import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { CollectionsSection } from "@/components/collections-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling navigation
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "collections"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Special case for home section when at top
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />
      
      <main>
        <div id="home">
          <HeroSection onNavigate={handleNavigate} />
        </div>
        
        <ProductsSection />
        <CollectionsSection />
      </main>
      
      <Footer />
    </div>
  );
}