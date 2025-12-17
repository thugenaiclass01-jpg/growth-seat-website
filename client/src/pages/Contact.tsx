import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "訊息已發送",
      description: "我們會盡快回覆您的詢問！",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20">
        <section className="bg-secondary/20 py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">聯絡我們</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              有關於產品、訂單或企業採購的疑問嗎？我們隨時樂意為您解答。
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">聯繫方式</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">公司地址</h3>
                      <p className="text-muted-foreground">
                        台北市信義區信義路五段7號 (101大樓)<br />
                        台灣, 110
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">客服專線</h3>
                      <p className="text-muted-foreground">02-2345-6789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">電子信箱</h3>
                      <p className="text-muted-foreground">service@growth-seat.com.tw</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">營業時間</h3>
                      <p className="text-muted-foreground">
                        週一至週五: 09:00 - 18:00<br />
                        週六、週日: 休息
                      </p>
                    </div>
                  </div>

                  {/* Line Official Account */}
                  <div className="pt-6 border-t border-border mt-2">
                    <div className="flex items-start gap-4 bg-[#06C755]/10 p-4 rounded-xl">
                      <div className="shrink-0">
                        <img 
                          src="/images/line_qr.png" 
                          alt="Line Official Account QR Code" 
                          className="w-24 h-24 object-contain rounded-lg border border-border bg-white"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-[#06C755] flex items-center gap-2">
                          官方 LINE 帳號
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          加入好友，立即享有專屬客服與最新優惠資訊！
                        </p>
                        <Button 
                          variant="outline" 
                          className="h-8 text-xs border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white"
                          onClick={() => window.open('https://line.me', '_blank')}
                        >
                          加入好友
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#f5f5f5] rounded-xl">
                <h3 className="font-bold mb-2">企業採購需求？</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  我們提供辦公室規劃與大量採購優惠方案。歡迎直接來電或填寫右側表單，專案經理將與您聯繫。
                </p>
                <Button variant="outline" className="w-full bg-white hover:bg-white/90">
                  下載企業型錄
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">傳送訊息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold">姓名</label>
                    <Input id="name" placeholder="王大明" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold">電話</label>
                    <Input id="phone" placeholder="0912-345-678" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold">電子信箱</label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold">主旨</label>
                  <Input id="subject" placeholder="詢問關於..." required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold">訊息內容</label>
                  <Textarea 
                    id="message" 
                    placeholder="請詳細描述您的需求..." 
                    className="min-h-[150px]"
                    required 
                  />
                </div>

                <Button type="submit" className="w-full font-bold text-lg h-12">
                  送出訊息
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}