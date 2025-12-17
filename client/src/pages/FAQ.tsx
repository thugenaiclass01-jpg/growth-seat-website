import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      category: "產品與組裝",
      items: [
        {
          q: "椅子需要自己組裝嗎？",
          a: "是的，為了減少運輸體積與碳足跡，我們的產品皆為平板包裝。但請放心，我們特別設計了「單一工具」組裝系統，隨箱附贈一把六角板手即可輕鬆完成，通常只需 10-15 分鐘。"
        },
        {
          q: "如果零件損壞了，可以只買零件嗎？",
          a: "當然可以！這正是我們「椅件鍾情」的核心理念。無論是椅腳、椅面還是螺絲，所有零件都可以在官網單獨購買。您不需要因為一個小故障就丟掉整張椅子。"
        },
        {
          q: "木材來源是哪裡？",
          a: "我們堅持使用 FSC (森林管理委員會) 認證的永續林木，確保每一塊木頭的來源都是合法且對環境友善的。"
        }
      ]
    },
    {
      category: "運送與退換貨",
      items: [
        {
          q: "運費如何計算？",
          a: "全館消費滿 NT$ 3,000 即享免運優惠。未滿額則酌收 NT$ 150 物流處理費。離島與偏遠地區運費另計。"
        },
        {
          q: "下單後多久會收到？",
          a: "現貨商品下單後約 2-3 個工作天內出貨，實際送達時間依物流狀況而定，通常約 3-5 個工作天。"
        },
        {
          q: "提供退換貨服務嗎？",
          a: "我們提供 30 天鑑賞期（非試用期）。若商品有瑕疵或您改變心意，只要保持商品全新未組裝且包裝完整，皆可申請退貨。"
        }
      ]
    },
    {
      category: "保固與維修",
      items: [
        {
          q: "產品有保固嗎？",
          a: "有的，所有椅子結構（骨架、連接件）皆享有 5 年保固。布料與耗材類享有 1 年保固。"
        },
        {
          q: "保固範圍包含什麼？",
          a: "保固範圍包含正常使用下的結構損壞、脫膠、斷裂等。不包含人為不當使用、自行改裝、寵物抓咬或自然耗損。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20">
        <section className="bg-secondary/20 py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">常見問題</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              這裡整理了大家最常問的問題。找不到答案嗎？歡迎聯繫客服。
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            {faqs.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIdx) => (
                    <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`}>
                      <AccordionTrigger className="text-left font-bold text-lg">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}