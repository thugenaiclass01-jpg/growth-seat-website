import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">所有椅款</h1>
              <p className="text-muted-foreground">找到最適合您的永續夥伴</p>
            </div>
            
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              篩選與排序
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <a className="group block">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary/20 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <button className="absolute bottom-4 right-4 bg-background/90 backdrop-blur hover:bg-primary hover:text-white text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-sm font-medium">NT$ {product.price}</p>
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
