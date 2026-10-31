"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn, X, ChevronRight, ChevronLeft } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/data";
import SpotlightCard from "@/components/animations/SpotlightCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

const CATEGORIES = [
  { id: "all", label: "All Media" },
  { id: "fashion", label: "Fashion & Runway" },
  { id: "pageant", label: "National Pageants" },
  { id: "celebrities", label: "Celebrity Archives" },
  { id: "food", label: "Food & Cafés" },
  { id: "education", label: "Education & NGO" }
];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-nxgen-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nxgen-gold/10 border border-nxgen-gold/30 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL ARCHIVE</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our Historic <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2 font-light">
            Moments etched in time: four decades of glamour, star nights, culinary delights, and educational milestones.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 px-2 max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 min-h-[40px] flex items-center justify-center ${
                  selectedCategory === cat.id
                    ? "bg-nxgen-gold text-black shadow-gold-glow scale-105"
                    : "glass-panel text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <SpotlightCard
              key={item.id}
              onClick={() => openLightbox(index)}
              spotlightColor="rgba(212, 175, 55, 0.35)"
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              contentClassName="h-full w-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-nxgen-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] uppercase font-bold text-nxgen-gold tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif-luxury font-bold text-sm text-white line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-nxgen-gold hover:text-black transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-8 p-2.5 sm:p-3 rounded-full bg-black/60 sm:bg-white/10 text-white hover:bg-nxgen-gold hover:text-black transition-colors z-50 flex items-center justify-center min-w-[40px] min-h-[40px]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-8 p-2.5 sm:p-3 rounded-full bg-black/60 sm:bg-white/10 text-white hover:bg-nxgen-gold hover:text-black transition-colors z-50 flex items-center justify-center min-w-[40px] min-h-[40px]"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-xs uppercase tracking-widest text-nxgen-gold font-bold">
                {currentItem.category}
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-white mt-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg font-light">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
