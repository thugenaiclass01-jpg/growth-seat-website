import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/IMG_1501_1765956915525.jpeg";

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px] lg:h-[75vh]">
        {/* Image Side - Takes up 2/3 on desktop for that big impact */}
        <div className="lg:col-span-2 relative h-[50vh] lg:h-full bg-secondary/30">
          <img 
            src={heroImage} 
            alt="Living room setup" 
            className="w-full h-full object-cover"
          />
           {/* Overlay Gradient for mobile text readability if needed, but we keep text separate for IKEA style */}
        </div>

        {/* Content Side - Clean White Box */}
        <div className="lg:col-span-1 bg-background p-8 lg:p-16 flex flex-col justify-center items-start border-l border-border">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-bold text-accent-foreground bg-accent inline-block px-3 py-1 mb-6 text-sm">
              新品上市
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-black leading-[0.9] mb-6 text-foreground tracking-tighter">
              好椅件，<br />
              可以陪伴你很久。
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-md font-medium leading-relaxed">
              模組化設計讓家具更長壽。零件可替換、可維修，這是我們對地球的承諾，也是給您的保證。
            </p>
            
            <Link href="/products">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-foreground text-background hover:bg-foreground/80">
                立即選購 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <div className="mt-12 pt-8 border-t border-border w-full">
              <p className="font-bold text-3xl mb-1">NT$ 3,200 <span className="text-sm font-normal align-top">起</span></p>
              <p className="text-sm text-muted-foreground">綠意舒適扶手椅</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
