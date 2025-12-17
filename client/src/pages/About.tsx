import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import knolledImage from "@assets/generated_images/knolled_chair_parts.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-secondary/20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">關於椅件鍾情</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              我們相信，一張好椅子不應該是消耗品。
              <br />
              透過設計，我們讓家具在環境保護與平價之間找到平衡。
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <img 
                  src={knolledImage} 
                  alt="Our philosophy" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">我們的起源</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    「椅件鍾情股份有限公司」成立於 2025 年，起初只是一個簡單的想法：為什麼當椅子的一根腳斷了，我們往往得丟掉整張椅子？
                  </p>
                  <p>
                    這不僅是資源的浪費，也是對消費者荷包的傷害。因此，我們決定重新思考椅子的製造方式。
                  </p>
                  <p>
                    我們採用「模組化設計」與「在地生產」的模式。所有的零件——從椅面、椅腳到連接器——都是標準化且可獨立更換的。這不僅降低了生產成本，讓價格更親民，更大幅減少了廢棄物的產生。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-secondary/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">設計款式</div>
              </div>
              <div className="p-8 bg-secondary/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">再生材料使用</div>
              </div>
              <div className="p-8 bg-secondary/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">台灣製造</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
