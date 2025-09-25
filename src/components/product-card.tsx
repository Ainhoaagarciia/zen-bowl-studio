import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  materials: string[];
  isNew?: boolean;
  isOnSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground">
              Nuevo
            </Badge>
          )}
          {product.isOnSale && (
            <Badge variant="destructive">
              Oferta
            </Badge>
          )}
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm" className="gap-2">
            <Eye className="h-4 w-4" />
            Vista Rápida
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and description */}
          <div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5">
            {product.features.map((feature) => (
              <span key={feature} className="badge-feature">
                <Check className="h-3 w-3" />
                {t(`feature.${feature}`)}
              </span>
            ))}
          </div>

          {/* Materials */}
          <div className="flex flex-wrap gap-1.5">
            {product.materials.map((material) => (
              <span key={material} className="badge-material">
                {t(`material.${material}`)}
              </span>
            ))}
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center gap-2">
              <span className="price">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <Button variant="outline" size="sm">
              {t("products.view")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}