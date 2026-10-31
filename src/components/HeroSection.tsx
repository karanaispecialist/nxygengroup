"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Star, Compass } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import CountUp from "@/components/animations/CountUp";
import MagneticButton from "@/components/animations/MagneticButton";

const HERO_SLIDES = [
  {
    image: "/images/hero-runway.jpeg",
    tagline: "Haute Couture & National Runway",
    title: "PIONEERS OF FASHION & ENTERTAINMENT",
    subtitle: "Setting India's Glamour Benchmark for Over 4 Decades Since 1987",
    badge: "FLAGSHIP VERTICAL"
  },
  {
    image: "/images/pageant-grand-stage.jpeg",
    tagline: "National Grand Pageant 2026",
    title: "NXGEN MISS INDIA 2026",
    subtitle: "Grand Finale at 5-Star Resort, Noida UP with 100 National Finalists",
    badge: "UPCOMING NATIONAL IP"
  },
  {
    image: "/images/khadi-male-model.jpeg",
    tagline: "Threads of Freedom & Elegance",
    title: "MODERN KHADI COUTURE & VALIANT",
    subtitle: "Honoring Indian Cultural Heritage in Association with KVIC & FDCI",
    badge: "CULTURAL REVOLUTION"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-nxgen-dark pt-20">
      {/* Background Image Carousel with Crossfade */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover object-center filter brightness-[0.42] contrast-[1.1]"
          />
        </div>
      ))}

      {/* Luxury Cinematic Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-nxgen-dark via-nxgen-dark/40 to-black/70" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />

      {/* Decorative Shimmering Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-nxgen-gold/15 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-nxgen-blue/15 blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center lg:text-left w-full">
        <div className="max-w-3xl">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-nxgen-gold/40 text-nxgen-gold-light text-xs font-semibold uppercase tracking-widest shadow-gold-glow mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-nxgen-gold animate-spin-slow" />
            <span>{slide.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-nxgen-gold animate-ping" />
          </div>

          {/* Heading with smooth crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif-luxury font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-6 drop-shadow-xl">
                {slide.title.split(" ").map((word, i) => (
                  <span key={i} className={word === "FASHION" || word === "INDIA" || word === "KHADI" ? "text-gold-gradient" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Subtitle / Description */}
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl drop-shadow">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Group Identity Callout */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 max-w-xl text-left">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-nxgen-gold/50 shrink-0">
              <Image src="/images/logo.jpeg" alt="NXGEN Logo" fill className="object-cover" />
            </div>
            <div className="text-xs text-gray-300">
              <span className="text-nxgen-gold font-bold">NXGEN PEOPLE GROUP:</span> Diversified enterprise operating across{" "}
              <span className="text-white font-semibold">Fashion & Entertainment</span> (Flagship),{" "}
              <span className="text-white font-semibold">Food & Hospitality</span>, and{" "}
              <span className="text-white font-semibold">Education & NGO</span>.
            </div>
          </div>

          {/* Action Buttons with Magnetic Physics on Desktop */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full">
            <MagneticButton strength={0.3} className="w-full sm:w-auto">
              <Link
                href="/verticals/fashion-entertainment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:py-3.5 rounded-full bg-gold-gradient text-black font-extrabold text-sm tracking-wider uppercase shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 min-h-[48px]"
              >
                <span>Explore Flagship Fashion</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.25} className="w-full sm:w-auto">
              <Link
                href="/audition"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 rounded-full glass-panel border border-white/20 text-white font-semibold text-sm hover:border-nxgen-gold hover:text-nxgen-gold transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px]"
              >
                <Star className="w-4 h-4 text-nxgen-gold" />
                <span>Audition: Miss India 2026</span>
              </Link>
            </MagneticButton>

            <Link
              href="#verticals"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors min-h-[44px]"
            >
              <Compass className="w-4 h-4" />
              <span>All 3 Verticals</span>
            </Link>
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="mt-12 flex items-center justify-center lg:justify-start gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeSlide ? "w-10 bg-nxgen-gold shadow-gold-glow" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating Quick Stats Counter Bar with CountUp */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div key={i} className="text-left">
              <div className="font-serif-luxury font-extrabold text-2xl sm:text-3xl text-gold-gradient">
                <CountUp value={stat.value} duration={2.4} />
              </div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
