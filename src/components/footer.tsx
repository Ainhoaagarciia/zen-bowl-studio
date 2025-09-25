import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="text-2xl lg:text-3xl font-light tracking-tight mb-4">
              Bowl<span className="text-primary-light">.</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Creando experiencias culinarias excepcionales con diseño atemporal 
              y funcionalidad premium.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-background/70 hover:text-primary-light hover:bg-background/10 p-2"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: t("nav.home"), href: "#home" },
                { label: t("nav.products"), href: "#products" },
                { label: t("nav.collections"), href: "#collections" },
                { label: t("footer.about"), href: "#about" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="font-medium text-lg mb-4">Servicio al Cliente</h4>
            <ul className="space-y-3">
              {[
                { label: t("footer.contact"), href: "#contact" },
                { label: t("footer.shipping"), href: "#shipping" },
                { label: t("footer.returns"), href: "#returns" },
                { label: t("footer.privacy"), href: "#privacy" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-medium text-lg mb-4">Contacto & Newsletter</h4>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@bowlcollection.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+34 600 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Madrid, España</span>
              </div>
            </div>

            {/* Newsletter signup */}
            <div>
              <p className="text-sm text-background/70 mb-3">
                Suscríbete para recibir ofertas exclusivas
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="tu@email.com"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary-light"
                />
                <Button 
                  size="sm" 
                  className="bg-primary-light hover:bg-primary text-foreground"
                >
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Bowl Collection. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#terms" className="text-background/60 hover:text-primary-light transition-colors">
                {t("footer.terms")}
              </a>
              <a href="#privacy" className="text-background/60 hover:text-primary-light transition-colors">
                {t("footer.privacy")}  
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}