import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display font-bold text-xl text-primary mb-4">
              椅件鍾情
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              以模組化設計與自產零件為基礎，打造平價、環保、可維修的永續椅子。讓環保不再是昂貴的選擇。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">產品系列</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products"><a className="hover:text-primary transition-colors">家用系列</a></Link></li>
              <li><Link href="/products"><a className="hover:text-primary transition-colors">辦公系列</a></Link></li>
              <li><Link href="/products"><a className="hover:text-primary transition-colors">咖啡廳系列</a></Link></li>
              <li><Link href="/products"><a className="hover:text-primary transition-colors">零件與配件</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">關於我們</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-primary transition-colors">品牌故事</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">永續理念</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">聯絡我們</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">常見問題</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">訂閱電子報</h4>
            <p className="text-sm text-muted-foreground mb-4">
              獲取最新的環保家具資訊與優惠。
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="您的 Email" 
                className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                訂閱
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 椅件鍾情股份有限公司. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">隱私權政策</a>
            <a href="#" className="hover:text-foreground">使用條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
