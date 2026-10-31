import React from "react";
import { PARTNERS } from "@/lib/data";
import SpotlightCard from "@/components/animations/SpotlightCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-nxgen-dark border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-10">
          <span className="text-[11px] font-bold tracking-[0.25em] text-nxgen-gold uppercase">
            TRUSTED COLLABORATORS &amp; ASSOCIATES
          </span>
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-1">
            Associated with Leading National Brands &amp; Production Houses
          </h3>
        </ScrollReveal>

        {/* Brand Grid with Spotlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {PARTNERS.map((partner, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(212, 175, 55, 0.25)"
              className="p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="font-serif-luxury font-bold text-xs sm:text-sm text-gray-200 group-hover:text-nxgen-gold transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                {partner.category}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

