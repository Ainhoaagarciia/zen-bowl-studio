import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

// Import collection images
import collectionColorful from "@/assets/collection-colorful.jpg";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlBlack from "@/assets/bowl-black.jpg";

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  priceRange: string;
}

export function CollectionsSection() {
  const { t } = useLanguage();

  const collections: Collection[] = [
    {
      id: "minimalist",
      name: t("collections.minimalist"),
      description: t("collections.minimalist.desc"),
      image: bowlWhite,
      itemCount: 8,
      priceRange: "€19 - €35"
    },
    {
      id: "colorful", 
      name: t("collections.colorful"),
      description: t("collections.colorful.desc"),
      image: collectionColorful,
      itemCount: 12,
      priceRange: "€22 - €48"
    },
    {
      id: "classic",
      name: t("collections.classic"), 
      description: t("collections.classic.desc"),
      image: bowlBlack,
      itemCount: 6,
      priceRange: "€25 - €42"
    }
  ];

  return (
    <section id="collections" className="py-20 lg:py-32 bg-surface-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="section-title mb-6">
            {t("collections.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre nuestras colecciones cuidadosamente curadas, cada una con su propia 
            personalidad y estilo único para complementar tu hogar.
          </p>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Collection badge */}
                <div className="absolute top-6 left-6">
                  <div className="glass-effect px-3 py-1.5 rounded-full">
                    <span className="text-xs font-medium text-foreground">
                      {collection.itemCount} productos
                    </span>
                  </div>
                </div>
                
                {/* Price range */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-90 mb-1">Desde</div>
                  <div className="text-xl font-medium">{collection.priceRange}</div>
                </div>
              </div>

              <CardContent className="p-6 lg:p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-medium mb-3">
                      {collection.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group gap-2 mt-6"
                  >
                    Explorar Colección
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured collection CTA */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto overflow-hidden border-primary/20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img
                  src={collectionColorful}
                  alt="Featured Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-medium mb-4">
                  Colección Especial
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Edición limitada de bowls únicos, diseñados exclusivamente para 
                  los amantes del diseño excepcional.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2">
                    Ver Colección Especial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Suscribirse a Novedades
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}