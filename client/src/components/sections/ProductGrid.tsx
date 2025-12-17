import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { products } from "@/lib/products";

export function ProductGrid() {
  // Show only first 4 products for the homepage
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              精選椅款
            </h2>
            <p className="text-muted-foreground">
              專為不同生活場景打造的永續選擇
            </p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="hidden md:flex">查看全部商品</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a className="group block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-background mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-background/90 backdrop-blur text-xs font-bold px-2 py-1 rounded">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium">NT$ {product.price}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/products">
            <Button variant="outline" className="w-full">查看全部商品</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
