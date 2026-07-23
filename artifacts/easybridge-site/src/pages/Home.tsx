import { Link } from "wouter";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Youtube, Linkedin, Instagram } from "lucide-react";
import { FaRedditAlien } from "react-icons/fa";
import { SiX } from "react-icons/si";

// Components
import { Button } from "@/components/ui/button";
import { Noise } from "@/components/Noise";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary selection:text-primary-foreground overflow-hidden">
      <Noise />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference text-white">
        <div className="font-sans font-bold text-xl tracking-tight">
          EASYBRIDGE<span className="text-primary">.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#mission" className="hover:text-primary transition-colors">Mission</a>
          <a href="#brands" className="hover:text-primary transition-colors">Brands</a>
          <a href="#approach" className="hover:text-primary transition-colors">Approach</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary transition-colors"><SiX className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-24 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#EAEAEA]">
          <motion.img 
            style={{ y }}
            src="/hero-abstract.jpg" 
            alt="Abstract architecture representing global connection" 
            className="w-full h-[120%] object-cover opacity-80 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-6 uppercase">
              BRIDGING <br />
              <span className="text-primary">WORLDS.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-foreground/10 pt-6">
              <p className="font-mono text-sm md:text-base max-w-md text-foreground/80 leading-relaxed">
                An independent, AI-native e-commerce platform bringing premium Chinese manufacturing to everyday Western life.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="rounded-none font-mono uppercase tracking-wider text-xs px-8 h-12" asChild>
                  <a href="#brands">Explore Brands <ArrowUpRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-12 max-w-4xl">
              We help everyday people improve their quality of life in an affordable, high-value way.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-background/20">
              <div>
                <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-4">01 // The Problem</h3>
                <p className="text-xl md:text-2xl text-background/70 leading-relaxed">
                  High-quality goods are often overpriced due to bloated supply chains and legacy branding markups.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-4">02 // The Solution</h3>
                <p className="text-xl md:text-2xl text-background/70 leading-relaxed">
                  We bypass the friction. By operating as an independent, AI-driven bridge, we deliver world-class products directly to your doorstep.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship Brand: Icewind */}
      <section id="brands" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
            <div>
              <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-4">Flagship Vertical</h3>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">ICEWIND<sup className="text-2xl md:text-3xl text-foreground/50">®</sup></h2>
            </div>
            <a 
              href="https://icewind-replit.replit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-mono text-sm uppercase tracking-widest hover:text-primary transition-colors"
            >
              Visit Icewind <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors"><ArrowUpRight className="w-4 h-4" /></div>
            </a>
          </div>

          <div className="relative group block overflow-hidden bg-[#0A0A0A] aspect-[16/9] md:aspect-[21/9]">
            <a href="https://icewind-replit.replit.app/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
              <span className="sr-only">Visit Icewind</span>
            </a>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            <motion.img 
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/icewind-reference.png" 
              alt="Icewind Website Preview" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mt-6 pt-5 border-t border-border bg-background">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 shrink-0">Personal Cooling Device</span>
            <p className="text-foreground/60 text-sm font-mono leading-relaxed">Our first vertical focusing on high-performance handheld cooling technology. Bold, dark, and electric.</p>
          </div>
        </div>
      </section>

      {/* The Easybridge Approach */}
      <section id="approach" className="py-32 px-6 md:px-12 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">THE AI-NATIVE ADVANTAGE.</h2>
            <p className="font-mono text-foreground/60 max-w-2xl mx-auto">We do not operate like a legacy holding company. We are built from the ground up on autonomous systems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Dev",
                desc: "We use machine learning to identify market gaps and optimize product iteration cycles with manufacturing partners in real-time."
              },
              {
                title: "Marketing",
                desc: "Generative AI powers our creative testing, allowing us to find the perfect resonance with our audience at zero marginal cost."
              },
              {
                title: "Capital Efficiency",
                desc: "By maximizing operational leverage through software, we pass the margin savings directly to the end consumer."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 border border-border group hover:border-primary transition-colors"
              >
                <div className="font-mono text-4xl text-primary/20 font-bold mb-6 group-hover:text-primary transition-colors">0{i + 1}</div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-mono text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Verticals */}
      <section className="py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">BEYOND ICEWIND.</h2>
          <p className="font-mono text-foreground/60 max-w-xl">More brands are currently in development, covering the full spectrum of modern living.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
          {[
            { img: "/vertical-essentials.jpg", title: "Everyday Essentials", tag: "Utility" },
            { img: "/vertical-wellness.jpg", title: "Emotional Wellness", tag: "Care" },
            { img: "/vertical-cultural.jpg", title: "Cultural Goods", tag: "Identity" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, filter: "grayscale(0%)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative flex-1 aspect-square md:aspect-[3/4] bg-muted overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest mb-3">{item.tag}</span>
                <h3 className="text-white text-2xl font-bold tracking-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-foreground text-background pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-background/20 pb-20 mb-12 gap-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
                JOIN THE <br/>
                <span className="text-primary">JOURNEY.</span>
              </h2>
              <p className="font-mono text-background/60 max-w-sm">
                Follow Easybridge Digital Commerce as we build the next generation of consumer brands.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-mono text-sm uppercase tracking-widest">
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors py-2"><SiX className="w-5 h-5" /> Twitter/X</a>
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors py-2"><Linkedin className="w-5 h-5" /> LinkedIn</a>
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors py-2"><Youtube className="w-5 h-5" /> YouTube</a>
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors py-2"><Instagram className="w-5 h-5" /> Instagram</a>
              <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors py-2"><FaRedditAlien className="w-5 h-5" /> Reddit</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-background/40">
            <p>© {new Date().getFullYear()} Easybridge Digital Commerce LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}