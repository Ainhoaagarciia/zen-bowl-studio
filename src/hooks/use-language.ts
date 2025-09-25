import { useState } from "react";

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  es: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Productos",
    "nav.collections": "Colecciones",
    "nav.cta": "Comprar Ahora",
    
    // Hero Section
    "hero.title": "Bowl Collection",
    "hero.description": "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
    "hero.cta": "Explorar Colección",
    
    // Products
    "products.title": "Nuestros Productos",
    "products.ceramic": "Cerámico Premium",
    "products.stoneware": "Gres Artesanal", 
    "products.modern": "Diseño Moderno",
    "products.classic": "Clásico Elegante",
    "products.colorful": "Vibrante",
    "products.minimalist": "Minimalista",
    "products.view": "Ver Detalles",
    
    // Collections
    "collections.title": "Nuestras Colecciones",
    "collections.minimalist": "Minimalistas",
    "collections.minimalist.desc": "Diseños limpios y elegantes para el hogar moderno",
    "collections.colorful": "Coloridos", 
    "collections.colorful.desc": "Bowls vibrantes que alegran tu mesa",
    "collections.classic": "Clásicos",
    "collections.classic.desc": "Designs atemporales con elegancia tradicional",
    
    // Features
    "feature.food_grade": "Food Grade",
    "feature.microwave_safe": "Microondas",
    "feature.oven_safe": "Horno",
    "feature.dishwasher_safe": "Lavavajillas",
    
    // Materials
    "material.ceramic": "Cerámico",
    "material.stoneware": "Gres", 
    "material.wood": "Madera",
    "material.stainless": "Acero",
    
    // Promotions
    "promo.weekend": "Oferta especial fin de semana",
    "promo.discount": "15% descuento",
    
    // Footer
    "footer.contact": "Contacto",
    "footer.about": "Acerca de",
    "footer.shipping": "Envíos",
    "footer.returns": "Devoluciones",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.collections": "Collections", 
    "nav.cta": "Shop Now",
    
    // Hero Section
    "hero.title": "Bowl Collection",
    "hero.description": "Explore our bowl collection that combines style and practicality, perfect for any table setting.",
    "hero.cta": "Explore Collection",
    
    // Products
    "products.title": "Our Products",
    "products.ceramic": "Premium Ceramic",
    "products.stoneware": "Artisan Stoneware",
    "products.modern": "Modern Design", 
    "products.classic": "Classic Elegant",
    "products.colorful": "Vibrant",
    "products.minimalist": "Minimalist",
    "products.view": "View Details",
    
    // Collections
    "collections.title": "Our Collections",
    "collections.minimalist": "Minimalist",
    "collections.minimalist.desc": "Clean and elegant designs for the modern home",
    "collections.colorful": "Colorful",
    "collections.colorful.desc": "Vibrant bowls that brighten your table",
    "collections.classic": "Classic",
    "collections.classic.desc": "Timeless designs with traditional elegance",
    
    // Features
    "feature.food_grade": "Food Grade",
    "feature.microwave_safe": "Microwave Safe",
    "feature.oven_safe": "Oven Safe", 
    "feature.dishwasher_safe": "Dishwasher Safe",
    
    // Materials
    "material.ceramic": "Ceramic",
    "material.stoneware": "Stoneware",
    "material.wood": "Wood", 
    "material.stainless": "Stainless Steel",
    
    // Promotions
    "promo.weekend": "Special weekend offer",
    "promo.discount": "15% off",
    
    // Footer
    "footer.contact": "Contact",
    "footer.about": "About", 
    "footer.shipping": "Shipping",
    "footer.returns": "Returns",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms"
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState<string>("es");

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
}