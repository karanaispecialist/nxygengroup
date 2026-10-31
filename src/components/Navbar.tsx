"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sparkles,
  UtensilsCrossed,
  GraduationCap,
  Calendar,
  Phone,
  ChevronDown,
  Award
} from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [verticalsOpen, setVerticalsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setVerticalsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-nxgen-gold/40 shadow-gold-glow transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpeg"
                alt="NXGEN PEOPLE Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury font-bold text-lg tracking-wider text-white group-hover:text-nxgen-gold transition-colors">
                NXGEN <span className="text-nxgen-gold">PEOPLE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium">
                Pioneering Since 1987
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/"
                  ? "text-nxgen-gold bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* Verticals Dropdown */}
            <div className="relative">
              <button
                onClick={() => setVerticalsOpen(!verticalsOpen)}
                onMouseEnter={() => setVerticalsOpen(true)}
                className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/verticals")
                    ? "text-nxgen-gold bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Business Verticals</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    verticalsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {verticalsOpen && (
                <div
                  onMouseLeave={() => setVerticalsOpen(false)}
                  className="absolute left-0 mt-1 w-80 rounded-xl glass-panel p-2 shadow-2xl border border-white/10 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  {/* Primary Vertical: Fashion */}
                  <Link
                    href="/verticals/fashion-entertainment"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item border border-nxgen-gold/20 bg-nxgen-gold/5"
                  >
                    <div className="p-2 rounded-lg bg-nxgen-gold/20 text-nxgen-gold group-hover/item:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white group-hover/item:text-nxgen-gold transition-colors">
                          Fashion & Entertainment
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-nxgen-gold text-black font-extrabold uppercase">
                          Flagship
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Haute Couture, Miss India Pageants, Films & Tours
                      </p>
                    </div>
                  </Link>

                  {/* Secondary: Food */}
                  <Link
                    href="/verticals/food"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item mt-1"
                  >
                    <div className="p-2 rounded-lg bg-nxgen-crimson/20 text-nxgen-crimson group-hover/item:scale-110 transition-transform">
                      <UtensilsCrossed className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white group-hover/item:text-nxgen-crimson transition-colors">
                          Food & Hospitality
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-medium uppercase">
                          Vertical
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Chilliflakes Café, Suveez Big Bites & Cloudkitchen
                      </p>
                    </div>
                  </Link>

                  {/* Secondary: Education */}
                  <Link
                    href="/verticals/education"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item mt-1"
                  >
                    <div className="p-2 rounded-lg bg-nxgen-blue/20 text-nxgen-blue-light group-hover/item:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white group-hover/item:text-nxgen-blue-light transition-colors">
                          Education & Social Impact
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-medium uppercase">
                          Vertical
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        NXGEN Public School, NIIFPA Academy & NGO
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/about"
                  ? "text-nxgen-gold bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              40-Year Legacy
            </Link>

            <Link
              href="/events"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/events"
                  ? "text-nxgen-gold bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Events & Pageants
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/contact"
                  ? "text-nxgen-gold bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <MagneticButton strength={0.3} className="hidden sm:inline-block">
              <Link
                href="/audition"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-gradient text-black hover:opacity-95 shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Audition 2026</span>
              </Link>
            </MagneticButton>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in fade-in duration-200">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/5 active:bg-white/10 min-h-[44px] flex items-center"
          >
            Home
          </Link>

          <div className="pt-2 border-t border-white/10">
            <div className="px-3 py-1 text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Our Business Verticals
            </div>
            <Link
              href="/verticals/fashion-entertainment"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-nxgen-gold hover:bg-white/5 active:bg-white/10 font-medium min-h-[44px]"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 shrink-0 text-nxgen-gold" />
                <span>Fashion &amp; Entertainment</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-nxgen-gold text-black font-extrabold uppercase">
                FLAGSHIP
              </span>
            </Link>
            <Link
              href="/verticals/food"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/5 active:bg-white/10 min-h-[44px]"
            >
              <UtensilsCrossed className="w-4 h-4 text-nxgen-crimson shrink-0" />
              <span>Food &amp; Hospitality (Chilliflakes / Suveez)</span>
            </Link>
            <Link
              href="/verticals/education"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/5 active:bg-white/10 min-h-[44px]"
            >
              <GraduationCap className="w-4 h-4 text-nxgen-blue-light shrink-0" />
              <span>Education &amp; Social Impact (School &amp; NIIFPA)</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-1">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 active:bg-white/10 min-h-[44px] flex items-center"
            >
              40-Year Legacy &amp; Founder
            </Link>
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 active:bg-white/10 min-h-[44px] flex items-center"
            >
              Events &amp; Pageants
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 active:bg-white/10 min-h-[44px] flex items-center"
            >
              Contact &amp; Inquiries
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/audition"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-gradient text-black font-extrabold text-sm tracking-wider uppercase shadow-gold-glow min-h-[44px] active:scale-95 transition-transform"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Apply for Audition 2026</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
