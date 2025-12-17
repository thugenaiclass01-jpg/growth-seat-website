import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { products } from "@/lib/products";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import { useToast } from "@/hooks/use-toast";

export function ProductGrid() {
  // Show only first 4 products for the homepage
  const featuredProducts = products.slice(0, 4);
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Prevent navigation
    addItem(product, 1, product.colors[0]);
    toast({
      title: "已加入購物車",
      description: `${product.name} 已加入`,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">
              熱門推薦
            </h2>
            <p className="text-muted-foreground font-medium">
              本季最受歡迎的永續單品
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="hidden md:flex rounded-full border-2 font-bold hover:bg-secondary hover:text-foreground">
              查看全部 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a className="group block h-full flex flex-col">
                {/* Image Container - Boxy and clean */}
                <div className="relative aspect-[4/5] bg-[#f5f5f5] mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.tag && (
                    <div className="absolute top-0 left-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1">
                      {product.tag}
                    </div>
                  )}

                  {/* Hover Add Button */}
                  <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-bold text-lg leading-tight mb-1 group-hover:underline decoration-2 underline-offset-4">
                    {product.name.split(" - ")[0]}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.category}, {product.description.substring(0, 20)}...
                  </p>
                  
                  <div className="mt-auto flex items-baseline gap-1">
                    <span className="text-xs font-bold align-top">NT$</span>
                    <span className="text-2xl font-black">{product.price}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/products">
            <Button variant="outline" className="w-full rounded-full border-2 font-bold">查看全部商品</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
