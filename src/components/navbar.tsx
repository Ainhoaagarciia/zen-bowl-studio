import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "home", label: t("nav.home") },
    { id: "products", label: t("nav.products") },
    { id: "collections", label: t("nav.collections") }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-effect shadow-sm" 
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="text-2xl lg:text-3xl font-light tracking-tight cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            Bowl<span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector 
              language={language} 
              onLanguageChange={setLanguage} 
            />
            <Button className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              {t("nav.cta")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 mt-2 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-3 rounded-md transition-colors hover:bg-accent ${
                    activeSection === item.id ? "text-primary bg-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <LanguageSelector 
                  language={language} 
                  onLanguageChange={setLanguage} 
                />
                <Button size="sm" className="gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  {t("nav.cta")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}