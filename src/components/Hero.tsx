import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary-light via-white to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary-glow rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-italiana text-primary leading-tight">
                Trove
              </h1>
              <p className="text-2xl md:text-3xl font-playfair text-foreground/80 leading-relaxed">
                Sweet Treasures for <br />
                <span className="text-primary font-semibold">Every Moment</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-lg font-inter leading-relaxed">
                Discover our exquisite collection of handcrafted desserts, sugarless delights, 
                and magical treats specially created for little ones. Every bite tells a story of passion and perfection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Our Menu
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="lg">
                Find Nearest Store
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-playfair">50+</div>
                <div className="text-sm text-muted-foreground font-inter">Dessert Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-playfair">25+</div>
                <div className="text-sm text-muted-foreground font-inter">Sugarless Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-playfair">15+</div>
                <div className="text-sm text-muted-foreground font-inter">Kids Favorites</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-elegant bg-white/10 backdrop-blur-sm border border-white/20">
              <img 
                src="/lovable-uploads/b2e31993-8247-4df1-8e6f-ec906e21b6e1.png" 
                alt="Trove Desserts" 
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-elegant border border-primary/10">
              <div className="text-2xl">🧁</div>
              <div className="text-sm font-semibold text-primary">Premium</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-elegant border border-primary/10">
              <div className="text-2xl">🍪</div>
              <div className="text-sm font-semibold text-primary">Fresh Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;