import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cartStore";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, CreditCard, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

type Step = "shipping" | "payment" | "success";

export default function Checkout() {
  const { items, total, clearCart } = useCartStore();
  const [step, setStep] = useState<Step>("shipping");
  const [, setLocation] = useLocation();

  const cartTotal = total();
  const shipping = cartTotal > 2000 ? 0 : 150;
  const finalTotal = cartTotal + shipping;

  const { register, handleSubmit, formState: { errors } } = useForm();

  if (items.length === 0 && step !== "success") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">購物車是空的</h1>
        <Link href="/">
          <Button>返回首頁</Button>
        </Link>
      </div>
    );
  }

  const onSubmitShipping = (data: any) => {
    console.log(data);
    setStep("payment");
    window.scrollTo(0, 0);
  };

  const onSubmitPayment = () => {
    // Mock payment processing
    setTimeout(() => {
      clearCart();
      setStep("success");
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           <Link href="/">
            <a className="font-display font-bold text-xl tracking-tight text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                椅
              </span>
              椅件鍾情
            </a>
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
             <span className={step === "shipping" ? "text-primary" : ""}>運送</span>
             <span>{">"}</span>
             <span className={step === "payment" ? "text-primary" : ""}>付款</span>
             <span>{">"}</span>
             <span className={step === "success" ? "text-primary" : ""}>完成</span>
          </div>
        </div>
      </div>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === "shipping" && (
                <div className="animate-in fade-in slide-in-from-left-4">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Truck className="w-6 h-6" /> 運送資訊
                  </h2>
                  <form id="shipping-form" onSubmit={handleSubmit(onSubmitShipping)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lastName">姓氏</Label>
                        <Input id="lastName" {...register("lastName", { required: true })} placeholder="王" />
                        {errors.lastName && <span className="text-destructive text-xs">必填</span>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName">名字</Label>
                        <Input id="firstName" {...register("firstName", { required: true })} placeholder="小明" />
                         {errors.firstName && <span className="text-destructive text-xs">必填</span>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">電子郵件</Label>
                      <Input id="email" type="email" {...register("email", { required: true })} placeholder="example@email.com" />
                       {errors.email && <span className="text-destructive text-xs">必填</span>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">手機號碼</Label>
                      <Input id="phone" type="tel" {...register("phone", { required: true })} placeholder="0912345678" />
                       {errors.phone && <span className="text-destructive text-xs">必填</span>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">收件地址</Label>
                      <Input id="address" {...register("address", { required: true })} placeholder="台北市..." />
                       {errors.address && <span className="text-destructive text-xs">必填</span>}
                    </div>

                    <div className="pt-4">
                      <Label className="mb-4 block">配送方式</Label>
                      <RadioGroup defaultValue="standard">
                        <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-secondary/10 transition-colors">
                          <RadioGroupItem value="standard" id="r1" />
                          <Label htmlFor="r1" className="flex-1 cursor-pointer">標準配送 (3-5 個工作天)</Label>
                          <span className="text-sm font-bold">NT$ 150</span>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" size="lg" className="w-full">前往付款</Button>
                  </form>
                </div>
              )}

              {step === "payment" && (
                <div className="animate-in fade-in slide-in-from-right-4">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6" /> 付款方式
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border p-6 rounded-xl space-y-4">
                      <RadioGroup defaultValue="card">
                        <div className="flex items-center space-x-2 mb-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="font-bold">信用卡付款</Label>
                        </div>
                      </RadioGroup>
                      
                      <div className="space-y-4 pl-6">
                        <Input placeholder="卡號 (Mock: 任意輸入)" />
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="MM/YY" />
                          <Input placeholder="CVC" />
                        </div>
                        <Input placeholder="持卡人姓名" />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setStep("shipping")} className="flex-1">
                        返回修改運送資訊
                      </Button>
                      <Button onClick={onSubmitPayment} size="lg" className="flex-1">
                        確認付款 NT$ {finalTotal}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {step === "success" && (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h1 className="text-3xl font-bold mb-4">訂單已成立！</h1>
                  <p className="text-muted-foreground mb-8">
                    感謝您的購買。我們已發送訂單確認信至您的信箱。<br/>
                    您的訂單編號為：<span className="font-mono font-bold text-foreground">#TW20258888</span>
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href="/">
                      <Button variant="outline">返回首頁</Button>
                    </Link>
                    <Link href="/products">
                      <Button>繼續購物</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            {step !== "success" && (
              <div className="lg:col-span-1">
                <div className="bg-secondary/10 rounded-xl p-6 sticky top-8">
                  <h3 className="font-bold text-lg mb-4">訂單內容</h3>
                  <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.selectedColor}`} className="flex gap-3 text-sm">
                        <div className="w-16 h-16 bg-background rounded-md overflow-hidden shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold">{item.name}</p>
                          <p className="text-muted-foreground text-xs">{item.selectedColor} x {item.quantity}</p>
                        </div>
                        <p className="font-medium">NT$ {item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">小計</span>
                      <span>NT$ {cartTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">運費</span>
                      <span>NT$ {shipping}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-border mt-2">
                      <span>總計</span>
                      <span>NT$ {finalTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
