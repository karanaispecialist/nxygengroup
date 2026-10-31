import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  Heart,
  CheckCircle2,
  Calendar,
  Building,
  ArrowRight,
  ShieldCheck,
  Quote
} from "lucide-react";
import { COMPANY_INFO, TIMELINE } from "@/lib/data";

export default function AboutPage() {
  const { founder } = COMPANY_INFO;

  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold/50 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SINCE 1987 • 40+ YEARS OF EXCELLENCE</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            The NXGEN PEOPLE <span className="text-gold-gradient">Legacy</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Pioneering entertainment, fashion pageantry, gourmet hospitality, and inclusive education across Central India for over four decades.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <Building className="w-4 h-4 text-nxgen-gold" />
              Bhopal Headquartered
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-nxgen-gold" />
              Founded 1987
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-nxgen-gold" />
              500+ National Events
            </span>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="founder" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden gold-border shadow-2xl">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-nxgen-gold/40">
                <div className="font-serif-luxury font-bold text-xl text-white">
                  {founder.name}
                </div>
                <div className="text-xs text-nxgen-gold font-medium">
                  {founder.title}
                </div>
                <div className="text-[11px] text-gray-300 mt-1">
                  Visionary Behind Central India&apos;s Showbiz Revolution
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-nxgen-gold uppercase tracking-widest block mb-2">
              CHAIRMAN &amp; FOUNDER
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mb-6">
              Vicky Da — 4 Decades of Visionary Leadership
            </h2>

            <div className="p-6 rounded-2xl glass-panel border-l-4 border-nxgen-gold mb-6 relative">
              <Quote className="w-8 h-8 text-nxgen-gold/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-gray-200 italic leading-relaxed font-light">
                &ldquo;We brought in fashion trends to this part of the country in 1987 with full potential, creativity, and passion. Our goal has always been two-fold: portray the magnificent cultural heritage of India, and lift up the community through education and service.&rdquo;
              </p>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
              Known throughout the nation as a premier show business mentor and cultural ambassador, Vicky Da has guided thousands of young men and women into careers as supermodels, film actors, television stars, writers, and directors. Under his guidance, pupils have achieved international heights in Miss &amp; Mr. India, Miss &amp; Mr. India Teen, and Gladrags Manhunt.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
              Simultaneously, Vicky Da has remained deeply committed to grassroots social work — operating NXGEN Public School to provide public school education to Below Poverty Line (BPL) students, organizing environmental plantation drives, and earning the official Cleanliness Drive award from the District Collector.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-transform"
              >
                Connect With Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 40-Year Timeline */}
      <section className="py-20 bg-nxgen-surface border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-nxgen-gold uppercase tracking-widest">
              CHRONOLOGY OF SUCCESS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
              Historical Timeline (1987 - 2026)
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl glass-panel border border-white/10 hover:border-nxgen-gold/50 transition-colors"
              >
                <div className="px-4 py-2 rounded-xl bg-gold-gradient text-black font-serif-luxury font-extrabold text-xl shrink-0 shadow-gold-glow">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-serif-luxury font-bold text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Principles */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-nxgen-gold uppercase tracking-widest">
            CORE PHILOSOPHY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
            Our Guiding Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl glass-panel gold-border text-center">
            <Sparkles className="w-10 h-10 text-nxgen-gold mx-auto mb-4" />
            <h3 className="font-serif-luxury font-bold text-xl mb-2">Cultural Heritage</h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Showcasing the soul of India through indigenous Khadi, traditional royal weaves, classical arts, and timeless aesthetic values.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-panel gold-border text-center">
            <Award className="w-10 h-10 text-nxgen-gold mx-auto mb-4" />
            <h3 className="font-serif-luxury font-bold text-xl mb-2">Talent Elevation</h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Discovering diamonds in the rough from small towns and training them to walk international runways and star in Bollywood cinema.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-panel gold-border text-center">
            <Heart className="w-10 h-10 text-nxgen-gold mx-auto mb-4" />
            <h3 className="font-serif-luxury font-bold text-xl mb-2">Humanitarian Upliftment</h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Investing group profits back into free schooling for BPL students, massive environmental greening, and community healthcare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

