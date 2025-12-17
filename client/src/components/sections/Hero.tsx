import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/IMG_1501_1765956915525.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/20 py-20 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              台灣在地製造 · 永續家具首選
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-6 text-foreground">
              好椅子，<br />
              可以陪伴你很久。
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              我們重新定義了家具的壽命。模組化設計、可替換零件，讓你的椅子不僅環保，更經久耐用。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2 text-base">
                  瀏覽所有椅款 <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-base">
                  了解我們的理念
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern sustainable chair in a living room" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border border-border hidden md:block">
              <p className="font-display font-bold text-2xl text-primary">NT$ 3,200 起</p>
              <p className="text-sm text-muted-foreground">平價享受設計質感</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/40 to-transparent -z-10" />
    </section>
  );
}
