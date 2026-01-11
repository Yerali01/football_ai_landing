import { Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="Football AI Logo" 
                    width={32} 
                    height={32} 
                    className="object-contain"
                  />
               </div>
               <span className="text-xl font-bold tracking-tight">Football AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              The world's most advanced AI-powered football coaching platform. Elevate your performance with professional analytics in your pocket.
            </p>
            <div className="flex gap-4">
               {["Twitter", "Instagram", "LinkedIn", "Discord"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                     <span className="sr-only">{social}</span>
                     {/* Replace with actual icons if needed */}
                     <div className="w-4 h-4 rounded-sm bg-white/20" />
                  </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6">Platform</h4>
             <ul className="space-y-4 text-sm text-muted-foreground transition-colors">
                <li><a href="#features" className="hover:text-accent">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-accent">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Support</h4>
             <ul className="space-y-4 text-sm text-muted-foreground transition-colors">
                <li><a href="#" className="hover:text-accent">Help Center</a></li>
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent">Cookie Policy</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Stay Updated</h4>
             <p className="text-sm text-muted-foreground mb-4">Get the latest football tips and AI updates.</p>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors pr-12"
                />
                <button className="absolute right-2 top-2 bg-accent p-1.5 rounded-lg text-white hover:bg-accent/80 transition-colors">
                   <Send className="w-4 h-4" />
                </button>
             </div>
             <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="hover:scale-105 transition-transform active:scale-95">
                   <Image 
                     src="/download-on-the-app-store-logo.png" 
                     alt="Download on App Store" 
                     width={120} 
                     height={36} 
                     className="h-9 w-auto"
                   />
                </a>
                <a href="#" className="hover:scale-105 transition-transform active:scale-95">
                   <Image 
                     src="/get-it-on-google-play.png" 
                     alt="Get it on Google Play" 
                     width={135} 
                     height={36} 
                     className="h-9 w-auto"
                   />
                </a>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
           <p className="text-sm text-muted-foreground">
             &copy; {new Date().getFullYear()} Football AI Analytics. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
}
