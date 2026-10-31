import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  UtensilsCrossed,
  GraduationCap,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-nxgen-dark border-t border-white/10 text-gray-400 pt-16 pb-28 lg:pb-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-nxgen-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-nxgen-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-nxgen-gold/40 shadow-gold-glow">
                <Image
                  src="/images/logo.jpeg"
                  alt="NXGEN PEOPLE Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury font-bold text-xl tracking-wider text-white group-hover:text-nxgen-gold transition-colors">
                  NXGEN <span className="text-nxgen-gold">PEOPLE</span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md pt-2">
              Pioneers of Entertainment & High Fashion in Central India since 1987. A diversified powerhouse excelling in Haute Couture & Pageantry, Culinary Ventures, and Value-Driven Education.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-nxgen-gold/20 max-w-md">
              <p className="text-xs text-nxgen-gold-light italic">
                &ldquo;{COMPANY_INFO.motto}&rdquo;
              </p>
              <p className="text-[11px] text-gray-400 text-right mt-1 font-medium">
                — Vicky Da, Founder & Chairman
              </p>
            </div>
          </div>

          {/* Quick Links: Verticals */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-sm font-semibold tracking-wider text-white uppercase border-b border-nxgen-gold/30 pb-2 inline-block">
              Business Verticals
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/verticals/fashion-entertainment"
                  className="text-gray-300 hover:text-nxgen-gold flex items-center gap-2 transition-colors font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5 text-nxgen-gold" />
                  <span>Fashion & Ent. (Flagship)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals/fashion-entertainment#apparels"
                  className="text-xs text-gray-400 hover:text-white pl-5 transition-colors"
                >
                  • NXGEN Apparels (NA)
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals/fashion-entertainment#films"
                  className="text-xs text-gray-400 hover:text-white pl-5 transition-colors"
                >
                  • Films & TV Productions (NFTP)
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals/fashion-entertainment#pageants"
                  className="text-xs text-gray-400 hover:text-white pl-5 transition-colors"
                >
                  • NXGEN Miss India 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals/food"
                  className="text-gray-300 hover:text-nxgen-crimson-light flex items-center gap-2 transition-colors font-medium pt-1"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5 text-nxgen-crimson" />
                  <span>Food & Hospitality</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals/education"
                  className="text-gray-300 hover:text-nxgen-blue-light flex items-center gap-2 transition-colors font-medium pt-1"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-nxgen-blue-light" />
                  <span>Education & NGO</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legacy */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-sm font-semibold tracking-wider text-white uppercase border-b border-nxgen-gold/30 pb-2 inline-block">
              Group Legacy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About 40-Year Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/about#founder"
                  className="hover:text-white transition-colors"
                >
                  Founder Vicky Da Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Historic Events & Archives
                </Link>
              </li>
              <li>
                <Link
                  href="/events#awards"
                  className="hover:text-white transition-colors"
                >
                  Collector Cleanliness Award
                </Link>
              </li>
              <li>
                <Link
                  href="/audition"
                  className="text-nxgen-gold hover:underline transition-colors font-semibold flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Auditions & Casting 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Head Office */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-sm font-semibold tracking-wider text-white uppercase border-b border-nxgen-gold/30 pb-2 inline-block">
              Head Office
            </h3>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                <span>
                  A - 10, Gulabi Nagar, 80 Feet Road, Bag Mugaliya, Bhopal, M.P.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+917805987151" className="hover:text-white">
                    +91 7805987151
                  </a>
                  <a href="tel:+919827217552" className="hover:text-white">
                    +91 9827217552
                  </a>
                  <span className="text-[11px] text-gray-400">
                    Alt: 8770579372, 9300532512, 7415115915
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-nxgen-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:nxgenpeople@gmail.com" className="hover:text-white">
                    nxgenpeople@gmail.com
                  </a>
                  <a href="mailto:vickyda17@gmail.com" className="hover:text-white">
                    vickyda17@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NXGEN PEOPLE&apos;S GROUP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-400">
              <ShieldCheck className="w-4 h-4 text-nxgen-gold" />
              Verified Central India Enterprise
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <HeartHandshake className="w-4 h-4 text-nxgen-crimson" />
              BPL & NGO Foundation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

