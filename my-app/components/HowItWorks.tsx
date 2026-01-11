"use client";

import { motion } from "framer-motion";
import { Download, UserPlus, Radio, Trophy, Sparkles, Bot, Zap, Star } from "lucide-react";

const steps = [
  {
    title: "Download the App",
    description: "Get Football AI from the App Store or Google Play. Setup takes less than 2 minutes.",
    icon: Download,
    number: "01",
  },
  {
    title: "Create Your Profile",
    description: "Enter your play information. The AI adapts to you.",
    icon: UserPlus,
    number: "02",
  },
  {
    title: "Train & Track",
    description: "Use the app during training to capture your performance data automatically.",
    icon: Radio,
    number: "03",
  },
  {
    title: "Improve & Dominate",
    description: "Follow AI recommendations and watch your skills reach new heights.",
    icon: Trophy,
    number: "04",
  },
];

const stats = [
  { label: "Personalized Plans", value: "100%", icon: Sparkles },
  { label: "AI Coach Access", value: "24/7", icon: Bot },
  { label: "Video Analysis", value: "< 1 min", icon: Zap },
  { label: "Pro-Level Drills", value: "Expert", icon: Star },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">How It Works</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Start Training Smarter in 4 Steps</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Getting started is easy. Our AI does the heavy lifting so you can focus on what matters—your game.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-accent/5 border border-accent/20 flex items-center justify-center glass relative group-hover:border-accent/50 transition-colors">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-xs font-bold border-4 border-background">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Stats */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 -z-10 bg-accent/5 blur-[100px] rounded-full opacity-50" />
          
          <div className="text-center mb-12">
             <div className="inline-block px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent/80 text-xs font-bold uppercase tracking-widest mb-4">
               App Capabilities
             </div>
             <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">Designed for Your Progress</h4>
             <p className="text-muted-foreground text-lg">Powerful tools to help you reach your peak performance.</p>
          </div>

          <div className="glass rounded-[3.5rem] p-8 md:p-16 border border-white/20 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(var(--accent-rgb),0.3)] hover:shadow-accent/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group/item cursor-default"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-accent/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-accent/30 group-hover/item:rotate-3 transition-all duration-500 shadow-xl border border-white/5">
                      <stat.icon className="w-8 h-8 text-accent group-hover/item:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover/item:text-accent transition-colors tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
