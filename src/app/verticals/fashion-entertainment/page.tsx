import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Crown,
  Shirt,
  Film,
  Plane,
  Trophy,
  Calendar,
  MapPin,
  CheckCircle2,
  Star,
  Award,
  ArrowRight
} from "lucide-react";
import { VERTICALS } from "@/lib/data";

export default function FashionEntertainmentPage() {
  const fashion = VERTICALS.fashion;

  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-runway.jpeg"
            alt="Fashion Runway"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-nxgen-dark via-nxgen-dark/85 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold/50 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIMARY FLAGSHIP VERTICAL</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Fashion &amp; <span className="text-gold-gradient">Entertainment</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed mb-8">
            {fashion.fullDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/audition"
              className="px-7 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
            >
              Audition for Miss India 2026
            </Link>
            <Link
              href="#divisions"
              className="px-6 py-3.5 rounded-full glass-panel border border-white/20 text-white font-medium text-xs hover:border-nxgen-gold transition-colors"
            >
              Explore 3 Divisions
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Divisions Section */}
      <section id="divisions" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-nxgen-gold uppercase tracking-widest">
            THREE SPECIALIZED PILLARS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
            End-To-End Showbiz Ecosystem
          </h2>
        </div>

        <div className="space-y-16">
          {/* Division 1: NA */}
          <div id="na" className="rounded-3xl glass-panel gold-border p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/khadi-male-model.jpeg"
                alt="NXGEN Apparels"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-nxgen-gold text-xs font-bold border border-nxgen-gold/50">
                NA • NXGEN APPARELS
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <Shirt className="w-6 h-6 text-nxgen-gold" />
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                  NXGEN APPARELS (NA)
                </h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                Bridging royal Indian craftsmanship with contemporary silhouettes. NXGEN Apparels produces couture fashion, modern Khadi ensembles, bespoke bridal wear, and fusion styles showcased at national pageants and fashion weeks across India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                  <span>The Modern Khadi Collection in association with KVIC &amp; FDCI</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                  <span>Couture Evening Gowns &amp; Indo-Western Fusion</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                  <span>Designer Kurtas, Sherwanis, Sarees &amp; Lehengas</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                  <span>Sustainable handspun fabric revival projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Division 2: NFTP */}
          <div id="nftp" className="rounded-3xl glass-panel gold-border p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-2">
                <Film className="w-6 h-6 text-nxgen-crimson" />
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                  NXGEN FILMS &amp; T.V. PRODUCTIONS (NFTP)
                </h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                Our in-house cinematic production company and talent casting agency. NFTP manages talent discovery, screen auditions, line production, feature films, TV serials, and digital web content. Our groomed pupils have become household names on national television and cinema.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-crimson shrink-0 mt-0.5" />
                  <span>Pupils starring in leading Hindi daily serials &amp; OTT</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-crimson shrink-0 mt-0.5" />
                  <span>Music video direction, scripting &amp; production</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-crimson shrink-0 mt-0.5" />
                  <span>Partnerships with Prayas Productions Mumbai &amp; Sara Creations Delhi</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-crimson shrink-0 mt-0.5" />
                  <span>Full-service line production across Central &amp; North India</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/tv-serials-actors.jpeg"
                alt="NXGEN Films & TV Productions"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-nxgen-crimson text-xs font-bold border border-nxgen-crimson/50">
                NFTP • FILMS &amp; TV
              </div>
            </div>
          </div>

          {/* Division 3: NXC */}
          <div id="nxc" className="rounded-3xl glass-panel gold-border p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/school-excursion.jpeg"
                alt="NXCURSIONS Tours & Travels"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-nxgen-blue-light text-xs font-bold border border-nxgen-blue/50">
                NXC • NXCURSIONS
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <Plane className="w-6 h-6 text-nxgen-blue-light" />
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                  NXCURSIONS (TOURS &amp; TRAVELS) (NXC)
                </h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                Specialized in luxury destination management, celebrity artist coordination, fashion shoot hospitality, and youth educational excursions. From handling international cricket teams at Agra to orchestrating 5-star resort pageants in Noida.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-blue-light shrink-0 mt-0.5" />
                  <span>VIP artist protocol and celebrity travel arrangements</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-blue-light shrink-0 mt-0.5" />
                  <span>Destination fashion shoot reconnaissance and permits</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-blue-light shrink-0 mt-0.5" />
                  <span>Educational study tours &amp; cultural excursions</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-nxgen-blue-light shrink-0 mt-0.5" />
                  <span>Complete logistics for large-scale national events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miss India 2026 Deep Dive */}
      <section id="miss-india" className="py-20 bg-nxgen-surface border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nxgen-gold/20 border border-nxgen-gold text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>FLAGSHIP NATIONAL EVENT</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              NXGEN MISS INDIA 2026
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 font-light">
              Official schedule, stages, and eligibility criteria for India&apos;s most anticipated beauty pageant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl glass-panel gold-border text-center">
              <div className="w-12 h-12 rounded-full bg-nxgen-gold/20 text-nxgen-gold font-serif-luxury font-bold text-xl flex items-center justify-center mx-auto mb-4 border border-nxgen-gold/40">
                1
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">Stage I: Prelims</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                State-level scouting conducted across both Online video submissions and Offline audition centers. Evaluating screen presence, confidence, and basic runway walk.
              </p>
              <span className="text-[11px] text-nxgen-gold font-semibold uppercase">Open to All States</span>
            </div>

            <div className="p-8 rounded-2xl glass-panel gold-border text-center">
              <div className="w-12 h-12 rounded-full bg-nxgen-gold/20 text-nxgen-gold font-serif-luxury font-bold text-xl flex items-center justify-center mx-auto mb-4 border border-nxgen-gold/40">
                2
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">Stage II: Semi-Finals</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                100 selected national contestants undergo intensive grooming, diction training, ramp-walk choreography, photo sessions, and preliminary jury rounds.
              </p>
              <span className="text-[11px] text-nxgen-gold font-semibold uppercase">Top 100 Contestants</span>
            </div>

            <div className="p-8 rounded-2xl glass-panel gold-border text-center">
              <div className="w-12 h-12 rounded-full bg-nxgen-gold/20 text-nxgen-gold font-serif-luxury font-bold text-xl flex items-center justify-center mx-auto mb-4 border border-nxgen-gold/40">
                3
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">Stage III: Grand Finale</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                Red carpet runway extravaganza, crowning of NXGEN Miss India 2026, and an exclusive Grand Dinner VIP After-Party with celebrity dignitaries.
              </p>
              <span className="text-[11px] text-nxgen-gold font-semibold uppercase">Venue: 5* Resort, Noida UP</span>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/audition"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Submit Model Audition Application</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 40-Year Historic Archive Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-nxgen-gold uppercase tracking-widest">
            HISTORIC MILESTONES (1987-2026)
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
            Legacy of Champions &amp; Supermodels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-white/10">
            <div className="relative h-44 rounded-xl overflow-hidden mb-4">
              <Image src="/images/felicitation-rajiv.jpeg" alt="Miss Bhopal" fill className="object-cover" />
            </div>
            <h4 className="font-serif-luxury font-bold text-lg text-white mb-1">Miss Bhopal Contest</h4>
            <div className="text-xs text-nxgen-gold mb-2 font-medium">1,000+ Participants Gathering</div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Felicitation by Bollywood veteran Rajiv Verma and Sandhya Prakash MD Bharat Patel.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10">
            <div className="relative h-44 rounded-xl overflow-hidden mb-4">
              <Image src="/images/celebrity-udita.jpeg" alt="Udita Goswami Night" fill className="object-cover" />
            </div>
            <h4 className="font-serif-luxury font-bold text-lg text-white mb-1">Star Night: Jhansi Club</h4>
            <div className="text-xs text-nxgen-gold mb-2 font-medium">Bollywood Stars &amp; Supermodels</div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Featuring Bollywood actress Udita Goswami alongside India&apos;s leading runway supermodels.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10">
            <div className="relative h-44 rounded-xl overflow-hidden mb-4">
              <Image src="/images/supermodel-manhunt.jpeg" alt="Gladrags & Supermodel" fill className="object-cover" />
            </div>
            <h4 className="font-serif-luxury font-bold text-lg text-white mb-1">Gladrags &amp; Supermodel</h4>
            <div className="text-xs text-nxgen-gold mb-2 font-medium">National Titleholders</div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              NXGEN pupils winning Mr. India Best Physique, Super Model of India, and Miss Teen India.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10">
            <div className="relative h-44 rounded-xl overflow-hidden mb-4">
              <Image src="/images/odi-cricket-match.jpeg" alt="International Cricket" fill className="object-cover" />
            </div>
            <h4 className="font-serif-luxury font-bold text-lg text-white mb-1">India vs England ODI</h4>
            <div className="text-xs text-nxgen-gold mb-2 font-medium">International Women&apos;s Cricket</div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Organized the high-profile international sporting event at Agra Stadium.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

