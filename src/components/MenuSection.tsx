import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, Sparkles } from "lucide-react";

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
  image?: string;
}

interface MenuSectionProps {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
  bgColor: string;
}

const MenuSection = ({ title, icon, items, bgColor }: MenuSectionProps) => {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              {icon}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-italiana text-primary mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardHeader className="relative">
                {item.isPopular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-white">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    Popular
                  </Badge>
                )}
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-playfair text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">₹{item.price}</div>
                </div>
                {item.description && (
                  <CardDescription className="text-muted-foreground font-inter">
                    {item.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Add to Cart
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;