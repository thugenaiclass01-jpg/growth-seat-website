import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cartStore";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const cartTotal = total();
  const shipping = cartTotal > 2000 ? 0 : 150;
  const finalTotal = cartTotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display font-bold mb-8">您的購物車</h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-secondary/10 rounded-2xl">
              <p className="text-xl text-muted-foreground mb-6">購物車目前是空的</p>
              <Link href="/products">
                <Button size="lg">去逛逛</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="flex gap-6 p-6 bg-card border border-border rounded-xl shadow-sm">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary/20 rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.category} - {item.selectedColor}</p>
                        </div>
                        <p className="font-bold text-lg">NT$ {item.price * item.quantity}</p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-input rounded-md bg-background">
                          <button 
                            className="p-2 hover:bg-secondary/50 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            className="p-2 hover:bg-secondary/50 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-8 sticky top-24 shadow-sm">
                  <h3 className="font-bold text-xl mb-6">訂單摘要</h3>
                  
                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>小計</span>
                      <span>NT$ {cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>運費</span>
                      <span>{shipping === 0 ? "免運費" : `NT$ ${shipping}`}</span>
                    </div>
                    <div className="pt-4 border-t border-border flex justify-between font-bold text-lg text-foreground">
                      <span>總計</span>
                      <span>NT$ {finalTotal}</span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button size="lg" className="w-full text-base font-bold">
                      前往結帳 <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    結帳即代表您同意我們的服務條款與退換貨政策。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
