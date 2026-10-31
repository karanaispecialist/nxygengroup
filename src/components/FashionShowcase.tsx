import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Film,
  Shirt,
  Plane,
  Trophy,
  Calendar,
  CheckCircle2,
  Crown,
  Star
} from "lucide-react";
import { VERTICALS } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import SpotlightCard from "@/components/animations/SpotlightCard";

export default function FashionShowcase() {
  const fashion = VERTICALS.fashion;

  return (
    <section id="fashion" className="relative py-24 bg-nxgen-dark text-white overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nxgen-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-nxgen-crimson/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Flagship Prominence */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/10 border border-nxgen-gold/30 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIMARY FLAGSHIP VERTICAL</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Fashion, Pageantry & <span className="text-gold-gradient">Entertainment</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Central India&apos;s pioneering force in haute couture, nationwide beauty pageants, cinematic media, and artist management since 1987.
          </p>
        </ScrollReveal>

        {/* Feature Split Banner: High Fashion Glamour Hero Card */}
        <ScrollReveal direction="scale" duration={0.8} className="relative rounded-3xl overflow-hidden gold-border glass-panel mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Visual Runway Image (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full">
              <Image
                src="/images/hero-runway.jpeg"
                alt="Haute Couture Runway Showcase"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nxgen-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-nxgen-dark/95" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-nxgen-gold/50 text-nxgen-gold text-xs font-semibold">
                <Crown className="w-3.5 h-3.5" />
                <span>40+ Years of Runway Excellence</span>
              </div>
            </div>

            {/* Content Side (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-nxgen-card/60 backdrop-blur-md">
              <div>
                <div className="text-xs uppercase tracking-widest text-nxgen-gold font-bold mb-2">
                  Showbiz Legacy Since 1987
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  From Local Dreams to <span className="text-gold-gradient">National Icons</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  Headed by visionary founder Vicky Da, NXGEN has orchestrated the largest gathering of pageant contestants in Central India (1,000+ models in Miss Bhopal), trained titleholders in Gladrags Manhunt, Supermodel of India, and groomed actors appearing in top Hindi serials and films.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0" />
                    <span>Organizer of Miss M.P., City Boy & City Girl for 10+ years</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0" />
                    <span>Produced landmark KVIC Khadi &quot;Valiant&quot; fashion festivals</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0" />
                    <span>Organizer of India vs England Women&apos;s International ODI match</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <Link
                  href="/verticals/fashion-entertainment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
                >
                  <span>Explore Full Vertical</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </Link>
                <Link
                  href="/audition"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-medium text-xs hover:border-nxgen-gold hover:text-nxgen-gold transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-nxgen-gold" />
                  <span>Model Casting Form</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Core Fashion Divisions: NA, NFTP, NXC */}
        <div className="mb-20">
          <ScrollReveal direction="up" className="text-center mb-10">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
              Three Specialized Divisions Under Fashion & Entertainment
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
              End-to-end integration across couture manufacturing, screen productions, and lifestyle travel logistics.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fashion.divisions.map((div, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(212, 175, 55, 0.2)"
                className="group p-6 flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* Division Image */}
                  <div className="relative h-52 w-full rounded-xl overflow-hidden mb-5 border border-white/10">
                    <Image
                      src={div.image}
                      alt={div.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-nxgen-gold/50 text-nxgen-gold text-[11px] font-extrabold">
                      {div.code}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    {idx === 0 && <Shirt className="w-5 h-5 text-nxgen-gold" />}
                    {idx === 1 && <Film className="w-5 h-5 text-nxgen-crimson" />}
                    {idx === 2 && <Plane className="w-5 h-5 text-nxgen-blue-light" />}
                    <h4 className="font-serif-luxury font-bold text-lg text-white group-hover:text-nxgen-gold transition-colors">
                      {div.name}
                    </h4>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4 font-light">
                    {div.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6">
                    {div.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[12px] text-gray-400 flex items-start gap-2">
                        <span className="text-nxgen-gold font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/verticals/fashion-entertainment#${div.code.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-nxgen-gold hover:text-white transition-colors pt-3 border-t border-white/10"
                >
                  <span>Learn more about {div.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Flagship Event Highlights: Grid Cards */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 gold-border bg-gradient-to-b from-nxgen-card/40 to-nxgen-dark">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-nxgen-gold font-bold">
                Flagship IP & Showcases
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Signature National Pageants & Runway Events
              </h3>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-nxgen-gold hover:underline"
            >
              <span>View All 500+ Shows</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fashion.highlights.map((item, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(212, 175, 55, 0.25)"
                className="group p-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] text-nxgen-gold-light font-medium truncate">
                    {item.dateOrVenue}
                  </div>
                </div>
                <h4 className="font-serif-luxury font-bold text-base text-white group-hover:text-nxgen-gold transition-colors mb-1 line-clamp-1">
                  {item.title}
                </h4>
                <div className="text-xs text-nxgen-gold/90 font-medium mb-2">
                  {item.subtitle}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed font-light line-clamp-3">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

