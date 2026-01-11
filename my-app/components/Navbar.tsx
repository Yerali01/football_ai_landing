"use client";

import { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden">
             <Image 
               src="/logo.png" 
               alt="Football AI Logo" 
               width={40} 
               height={40} 
               className="object-contain"
             />
          </div>
          <span className="text-xl font-bold tracking-tight">Football AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Testimonials", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#waitlist" className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          Join Waitlist
          <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </nav>
  );
}
