"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  {
    title: "Home Dashboard",
    description: "Get a quick overview of your training progress, upcoming sessions, and personalized recommendations.",
    image: "/home_screen.jpg",
  },
  {
    title: "AI Training Assistant",
    description: "Experience real-time coaching with advanced video analysis and instant feedback on your drills.",
    image: "/training_screen.jpg",
  },
  {
    title: "AI Coach Chat",
    description: "Ask anything about your game, strategy, or training. Our AI is available 24/7 to guide you.",
    image: "/ai_chat.jpg",
  },
  {
    title: "Personalized Nutrition",
    description: "Fuel your performance with meal plans and tracking tailored to your physical demands.",
    image: "/nutrition_screen.jpg",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your growth with detailed stats, performance history, and skill badges.",
    image: "/profile_screen.jpg",
  },
];

export default function AppScreens() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            App Showcase
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Inside the AI Experience
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Take a deep dive into the features that will transform your football journey. Explore our intuitive interface designed for peak performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 justify-items-center">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full max-w-[280px] md:max-w-none"
            >
              <div className="group">
                {/* Phone Frame Mockup */}
                <div className="relative mx-auto bg-[#0F172A] border-[#1E293B] border-[10px] rounded-[2.5rem] aspect-[9/19] w-full shadow-2xl overflow-hidden group-hover:border-accent/30 transition-colors duration-500 shadow-accent/5">
                  {/* Speaker Grill */}
                  <div className="w-[80px] h-[20px] bg-[#1E293B] top-0 left-1/2 -translate-x-1/2 absolute rounded-b-[1rem] z-20 flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gray-700 rounded-full" />
                  </div>
                  
                  <div className="relative w-full h-full bg-black">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {screen.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 px-2">
                    {screen.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
