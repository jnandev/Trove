import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-soft border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="text-3xl font-italiana text-primary font-bold">Trove</h1>
              <p className="text-xs text-muted-foreground font-inter -mt-1">For the Love of Desserts</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-inter font-medium">About Us</a>
            <a href="#desserts" className="text-foreground hover:text-primary transition-colors font-inter font-medium">Desserts</a>
            <a href="#sugarless" className="text-foreground hover:text-primary transition-colors font-inter font-medium">Sugarless</a>
            <a href="#kids" className="text-foreground hover:text-primary transition-colors font-inter font-medium">Kids Edition</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-inter font-medium">Find Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-inter font-medium">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="hero" className="hidden md:flex">
              Order Online
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;