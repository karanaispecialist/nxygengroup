"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Crown,
  UtensilsCrossed,
  GraduationCap,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function MobileStickyFooter() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
      isFlagship: false,
      isCta: false,
    },
    {
      label: "Fashion",
      href: "/verticals/fashion-entertainment",
      icon: Crown,
      isActive: pathname.includes("/fashion-entertainment"),
      isFlagship: true,
      isCta: false,
    },
    {
      label: "Food",
      href: "/verticals/food",
      icon: UtensilsCrossed,
      isActive: pathname.includes("/food"),
      isFlagship: false,
      isCta: false,
    },
    {
      label: "Education",
      href: "/verticals/education",
      icon: GraduationCap,
      isActive: pathname.includes("/education"),
      isFlagship: false,
      isCta: false,
    },
    {
      label: "Audition",
      href: "/audition",
      icon: Sparkles,
      isActive: pathname === "/audition",
      isFlagship: false,
      isCta: true,
    },
  ];

  return (
    <div
      id="mobile-sticky-footer"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-auto"
    >
      {/* Floating Call Helpline Tab (Thumb-Friendly on the top right of dock) */}
      <div className="flex justify-end px-4 mb-2 pointer-events-none">
        <a
          href="tel:+917805987151"
          aria-label="Direct Helpline Call"
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-nxgen-gold/50 text-nxgen-gold text-[11px] font-bold shadow-gold-glow active:scale-95 transition-transform"
        >
          <PhoneCall className="w-3 h-3 text-nxgen-gold animate-pulse" />
          <span>Call: +91 7805987151</span>
        </a>
      </div>

      {/* Main Glassmorphism Bottom Dock */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="w-full bg-[#08090D]/95 backdrop-blur-2xl border-t border-nxgen-gold/30 shadow-[0_-10px_30px_rgba(0,0,0,0.85)] px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.isCta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center -mt-2 group"
                >
                  <div
                    className={`p-2.5 rounded-full shadow-gold-glow transition-all duration-200 active:scale-90 ${
                      item.isActive
                        ? "bg-nxgen-gold text-black scale-105"
                        : "bg-gold-gradient text-black"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-black animate-spin-slow" />
                  </div>
                  <span className="text-[10px] font-extrabold text-nxgen-gold tracking-wider uppercase mt-1">
                    {item.label}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center py-1 px-1 transition-all duration-200 active:scale-95 ${
                  item.isActive
                    ? "text-nxgen-gold font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Flagship Indicator Dot for Fashion */}
                {item.isFlagship && (
                  <span className="absolute -top-1 px-1 py-0.2 rounded-full bg-nxgen-gold text-[8px] font-black text-black uppercase tracking-tighter shadow-sm">
                    TOP
                  </span>
                )}

                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-transform ${
                      item.isActive ? "scale-110 text-nxgen-gold" : ""
                    }`}
                  />
                  {item.isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-nxgen-gold shadow-gold-glow" />
                  )}
                </div>

                <span
                  className={`text-[10px] mt-1 tracking-tight truncate max-w-full ${
                    item.isActive ? "text-nxgen-gold font-bold" : "text-gray-300 font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

