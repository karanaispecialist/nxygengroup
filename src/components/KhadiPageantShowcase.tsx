import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Trophy, Award, MapPin, Calendar, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SpotlightCard from "@/components/animations/SpotlightCard";
import MagneticButton from "@/components/animations/MagneticButton";

export default function KhadiPageantShowcase() {
  const rounds = [
    { name: "Intro Round", desc: "Contestants introduce themselves in handcrafted Khadi casuals." },
    { name: "Talent Round", desc: "Showcasing performing arts, classical & contemporary dance, vocals." },
    { name: "Traditional Round", desc: "Heritage Sarees, Lehengas, royal Kurtas and bespoke Sherwanis." },
    { name: "Fusion Wear Round", desc: "Avant-garde Indo-Western Khadi silhouettes." },
    { name: "Evening Gowns Round", desc: "Haute couture Khadi and silk evening gowns under the spotlights." },
    { name: "Q&A Judgment Round", desc: "Intellect, cultural poise, and personality evaluated by eminent jury." }
  ];

  const titles = [
    "Miss Elegance Khadi",
    "Mr. Style Icon Khadi",
    "Miss & Mr. Best Personality",
    "Miss & Mr. Talented Khadi",
    "Best Designer Khadi"
  ];

  return (
    <section className="py-20 bg-nxgen-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Poster / Model Showcase (5 cols) */}
          <ScrollReveal direction="left" duration={0.8} className="lg:col-span-5 relative">
            <div className="relative h-[540px] w-full rounded-3xl overflow-hidden gold-border shadow-2xl">
              <Image
                src="/images/khadi-male-model.jpeg"
                alt="Khadi Beauty Pageant Model"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-nxgen-gold/30">
                <div className="text-[10px] uppercase tracking-widest text-nxgen-gold font-bold">
                  Cultural Heritage Flagship
                </div>
                <div className="font-serif-luxury text-lg font-bold text-white">
                  &ldquo;Threads of Freedom &amp; Elegance&rdquo;
                </div>
                <div className="text-xs text-gray-300 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-nxgen-gold" />
                  <span>Bhopal Haat Exhibition Ground</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text and Details (7 cols) */}
          <ScrollReveal direction="right" duration={0.8} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nxgen-gold/10 border border-nxgen-gold/40 text-nxgen-gold text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>CULTURAL REVIVAL INITIATIVE</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              THE KHADI BEAUTY <span className="text-gold-gradient">PAGEANT</span>
            </h2>
            <div className="text-lg text-gray-300 font-light mb-6">
              Miss &amp; Mr. Khadi Fashion Show — Modern Khadi Collection
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              In collaboration with the Khadi and Village Industries Commission (KVIC), NXGEN reimagines India&apos;s sacred fabric for the 21st-century runway. This spectacular pageant blends patriotic heritage with high fashion glamour.
            </p>

            {/* 6 Rounds Grid with Spotlight Cards */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-wider text-nxgen-gold font-bold mb-3">
                6 Signature Pageant Rounds:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rounds.map((r, i) => (
                  <SpotlightCard
                    key={i}
                    spotlightColor="rgba(212, 175, 55, 0.2)"
                    className="p-3.5 rounded-xl border border-white/5 bg-white/[0.03] transition-all hover:-translate-y-0.5"
                  >
                    <span className="text-xs font-bold text-white block mb-0.5">
                      0{i + 1}. {r.name}
                    </span>
                    <span className="text-[11px] text-gray-400 font-light">
                      {r.desc}
                    </span>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Titles to be Won */}
            <div className="mb-8 p-4 rounded-xl bg-nxgen-card/70 border border-nxgen-gold/20">
              <span className="text-xs uppercase tracking-wider text-nxgen-gold font-bold block mb-2">
                Prestigious Titles Awarded:
              </span>
              <div className="flex flex-wrap gap-2">
                {titles.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200"
                  >
                    <Trophy className="w-3 h-3 text-nxgen-gold" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            <MagneticButton strength={0.25}>
              <Link
                href="/verticals/fashion-entertainment#khadi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-transform"
              >
                <span>Explore Modern Khadi Showcase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

