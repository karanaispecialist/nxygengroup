import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Sparkles, Quote, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function FounderSpotlight() {
  const { founder } = COMPANY_INFO;

  return (
    <section className="py-24 bg-nxgen-surface relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-nxgen-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image (5 cols) */}
          <ScrollReveal direction="left" duration={0.8} className="lg:col-span-5 relative">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden gold-border shadow-2xl">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-nxgen-gold/40">
                <div className="font-serif-luxury font-bold text-xl text-white">
                  {founder.name}
                </div>
                <div className="text-xs text-nxgen-gold font-medium">
                  {founder.title}
                </div>
                <div className="text-[11px] text-gray-300 mt-1">
                  Pioneering Entertainment &amp; Philanthropy Since 1987
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Founder Story & Vision (7 cols) */}
          <ScrollReveal direction="right" duration={0.8} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nxgen-gold/10 border border-nxgen-gold/30 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>VISIONARY LEADERSHIP</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              4 Decades of Passion, <span className="text-gold-gradient">Creativity &amp; Purpose</span>
            </h2>

            <div className="relative p-6 rounded-2xl glass-panel border-l-4 border-nxgen-gold mb-6 bg-white/[0.02]">
              <Quote className="w-8 h-8 text-nxgen-gold/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-gray-200 italic leading-relaxed font-light">
                &ldquo;Our motto is primarily to portray the cultural heritage of India, bring out the immense talent present here, and provide platforms of international repute — while ensuring that underprivileged children receive public school education and care.&rdquo;
              </p>
              <div className="text-xs font-bold text-nxgen-gold mt-2 uppercase tracking-wider">
                — Vicky Da
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Under Vicky Da&apos;s stewardship since 1987, NXGEN PEOPLE has grown from a visionary fashion movement in Central India into a diversified multi-vertical powerhouse. His journey harmonizes commercial glamour with profound community impact — producing national beauty pageants while actively running schools for Below Poverty Line (BPL) children and leading civic cleanliness drives recognized by the District Collector.
            </p>

            {/* Core Values / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-nxgen-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Glamour With Substance</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Nurturing models and artistes into Bollywood, Gladrags, and national stardom.
                  </p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <Heart className="w-5 h-5 text-nxgen-crimson shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Dedicated to Society</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Free BPL education, cleanliness awards, and mass environmental plantation drives.
                  </p>
                </div>
              </div>
            </div>

            <MagneticButton strength={0.25}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-transform"
              >
                <span>Read Full Founder Story &amp; Archives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

