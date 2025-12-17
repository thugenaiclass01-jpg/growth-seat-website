import { Hammer, Leaf, RefreshCw, Truck } from "lucide-react";
import knolledImage from "@assets/generated_images/knolled_chair_parts.png";

const features = [
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "模組化設計",
    description: "統一規格的椅腳、支架與椅面，組裝簡單，隨時可單獨更換零件。",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "環境友善",
    description: "使用再生塑膠與 FSC 認證木材，實現 30% 以上的材料循環再利用。",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "無限維修",
    description: "壞了不用丟整張，只需更換損壞部件。延長壽命，減少廢棄物。",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "在地製造",
    description: "堅持台灣在地生產，減少跨國運輸碳足跡，支持本地產業。",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            為什麼選擇椅件鍾情？
          </h2>
          <p className="text-muted-foreground text-lg">
            我們不只賣椅子，更提供一種負責任的生活方式。透過創新的模組化系統，解決傳統家具難以維修的痛點。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Feature Breakdown */}
        <div className="rounded-3xl overflow-hidden bg-secondary/10 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-4">零件標準化，維修更簡單</h3>
              <p className="text-muted-foreground mb-6">
                我們將椅子的構造拆解為標準化模組。無論您購買的是哪個系列，核心連接件都是通用的。這意味著我們能以更低的成本生產，並將優惠回饋給您。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  椅腳損壞？單獨購買椅腳即可
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  想換風格？直接購買新椅面與靠背
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  DIY 組裝樂趣，只需一把六角板手
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src={knolledImage} 
                alt="Knolled chair parts showing modularity" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
