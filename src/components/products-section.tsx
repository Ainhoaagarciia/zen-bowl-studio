import { ProductCard, Product } from "./product-card";
import { useLanguage } from "@/hooks/use-language";

// Import product images
import bowlGreen from "@/assets/bowl-green.jpg";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlTerracotta from "@/assets/bowl-terracotta.jpg";
import bowlBlack from "@/assets/bowl-black.jpg";

export function ProductsSection() {
  const { t } = useLanguage();

  const products: Product[] = [
    {
      id: "ceramic-green",
      name: t("products.ceramic"),
      price: 24.99,
      originalPrice: 29.99,
      image: bowlGreen,
      description: "Bowl cerámico con acabado esmaltado en verde elegante. Perfecto para servir ensaladas y sopas.",
      features: ["food_grade", "microwave_safe", "dishwasher_safe"],
      materials: ["ceramic"],
      isOnSale: true
    },
    {
      id: "stoneware-white", 
      name: t("products.stoneware"),
      price: 32.99,
      image: bowlWhite,
      description: "Bowl de gres artesanal con acabado mate. Diseño minimalista y elegante para cualquier mesa.",
      features: ["food_grade", "oven_safe", "microwave_safe"],
      materials: ["stoneware"],
      isNew: true
    },
    {
      id: "modern-terracotta",
      name: t("products.modern"), 
      price: 28.99,
      image: bowlTerracotta,
      description: "Bowl moderno en terracota natural. Textura orgánica que aporta calidez a tu hogar.",
      features: ["food_grade", "oven_safe"],
      materials: ["ceramic"],
    },
    {
      id: "classic-black",
      name: t("products.classic"),
      price: 26.99,
      image: bowlBlack,
      description: "Set de bowls clásicos en negro mate. Elegancia atemporal para presentaciones sofisticadas.",
      features: ["food_grade", "microwave_safe", "dishwasher_safe"],
      materials: ["ceramic"],
    },
    {
      id: "colorful-set",
      name: t("products.colorful"),
      price: 45.99,
      originalPrice: 52.99,
      image: bowlGreen, // Using green as placeholder for colorful
      description: "Set de 3 bowls en colores vibrantes. Alegra tu mesa con esta colección divertida y práctica.",
      features: ["food_grade", "microwave_safe", "oven_safe"],
      materials: ["ceramic"],
      isOnSale: true
    },
    {
      id: "minimalist-white",
      name: t("products.minimalist"),
      price: 22.99,
      image: bowlWhite,
      description: "Diseño ultra minimalista en blanco puro. La simplicidad llevada a la perfección.",
      features: ["food_grade", "microwave_safe", "dishwasher_safe"],
      materials: ["ceramic"],
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="section-title mb-6">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada bowl está cuidadosamente diseñado para combinar funcionalidad y belleza,
            creado con materiales de la más alta calidad.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Buscas algo específico? Explora toda nuestra colección completa.
          </p>
          <button className="text-primary hover:text-primary-light font-medium transition-colors border-b border-primary/30 hover:border-primary pb-1">
            Ver todos los productos →
          </button>
        </div>
      </div>
    </section>
  );
}