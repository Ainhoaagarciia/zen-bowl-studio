import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import heroImage from "@/assets/hero-bowls.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="hero-text mb-6 lg:mb-8">
              {t("hero.title")}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 lg:mb-10">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => onNavigate("products")}
                className="group gap-3 px-8 py-4 text-base"
              >
                {t("hero.cta")}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate("collections")}
                className="px-8 py-4 text-base"
              >
                {t("nav.collections")}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl">
              <img
                src={heroImage}
                alt="Bowl Collection Hero"
                className="w-full h-full object-cover"
              />
              
              {/* Floating promotion badge */}
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {t("promo.weekend")}
                <div className="text-xs opacity-90">{t("promo.discount")}</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface-subtle -z-10" />
    </section>
  );
}