"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Football AI track my performance?",
    answer: "Football AI uses your smartphone's camera combined with AI algorithms to analyze your movements, speed, distance, and positioning during training sessions. Simply start a session in the app and play—our AI handles the rest.",
  },
  {
    question: "Is Football AI suitable for beginners?",
    answer: "Absolutely! Football AI is designed for players of all levels. It provides personalized feedback based on your current skill set and helps you build a solid foundation while tracking your growth.",
  },
  {
    question: "What devices are compatible with Football AI?",
    answer: "The app is compatible with iOS and Android devices.",
  },
  {
    question: "Is there a free version available?",
    answer: "All users will have 7-day free trial. After that, users will be prompted to purchase a subscription.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "Our AI models have been trained on millions of hours of professional gameplay and achieved over 95% accuracy compared to professional tracking systems like GPS vests.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass rounded-2xl border transition-all duration-300 ${
                openIndex === i ? "border-accent/40 shadow-[0_0_15px_rgba(37,99,235,0.1)]" : "border-white/5"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === i ? "text-accent" : "text-white group-hover:text-accent/80"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
