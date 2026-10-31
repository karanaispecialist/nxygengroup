import React from "react";
import HeroSection from "@/components/HeroSection";
import FashionShowcase from "@/components/FashionShowcase";
import MissIndiaBanner from "@/components/MissIndiaBanner";
import KhadiPageantShowcase from "@/components/KhadiPageantShowcase";
import SecondaryVerticalsSection from "@/components/SecondaryVerticalsSection";
import PhotoGallery from "@/components/PhotoGallery";
import FounderSpotlight from "@/components/FounderSpotlight";
import PartnersMarquee from "@/components/PartnersMarquee";
import AuditionCTA from "@/components/AuditionCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Grand Haute Couture Hero Carousel */}
      <HeroSection />

      {/* 2. Primary Flagship Vertical: Fashion & Entertainment */}
      <FashionShowcase />

      {/* 3. National Pageant Spotlight: NXGEN Miss India 2026 */}
      <MissIndiaBanner />

      {/* 4. Cultural Runway: The Khadi Beauty Pageant & Modern Khadi Collection */}
      <KhadiPageantShowcase />

      {/* 5. Supporting Business Verticals: Food & Education */}
      <SecondaryVerticalsSection />

      {/* 6. Visual Media Archive with Real Historic Photographs */}
      <PhotoGallery />

      {/* 7. Founder & Chairman Spotlight: Vicky Da */}
      <FounderSpotlight />

      {/* 8. Prestigious Corporate Partners & Production Associates */}
      <PartnersMarquee />

      {/* 9. Audition Registration & Contact CTA */}
      <AuditionCTA />
    </>
  );
}

