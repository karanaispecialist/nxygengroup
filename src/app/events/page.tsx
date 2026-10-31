import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Trophy,
  Sparkles,
  Users,
  Award,
  Crown,
  ArrowRight
} from "lucide-react";

const ALL_EVENTS = [
  {
    title: "NXGEN MISS INDIA 2026",
    status: "Upcoming Flagship",
    date: "15th - 20th November 2026",
    venue: "5* Luxury Resort, Noida, Uttar Pradesh",
    image: "/images/pageant-grand-stage.jpeg",
    description: "The biggest and most prestigious national pageant in India. Multi-stage competition featuring online & offline prelims, 100 finalists in the semi-finals, culminating in the Grand Finale and VIP After-Party.",
    highlights: ["State-wide Prelims", "100 National Finalists", "Crowning of Miss India 2026", "VIP Celebrity Dinner"]
  },
  {
    title: "THE KHADI BEAUTY PAGEANT: MISS & MR. KHADI",
    status: "Annual Signature IP",
    date: "2nd Oct - 10th Oct (Annual)",
    venue: "Bhopal Haat Exhibition Ground, Bhopal",
    image: "/images/khadi-male-model.jpeg",
    description: "'Threads of Freedom & Elegance' - Landmark cultural festival in association with KVIC & FDCI. Six signature competition rounds culminating in the showcase of the Modern Khadi Collection.",
    highlights: ["Khadi Casuals Round", "Traditional & Bridal Round", "Indo-Western Fusion Wear", "Miss Elegance & Mr. Style Icon"]
  },
  {
    title: "MISS BEAUTIFUL BHOPAL (1,000+ CONTESTANTS)",
    status: "Historic Record",
    date: "Decade Series",
    venue: "Bhopal, Madhya Pradesh",
    image: "/images/felicitation-rajiv.jpeg",
    description: "The largest talent hunt gathering in Central India with over 1,000 aspiring models competing. Winners felicitated by veteran Bollywood actor Rajiv Verma and Sandhya Prakash MD Bharat Patel.",
    highlights: ["1,000+ Registered Contestants", "Actor Rajiv Verma Felicitation", "Extensive Media Coverage", "Gateway to Miss India"]
  },
  {
    title: "STAR NIGHT WITH UDITA GOSWAMI AT JHANSI CLUB",
    status: "Historic Showbiz",
    date: "Jhansi Club",
    venue: "Jhansi Club Auditorium",
    image: "/images/celebrity-udita.jpeg",
    description: "High-octane celebrity night featuring Bollywood actress Udita Goswami alongside India's top runway supermodels and live musical performances.",
    highlights: ["Bollywood Star Appearance", "Runway Supermodel Troupe", "VIP Red Carpet", "Live Media Broadcast"]
  },
  {
    title: "INTERNATIONAL WOMEN'S ODI CRICKET: INDIA VS ENGLAND",
    status: "International Sports",
    date: "Agra Stadium",
    venue: "Agra Sports Complex",
    image: "/images/odi-cricket-match.jpeg",
    description: "Demonstrating unparalleled production and stadium logistics capability, NXGEN successfully organized the International Women's ODI cricket match between India and England.",
    highlights: ["Official International Sporting Event", "Bilateral Series Logistics", "Agra Stadium Hospitality", "International Broadcast"]
  },
  {
    title: "DECADE OF CITY BOY & CITY GIRL (10+ YEARS)",
    status: "Decade Series",
    date: "Annual State Series",
    venue: "Bhopal, Indore, Gwalior & Jabalpur",
    image: "/images/city-boy-girl.jpeg",
    description: "A decade-long youth talent hunt identifying fresh faces and preparing them for national commercial modeling, print campaigns, and television auditions.",
    highlights: ["10-Year Continuous Run", "Covers Multiple Cities in M.P.", "Youth Icon Awards", "Professional Portfolios"]
  },
  {
    title: "DECADE OF MISS M.P. (MADHYA PRADESH)",
    status: "Decade Series",
    date: "Annual State Pageant",
    venue: "Central India Venues",
    image: "/images/miss-mp-series.jpeg",
    description: "The definitive state-level beauty pageant crowning the representative of Madhya Pradesh for national pageants including Miss India and Supermodel of India.",
    highlights: ["State Representation", "Grooming & Diction Camp", "National Pageant Fast-Track", "Eminent Celebrity Jury"]
  },
  {
    title: "KVIC KHADI CONTEST & FASHION SHOW 'VALIANT'",
    status: "Govt Collaboration",
    date: "Bhopal & Delhi",
    venue: "National Exhibition Grounds",
    image: "/images/image35.jpeg",
    description: "In association with the Khadi & Village Industries Commission, pioneering the 'Valiant' fashion show which transformed handspun Khadi into high fashion couture.",
    highlights: ["Handcrafted Khadi Textiles", "Celebrity Runway Walk", "Artisan Upliftment", "National Press Recognition"]
  }
];

export default function EventsPage() {
  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold/50 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Trophy className="w-3.5 h-3.5" />
            <span>40-YEAR SHOW REPERTOIRE</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Events, Pageants &amp; <span className="text-gold-gradient">Spectacles</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            From 1,000-contestant beauty pageants and FDCI Khadi runways to international sporting matches at Agra, explore four decades of showmanship.
          </p>

          <Link
            href="/audition"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
          >
            <Crown className="w-4 h-4 text-black" />
            <span>Apply to Compete in Miss India 2026</span>
          </Link>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {ALL_EVENTS.map((event, idx) => (
            <div
              key={idx}
              className="rounded-3xl glass-panel gold-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:bg-white/[0.03] transition-all duration-300"
            >
              {/* Media (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-nxgen-gold text-xs font-bold border border-nxgen-gold/40">
                  {event.status}
                </div>
              </div>

              {/* Details (7 cols) */}
              <div className="lg:col-span-7">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
                  {event.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 mb-4 font-medium">
                  <span className="flex items-center gap-1.5 text-nxgen-gold">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <MapPin className="w-4 h-4 text-nxgen-gold" />
                    {event.venue}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {event.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-gray-300 font-medium">
                      ✓ {hl}
                    </div>
                  ))}
                </div>

                {event.status.includes("Upcoming") && (
                  <Link
                    href="/audition"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-transform"
                  >
                    <span>Audition Registration</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

