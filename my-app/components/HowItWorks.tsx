"use client";

import { motion } from "framer-motion";
import { Download, UserPlus, Radio, Trophy } from "lucide-react";

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
  { label: "Faster Progress", value: "25%" },
  { label: "Sessions Tracked", value: "10M+" },
  { label: "User Satisfaction", value: "97%" },
  { label: "AI Availability", value: "24/7" },
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
        <div className="mt-24 glass rounded-[2.5rem] p-12 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
