import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Crown, Sparkles, MapPin, Calendar, ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function MissIndiaBanner() {
  return (
    <section className="relative py-20 bg-nxgen-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale" duration={0.8} className="relative rounded-3xl overflow-hidden gold-border shadow-2xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-black via-nxgen-card/90 to-black">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/images/pageant-grand-stage.jpeg"
              alt="Grand Finale Stage"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-nxgen-dark via-nxgen-dark/80 to-transparent" />

          {/* Shimmering orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-nxgen-gold/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          <div className="relative z-10 max-w-3xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold/60 text-nxgen-gold text-xs font-bold uppercase tracking-widest shadow-gold-glow mb-6">
              <Crown className="w-3.5 h-3.5" />
              <span>THE BIGGEST & MOST PRESTIGIOUS PAGEANT IN INDIA</span>
            </div>

            {/* Title */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
              NXGEN MISS <span className="text-gold-gradient">INDIA 2026</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              A grand three-stage national beauty pageant discovering, grooming, and elevating the finest modeling talents across all Indian states into global stardom.
            </p>

            {/* Event Dates & Venue Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-nxgen-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Venue</div>
                  <div className="text-sm font-semibold text-white">5-Star Luxury Resort, Noida UP</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-nxgen-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Tentative Dates</div>
                  <div className="text-sm font-semibold text-white">15th - 20th November 2026</div>
                </div>
              </div>
            </div>

            {/* 3 Stages Process */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-bold text-nxgen-gold block mb-1">STAGE I</span>
                <span className="text-xs text-white font-medium block">The Prelims Round</span>
                <span className="text-[11px] text-gray-400">Online & Offline Auditions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-bold text-nxgen-gold block mb-1">STAGE II</span>
                <span className="text-xs text-white font-medium block">Semi-Final Contests</span>
                <span className="text-[11px] text-gray-400">100 Selected National Finalists</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-bold text-nxgen-gold block mb-1">STAGE III</span>
                <span className="text-xs text-white font-medium block">Grand Finale & VIP Dinner</span>
                <span className="text-[11px] text-gray-400">The After Party with Celeb Guests</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.3}>
                <Link
                  href="/audition"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Register for Auditions</span>
                </Link>
              </MagneticButton>
              <Link
                href="/verticals/fashion-entertainment#miss-india"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:border-nxgen-gold hover:text-nxgen-gold transition-colors"
              >
                <span>Full Pageant Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

