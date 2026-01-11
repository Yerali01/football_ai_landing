"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  // {
  //   question: "How does Football AI track my performance?",
  //   answer: "Football AI uses your smartphone's camera combined with AI algorithms to analyze your movements, speed, distance, and positioning during training sessions. Simply start a session in the app and play—our AI handles the rest.",
  // },
  // {
  //   question: "How accurate is the AI analysis?",
  //   answer: "Our AI models have been trained on millions of hours of professional gameplay and achieved over 95% accuracy compared to professional tracking systems like GPS vests.",
  // },
  {
    question: "How does the AI coaching actually work?",
    answer: "It uses your smartphone's camera to track your body movements in real-time. Our computer vision algorithms analyze your technique against professional standards to provide instant updates on your form.",
  },
  {
    question: "Do I need any special equipment or sensors?",
    answer: "No! You only need your smartphone and a football. Our technology works using just your phone's camera—no expensive wearables or sensors required.",
  },
  {
    question: "Can I use the app without an internet connection?",
    answer: "Yes. Our Offline Mode allows you to access your downloaded training plans and view your workout history even when you are on a pitch with poor signal.",
  },
  {
    question: "Is there a free version available?",
    answer: "All users will have 7-day free trial. After that, users will be prompted to purchase a subscription.",
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely. The app includes an initial AI assessment (ai_analysis_page) to determine your skill level, ensuring that your training plan is personalized to your current abilities.",
  },
  {
    question: "How do I talk to the AI Assistant?",
    answer: "The app features a hands-free microphone mode during live training. simply speak your question, and the AI will respond via audio so you don't have to stop your drill to look at the screen.",
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
