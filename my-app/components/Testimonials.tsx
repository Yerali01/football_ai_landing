"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Actually helped my finishing. The AI video analysis is sick.",
    name: "Arlan M.",
    role: "Junior Forward",
  },
  {
    quote: "Finally an app that gives real technical feedback.",
    name: "Vlad S.",
    role: "Youth Academy Player",
  },
  {
    quote: "Solid drills. Definitely faster with the ball now. Btw, nutrition functionality keeps me on track.",
    name: "David J.",
    role: "Amateur Striker",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Players Say</h3>
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
              <Quote className="w-10 h-10 text-white/5 mb-6 absolute top-8 right-10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-xl mb-10 flex-grow font-medium text-zinc-100 italic leading-relaxed">
                "{t.quote}"
              </blockquote>

              <div className="pt-6 border-t border-white/5">
                <div className="font-bold text-white text-lg">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
