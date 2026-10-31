import React from "react";
import Link from "next/link";
import { Sparkles, Phone, Mail, ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function AuditionCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-nxgen-dark via-nxgen-card to-nxgen-dark text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-radial-gradient from-nxgen-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="scale" duration={0.8} className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold text-nxgen-gold text-xs font-bold uppercase tracking-widest shadow-gold-glow mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH NXGEN PEOPLE</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Step Onto India&apos;s Grandest <span className="text-gold-gradient">Stage</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
            Whether you are an aspiring model aiming for NXGEN Miss India 2026, a partner interested in cloud kitchen expansion, or an educator seeking collaboration — our doors are open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <MagneticButton strength={0.3}>
              <Link
                href="/audition"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
              >
                <Star className="w-4 h-4 text-black" />
                <span>Apply for Auditions 2026</span>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-panel border border-white/20 text-white font-semibold text-sm hover:border-nxgen-gold hover:text-nxgen-gold transition-colors"
              >
                <span>General &amp; Business Inquiries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>

          {/* Quick contact pills */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
            <a
              href="tel:+917805987151"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-nxgen-gold" />
              <span>Helpline: +91 7805987151</span>
            </a>
            <a
              href="tel:+919827217552"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-nxgen-gold" />
              <span>Bhopal Office: +91 9827217552</span>
            </a>
            <a
              href="mailto:nxgenpeople@gmail.com"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-nxgen-gold" />
              <span>nxgenpeople@gmail.com</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

