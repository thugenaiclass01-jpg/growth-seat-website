import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cartStore";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const cartCount = useCartStore((state) => state.count());

  const links = [
    { href: "/products", label: "所有商品" },
    { href: "/products", label: "空間佈置靈感" }, // Mock links for IKEA feel
    { href: "/products", label: "新品推薦" },
    { href: "/about", label: "關於我們" },
  ];

  return (
    <nav className="w-full bg-background border-b border-border">
      {/* Top Utility Bar (IKEA style often has a small top bar, we can simplify or omit, let's keep it clean) */}
      
      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        {/* Logo - Bold Blue */}
        <Link href="/">
          <a className="flex-shrink-0">
             {/* Text Logo mimicking IKEA box logo style */}
            <div className="flex flex-col leading-none font-black select-none group cursor-pointer">
              <div className="flex gap-1">
                <span className="bg-primary text-white px-2 py-1 rounded-sm shadow-sm transform group-hover:-translate-y-0.5 transition-transform duration-300">椅</span>
                <span className="bg-accent text-primary px-2 py-1 rounded-sm shadow-sm transform group-hover:translate-y-0.5 transition-transform duration-300">件</span>
              </div>
              <div className="text-primary text-right text-sm font-bold tracking-[0.2em] border-t-2 border-primary mt-1 pt-0.5">
                鍾情
              </div>
            </div> 
            {/* Or keep original name but styled */}
            {/* <div className="font-display font-black text-3xl tracking-tighter text-primary">
              椅件鍾情
            </div> */}
          </a>
        </Link>

        {/* Search Bar - Prominent in IKEA style */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input 
            type="text" 
            placeholder="搜尋產品..." 
            className="w-full pl-4 pr-10 py-3 rounded-full bg-secondary border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a className="text-sm font-bold text-foreground hover:underline underline-offset-4 decoration-2">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary rounded-full w-10 h-10">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-[10px] text-accent-foreground font-bold rounded-full flex items-center justify-center animate-in zoom-in border border-background">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" className="hidden md:flex font-bold rounded-full hover:bg-secondary">
            登入 / 註冊
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl z-50">
          <div className="relative mb-4">
             <input 
              type="text" 
              placeholder="搜尋產品..." 
              className="w-full pl-4 pr-10 py-3 rounded-full bg-secondary border-none outline-none"
            />
             <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          {links.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a
                className="block text-lg font-bold py-3 border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <div className="pt-4 flex gap-4">
            <Button className="w-full rounded-full font-bold">登入</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
