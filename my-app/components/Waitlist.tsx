"use client";

import { motion } from "framer-motion";
import { Loader2, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, getCountFromServer } from "firebase/firestore";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const coll = collection(db, "waitlist_emails");
        const snapshot = await getCountFromServer(coll);
        setCount(snapshot.data().count);
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
      }
    };
    
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await addDoc(collection(db, "waitlist_emails"), {
        email: email,
        timestamp: serverTimestamp(),
      });
      setStatus("success");
      setEmail("");
      setCount(prev => (prev !== null ? prev + 1 : 1));
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden bg-background">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-[600px] bg-accent/10 blur-[120px] rounded-full opacity-50" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 text-xs font-bold mb-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mb-0.5"><path d="M12 2v20M2 12h20L12 2l-10 10z" className="hidden"/><path d="M12 3l1.91 5.88H20.1l-4.99 3.63 1.9 5.86L12 14.74l-5.01 3.63 1.9-5.86-4.99-3.63h6.19L12 3z" fill="currentColor"/></svg>
            Available Now on iOS & Android
          </div> */}

          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Ready to Transform <span className="text-accent underline decoration-accent/20">Your Game?</span>
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-medium">
            Join thousands of players already using AI to unlock their full potential. 
            Download Football AI today and start your journey to becoming a better player.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-4 p-2 glass rounded-3xl border-white/5">
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-all placeholder:text-zinc-600 font-medium"
                required
              />
              <button
                disabled={status !== "idle"}
                className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 disabled:opacity-80 min-w-[180px] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : status === "success" ? (
                  "Joined Successfully!"
                ) : status === "error" ? (
                  "Try Again"
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>
            <p className="text-[11px] text-zinc-500 mt-5 font-semibold tracking-wide">
              Join {count !== null ? count.toLocaleString() : "..."} players waiting for early access. No spam, ever.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
