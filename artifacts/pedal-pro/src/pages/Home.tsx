import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Bike, 
  ShoppingCart, 
  Menu, 
  Star, 
  Truck, 
  ShieldCheck, 
  Wrench, 
  RefreshCw, 
  ArrowDown 
} from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    description: "High-performance trail bike",
    price: "Rp 8.500.000",
    badge: "Best Seller",
    image: "/product-1.png",
  },
  {
    id: 2,
    name: "City Cruiser Elite",
    description: "Smooth urban commuter",
    price: "Rp 5.000.000",
    badge: "New Arrival",
    image: "/product-2.png",
  },
  {
    id: 3,
    name: "Road Racer X1",
    description: "Aerodynamic speed machine",
    price: "Rp 12.000.000",
    badge: "Premium",
    image: "/product-3.png",
  },
  {
    id: 4,
    name: "Hybrid Pathfinder",
    description: "Versatile all-terrain bike",
    price: "Rp 6.500.000",
    badge: "Popular",
    image: "/product-4.png",
  },
  {
    id: 5,
    name: "Kids Adventure 20",
    description: "Safe and fun for young riders",
    price: "Rp 2.500.000",
    badge: "New Arrival",
    image: "/product-5.png",
  },
  {
    id: 6,
    name: "Trail Blazer 29er",
    description: "XC racing champion",
    price: "Rp 15.000.000",
    badge: "Limited",
    image: "/product-6.png",
  },
];

const categories = [
  { id: 1, name: "Mountain Bikes", desc: "rugged terrain, adventure", image: "/category-1.png" },
  { id: 2, name: "Road Bikes", desc: "speed, aerodynamics, asphalt", image: "/category-2.png" },
  { id: 3, name: "Hybrid Bikes", desc: "city + trail versatility", image: "/category-3.png" },
  { id: 4, name: "Kids Bikes", desc: "safe, colorful, fun", image: "/category-3.png" }, // reusing category-3 since I only had 3 generated
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  const handleAddToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")} data-testid="link-home">
            <Bike className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl text-primary tracking-tight">Pedal Pro</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollTo("hero")} className="hover:text-primary transition-colors" data-testid="nav-home">Home</button>
            <button onClick={() => scrollTo("products")} className="hover:text-primary transition-colors" data-testid="nav-products">Products</button>
            <button onClick={() => scrollTo("categories")} className="hover:text-primary transition-colors" data-testid="nav-categories">Categories</button>
            <button onClick={() => scrollTo("footer")} className="hover:text-primary transition-colors" data-testid="nav-about">About</button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 px-1.5 min-w-5 h-5 flex items-center justify-center bg-accent text-white border-0">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12 text-lg font-medium">
                  <button onClick={() => scrollTo("hero")} className="text-left hover:text-primary transition-colors" data-testid="mobile-nav-home">Home</button>
                  <button onClick={() => scrollTo("products")} className="text-left hover:text-primary transition-colors" data-testid="mobile-nav-products">Products</button>
                  <button onClick={() => scrollTo("categories")} className="text-left hover:text-primary transition-colors" data-testid="mobile-nav-categories">Categories</button>
                  <button onClick={() => scrollTo("footer")} className="text-left hover:text-primary transition-colors" data-testid="mobile-nav-about">About</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section id="hero" className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <img src="/hero.png" alt="Cyclist on mountain bike" className="absolute inset-0 w-full h-full object-cover object-center" />
        
        <div className="container relative z-20 mx-auto px-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Premium Bicycles for Every Rider
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 font-medium">
              Discover our curated collection of performance bicycles, from trail-blazing mountain bikes to lightning-fast road racers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg" onClick={() => scrollTo("products")} data-testid="button-shop-now">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-white bg-transparent hover:bg-white/10 font-bold px-8 py-6 text-lg" onClick={() => scrollTo("categories")} data-testid="button-explore-categories">
                Explore Categories
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollTo("products")}
        >
          <ArrowDown className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary/5 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">Orders over Rp 500.000</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">2-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">On all bike frames</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Expert Assembly</h3>
              <p className="text-sm text-muted-foreground">Ready to ride delivery</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">Hassle-free process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our top-rated bicycles, engineered for performance and built to last.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeUp} className="h-full">
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50">
                  <div className="relative aspect-square overflow-hidden bg-white p-6">
                    <Badge className="absolute top-4 left-4 z-10 bg-primary/90 hover:bg-primary">{product.badge}</Badge>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div>
                      <div className="flex items-center gap-1 mb-2 text-accent">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="font-bold text-lg text-primary">{product.price}</span>
                      <Button onClick={() => handleAddToCart(product.name)} className="bg-accent hover:bg-accent/90 text-white" data-testid={`button-add-cart-${product.id}`}>
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find the perfect ride for your next adventure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{category.desc}</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150" data-testid={`button-view-category-${category.id}`}>
                    View Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#0b1b36] text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Bike className="w-8 h-8 text-accent" />
                <span className="font-bold text-2xl tracking-tight">Pedal Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium bicycles and gear for riders who demand the best performance, quality, and style.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <SiX className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <SiYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><button onClick={() => scrollTo("hero")} className="hover:text-accent transition-colors">Home</button></li>
                <li><button onClick={() => scrollTo("products")} className="hover:text-accent transition-colors">Shop</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Categories</h4>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><button onClick={() => scrollTo("categories")} className="hover:text-accent transition-colors">Mountain Bikes</button></li>
                <li><button onClick={() => scrollTo("categories")} className="hover:text-accent transition-colors">Road Bikes</button></li>
                <li><button onClick={() => scrollTo("categories")} className="hover:text-accent transition-colors">Hybrid Bikes</button></li>
                <li><button onClick={() => scrollTo("categories")} className="hover:text-accent transition-colors">Kids Bikes</button></li>
                <li><button onClick={() => scrollTo("categories")} className="hover:text-accent transition-colors">Accessories</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="flex flex-col gap-4 text-gray-400">
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">Address:</span>
                  <span>123 Cycling Way, Jakarta Selatan</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">Email:</span>
                  <span>hello@pedalpro.com</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">Phone:</span>
                  <span>+62 812 3456 7890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© 2024 Pedal Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
