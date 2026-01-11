"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Your Personal <br />
              <span className="text-accent">Football Coach</span> in<br />
              Your Pocket
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base lg:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Track performance, get AI-driven insights, and elevate your game with real-time analytics tailored to your playstyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
            >
              <a 
                href="#waitlist" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] ring-1 ring-white/50"
              >
                Join Waitlist
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center lg:justify-start gap-8 lg:gap-12"
            >
              {[
                { label: "Active Users", value: "50K+" },
                { label: "App Rating", value: "4.9" },
                { label: "Countries", value: "100+" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="flex-1 relative lg:flex lg:justify-end"
          >
            <div className="relative w-full max-w-[260px] lg:max-w-[300px] mx-auto lg:mr-0">
               {/* Phone Frame Mockup */}
               <div className="relative bg-[#0F172A] border-[#1E293B] border-[10px] rounded-[2.5rem] aspect-[9/19] w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_50px_-10px_rgba(37,99,235,0.2)] overflow-hidden">
                  {/* Speaker Grill */}
                  <div className="w-[80px] h-[20px] bg-[#1E293B] top-0 left-1/2 -translate-x-1/2 absolute rounded-b-[1rem] z-20 flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gray-700 rounded-full" />
                  </div>
                  
                  <div className="relative w-full h-full bg-black">
                    <Image
                      src="/home_screen.jpg"
                      alt="Football AI App - Home Dashboard"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Glass Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
