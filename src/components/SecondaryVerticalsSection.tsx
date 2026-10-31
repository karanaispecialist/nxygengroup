import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  GraduationCap,
  ArrowRight,
  Coffee,
  Sparkles,
  BookOpen,
  Award,
  HeartHandshake,
  ExternalLink
} from "lucide-react";
import { VERTICALS } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function SecondaryVerticalsSection() {
  const food = VERTICALS.food;
  const education = VERTICALS.education;

  return (
    <section id="verticals" className="py-20 bg-nxgen-surface/60 border-y border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-nxgen-crimson/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-nxgen-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>DIVERSIFIED GROUP PORTFOLIO</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Supporting Business <span className="text-gold-gradient">Segments</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 font-light">
            While Fashion & Entertainment represents our core identity, NXGEN PEOPLE proudly expands into high-growth culinary ventures and value-driven education.
          </p>
        </ScrollReveal>

        {/* 2-Column Grid for Secondary Verticals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Food & Hospitality */}
          <ScrollReveal direction="left" duration={0.7} className="h-full">
            <div className="group rounded-3xl glass-panel border border-white/10 hover:border-nxgen-crimson/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-nxgen-card to-nxgen-dark h-full">
              <div>
                {/* Media Thumbnail */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <Image
                    src={food.heroImage}
                    alt={food.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-nxgen-crimson/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Food Vertical</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 font-medium">
                    Chilliflakes Café • Suveez Big Bites • Cloudkitchen Network
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif-luxury font-bold text-2xl text-white group-hover:text-nxgen-crimson-light transition-colors">
                    {food.name}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">NCCK / SBB</span>
                </div>

                <div className="text-xs text-nxgen-gold font-medium mb-3">
                  {food.tagline}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  {food.shortDescription}
                </p>

                {/* Sub-divisions list */}
                <div className="space-y-2 mb-6 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  <div className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                    Operating Segments:
                  </div>
                  {food.divisions.map((div, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-nxgen-crimson font-bold">•</span>
                      <span>
                        <strong className="text-white">{div.name}:</strong> {div.description.slice(0, 75)}...
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Link to Food Page */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/verticals/food"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nxgen-crimson/20 border border-nxgen-crimson/40 text-nxgen-crimson-light font-semibold text-xs tracking-wider uppercase hover:bg-nxgen-crimson hover:text-white transition-all duration-300 group/btn"
                >
                  <span>Explore Food & Hospitality</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact?vertical=food"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Franchise Inquiries →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Education & Social Impact */}
          <ScrollReveal direction="right" duration={0.7} className="h-full">
            <div className="group rounded-3xl glass-panel border border-white/10 hover:border-nxgen-blue/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-nxgen-card to-nxgen-dark h-full">
            <div>
              {/* Media Thumbnail */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={education.heroImage}
                  alt={education.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-nxgen-blue/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education Vertical</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-xs text-white/90 font-medium">
                  <Award className="w-3.5 h-3.5 text-nxgen-gold shrink-0" />
                  <span className="truncate">Dist. Collector Award for Best Cleanliness Drive</span>
                </div>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-luxury font-bold text-2xl text-white group-hover:text-nxgen-blue-light transition-colors">
                  {education.name}
                </h3>
                <span className="text-xs text-gray-400 font-mono">NPS / NIIFPA / NGO</span>
              </div>

              <div className="text-xs text-nxgen-gold font-medium mb-3">
                {education.tagline}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                {education.shortDescription}
              </p>

              {/* Sub-divisions list */}
              <div className="space-y-2 mb-6 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                <div className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                  Operating Segments:
                </div>
                {education.divisions.slice(0, 3).map((div, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="text-nxgen-blue-light font-bold">•</span>
                    <span>
                      <strong className="text-white">{div.name}:</strong> {div.description.slice(0, 75)}...
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Link to Education Page */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/verticals/education"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nxgen-blue/20 border border-nxgen-blue/40 text-nxgen-blue-light font-semibold text-xs tracking-wider uppercase hover:bg-nxgen-blue hover:text-white transition-all duration-300 group/btn"
              >
                <span>Explore Education & NGO</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact?vertical=education"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                School Admissions →
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

