import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ArrowRight, ShoppingBag, X } from "lucide-react";
import { Link } from "wouter";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/cartStore";
import { useToast } from "@/hooks/use-toast";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function Products() {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return Array.from(cats);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); 
    addItem(product, 1, product.colors[0]);
    toast({
      title: "已加入購物車",
      description: `${product.name} 已加入`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8 pb-24">
        <div className="container mx-auto px-4">
          {/* Header Section with IKEA-style banner feel */}
          <div className="bg-[#f5f5f5] p-8 md:p-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">所有椅款系列</h1>
              <p className="text-foreground/80 font-medium text-lg">
                從客廳到辦公室，找到最適合您的永續夥伴。我們的椅子採用模組化設計，讓維修變簡單，壽命更長久。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sticky top-20 bg-background/95 backdrop-blur py-4 z-10 border-b border-border gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 items-center">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className="rounded-full font-bold"
                onClick={() => setSelectedCategory(null)}
              >
                全部
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  className="rounded-full font-bold"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <p className="font-bold text-sm text-muted-foreground whitespace-nowrap">
                {filteredProducts.length} 個產品
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <a className="group block h-full flex flex-col">
                  {/* Image - Boxy Container */}
                  <div className="relative aspect-[4/5] bg-[#f5f5f5] mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {product.tag && (
                      <div className={`absolute top-0 left-0 text-xs font-bold px-3 py-1 ${product.tag === '新品' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
                        {product.tag}
                      </div>
                    )}

                    {/* Quick Add Button */}
                     <button 
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="font-bold text-lg leading-tight mb-1 group-hover:underline decoration-2 underline-offset-4">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                       {product.description}
                    </p>
                    
                    <div className="mt-auto flex items-baseline gap-1">
                      <span className="text-xs font-bold align-top">NT$</span>
                      <span className="text-2xl font-black">{product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
