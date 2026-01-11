"use client";

import { motion } from "framer-motion";
import { Brain, Target, TrendingUp, ShieldAlert, Zap, Users } from "lucide-react";

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Get real-time insights powered by advanced machine learning that understands your pose and analyses the the ball movement.",
    icon: Brain,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Precision Tracking",
    description: "Track every pass, shot, and movement with professional-grade accuracy for complete performance data.",
    icon: Target,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Progress Metrics",
    description: "Visualize your improvement over time with detailed analytics and personalized benchmarks.",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Injury Prevention",
    description: "AI-driven alerts help you train smarter and avoid overexertion to stay on the pitch longer.",
    icon: ShieldAlert,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Live Performance",
    description: "Real-time feedback during training sessions helps you adjust and optimize on the fly.",
    icon: Zap,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Team Insights",
    description: "Compare stats with teammates and track collective performance for better team coordination.",
    icon: Users,
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
