"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Game-changing insights every session. Football AI has completely transformed how I approach training. The AI coaching adapts to my pace, recovery, and even my mindset.",
    name: "Marcus Johnson",
    role: "Semi-Pro Midfielder",
    initials: "MJ",
    color: "bg-blue-500",
  },
  {
    quote: "Essential tool for modern coaching. I use Football AI to track all my players. The detailed insights help me identify strengths and weaknesses I might have missed.",
    name: "Sarah Chen",
    role: "Youth Academy Coach",
    initials: "SC",
    color: "bg-purple-500",
  },
  {
    quote: "From weekend player to local legend. I started using Football AI six months ago. My shooting accuracy improved by 30% and I'm now the top scorer in my Sunday league.",
    name: "David Okonkwo",
    role: "Amateur Striker",
    initials: "DO",
    color: "bg-green-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Players Worldwide</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Real feedback from football players pushing the limits of their performance, powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 relative flex flex-col h-full"
            >
              <Quote className="w-10 h-10 text-white/10 mb-6 absolute top-8 right-10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-lg mb-10 flex-grow font-medium text-zinc-100 italic leading-relaxed">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className={`${t.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-black/20`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
