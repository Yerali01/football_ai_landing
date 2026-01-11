"use client";

import { motion } from "framer-motion";
import { Circle, Mic, Activity, WifiOff, Utensils, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Real-Time AI Coaching",
    description: "Your personal trainer in your pocket. Get instant audio and visual feedback on your form as you train, powered by advanced computer vision",
    icon: Circle,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Smart Voice Assistant",
    description: "Have a question mid-workout? Just ask. Our voice-activated AI answers your football and training queries instantly, completely hands-free",
    icon: Mic,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Deep Technique Analysis",
    description: "Don't just practice; practice perfectly. We break down your movements frame-by-frame to identify mistakes and help you master professional technique.",
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Offline Mode",
    description: "No signal? No problem. Access your full training plans, drills, and workout history anywhere, anytime—even without an internet connection.",
    icon: WifiOff,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Nutrition & Performance",
    description: "Fuel your game correctly. Track your meals and receive personalized nutrition recommendations tailored to your specific training goals.",
    icon: Utensils,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Advanced Analytics",
    description: "Visualize your growth. Track your stats, consistency, and skill improvements over time with detailed performance charts",
    icon: BarChart3,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16"
        >
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">AI in Action</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Discover how powerful smart features turn every training session into measurable progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2rem] text-left border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
