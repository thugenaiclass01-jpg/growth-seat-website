import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useRoute, Link } from "wouter";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/cartStore";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const id = params ? parseInt(params.id) : 0;
  const product = products.find((p) => p.id === id);
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [activeImage, setActiveImage] = useState(product?.image || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">找不到商品</h1>
          <Link href="/products">
            <Button>返回商店</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    toast({
      title: "已加入購物車",
      description: `${product.name} (${selectedColor}) x ${quantity}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/products"><a className="hover:text-primary">商店</a></Link>
            <span>/</span>
            <Link href="/products"><a className="hover:text-primary">{product.category}</a></Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/10 border border-border/50">
                <img 
                  src={activeImage || product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary' : 'border-transparent hover:border-border'}`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="mb-8">
                <p className="text-sm font-medium text-primary mb-2">{product.category}</p>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  {product.name}
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                  NT$ {product.price}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {product.description}
                </p>
              </div>

              {/* Selection */}
              <div className="space-y-6 mb-8 border-t border-b border-border py-8">
                <div>
                  <label className="block text-sm font-medium mb-3">顏色選擇: <span className="text-foreground font-bold">{selectedColor}</span></label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
                          selectedColor === color 
                            ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' 
                            : 'border-input hover:border-foreground/30'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">數量</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-input rounded-md">
                      <button 
                        className="p-3 hover:bg-secondary/50 transition-colors"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button 
                        className="p-3 hover:bg-secondary/50 transition-colors"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4 mb-12">
                <Button size="lg" className="w-full text-lg h-14 gap-2" onClick={handleAddToCart}>
                  <ShoppingBag className="w-5 h-5" />
                  加入購物車
                </Button>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" /> 全台免運費
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> 5 年保固
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">產品規格</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">尺寸</dt>
                    <dd className="font-medium">{product.dimensions}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">材質</dt>
                    <dd className="font-medium">{product.material}</dd>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <dt className="text-muted-foreground mb-1">特色</dt>
                    <dd className="flex flex-wrap gap-2">
                      {product.features.map(f => (
                        <span key={f} className="bg-secondary/30 px-2 py-1 rounded text-xs">
                          {f}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
