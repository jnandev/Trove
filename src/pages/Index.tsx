import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Cake, Heart, Sparkles } from "lucide-react";

const Index = () => {
  const dessertItems = [
    { name: "Vanilla Cupcake", price: 50, isPopular: true, description: "Classic vanilla cupcake with creamy frosting" },
    { name: "Chocolate Cupcake", price: 60, description: "Rich chocolate cupcake with ganache" },
    { name: "Double Chocolate Muffin", price: 40, description: "Moist muffin loaded with chocolate chips" },
    { name: "Red Velvet Cupcake", price: 60, description: "Velvety smooth with cream cheese frosting" },
    { name: "Strawberry Cupcake", price: 60, description: "Fresh strawberry flavor with berry frosting" },
    { name: "Mawa Cake", price: 600, isPopular: true, description: "Traditional Indian milk cake" },
    { name: "Vanilla Cake", price: 500, description: "Light and fluffy vanilla sponge" },
    { name: "Chocolate Truffle Cake", price: 800, description: "Decadent chocolate layers with truffle" },
    { name: "Butterscotch Cake", price: 600, description: "Butterscotch flavored sponge cake" },
    { name: "Rasmalai Cake", price: 800, description: "Fusion of rasmalai and cake" },
    { name: "Black Forest Cake", price: 600, description: "Cherry and chocolate classic" },
    { name: "Strawberry Cake", price: 700, description: "Fresh strawberry celebration cake" },
    { name: "Irish Coffee Cake", price: 600, description: "Coffee-infused adult favorite" },
    { name: "Choco Chip Cookies", price: 60, description: "Crispy cookies with chocolate chips" },
    { name: "Double Chocolate Cookies", price: 70, description: "For the chocolate lovers" },
    { name: "Coconut Cookies", price: 30, description: "Traditional coconut flavored treats" },
    { name: "Salted Tea Cookies", price: 30, description: "Perfect with your evening tea" },
    { name: "Banana Cake", price: 60, description: "Moist banana flavored cake slice" },
    { name: "Chocolate Brownies", price: 80, description: "Fudgy and rich chocolate brownies" },
    { name: "Red Velvet Cream Cheese Brownies", price: 80, isPopular: true, description: "Premium brownies with cream cheese" }
  ];

  const sugarlessItems = [
    { name: "Sugarless Chocolate Cake", price: 550, isPopular: true, description: "Rich chocolate without the guilt" },
    { name: "Sugarless Vanilla Cake", price: 500, description: "Light vanilla with natural sweeteners" },
    { name: "Sugarless Carrot Cake", price: 600, description: "Healthy carrot cake with nuts" },
    { name: "Sugarless Banana Bread", price: 450, description: "Naturally sweet banana bread" },
    { name: "Sugarless Oat Cookies", price: 40, description: "Wholesome oat cookies" },
    { name: "Sugarless Date Brownies", price: 90, description: "Date-sweetened fudgy brownies" },
    { name: "Sugarless Coconut Ladoo", price: 35, description: "Traditional sweet with jaggery" },
    { name: "Sugarless Fruit Cake", price: 650, description: "Mixed fruit cake with honey" }
  ];

  const kidsItems = [
    { name: "Mini Cupcakes (Pack of 6)", price: 180, isPopular: true, description: "Colorful mini cupcakes perfect for kids" },
    { name: "Animal Shaped Cookies", price: 45, description: "Fun animal-shaped cookies" },
    { name: "Chocolate Milk Cake", price: 400, description: "Mild chocolate cake for kids" },
    { name: "Rainbow Cake Slice", price: 80, description: "Colorful layered cake slice" },
    { name: "Vanilla Ice Cream Cake", price: 500, description: "Cake with vanilla ice cream" },
    { name: "Strawberry Milk Shake Cake", price: 450, description: "Milkshake flavored sponge" },
    { name: "Cartoon Character Cookies", price: 60, description: "Decorated character cookies" },
    { name: "Mini Donuts (Pack of 4)", price: 120, description: "Bite-sized glazed donuts" },
    { name: "Fruit Tart for Kids", price: 70, description: "Fresh fruit mini tarts" },
    { name: "Birthday Special Cupcake", price: 100, description: "Decorated birthday cupcake" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div id="desserts">
        <MenuSection 
          title="Desserts"
          icon={<Cake className="w-8 h-8 text-primary" />}
          items={dessertItems}
          bgColor="bg-white"
        />
      </div>

      <FeaturedSection />

      <div id="sugarless">
        <MenuSection 
          title="Sugarless Desert"
          icon={<Heart className="w-8 h-8 text-primary" />}
          items={sugarlessItems}
          bgColor="bg-gradient-soft"
        />
      </div>

      <div id="kids">
        <MenuSection 
          title="Kids Edition"
          icon={<Sparkles className="w-8 h-8 text-primary" />}
          items={kidsItems}
          bgColor="bg-white"
        />
      </div>

      <GallerySection />
      
      <ProcessSection />
      
      <TestimonialsSection />
      
      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default Index;