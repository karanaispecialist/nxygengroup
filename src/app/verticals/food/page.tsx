import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Coffee,
  Store,
  Pizza,
  PartyPopper,
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  MapPin
} from "lucide-react";
import { VERTICALS, COMPANY_INFO } from "@/lib/data";

export default function FoodVerticalPage() {
  const food = VERTICALS.food;

  const menuHighlights = [
    {
      category: "Signature Big Bites",
      items: [
        { name: "Monster Double Cheese Burger", desc: "Crisp seasoned patty, double melted cheddar, secret house sauce", price: "₹149" },
        { name: "Peri-Peri Paneer Deluxe", desc: "Spiced cottage cheese slab, crispy onion rings, chipotle mayo", price: "₹129" },
        { name: "Crunchy Veggie Supreme", desc: "Golden fried garden vegetable patty with lettuce & pickles", price: "₹99" }
      ]
    },
    {
      category: "Stone-Fired Pizzas",
      items: [
        { name: "Chilliflakes Spicy Inferno", desc: "Red chili flakes, jalapeños, paprika, mozzarella & basil", price: "₹249" },
        { name: "Farmhouse Fresh Veggie", desc: "Bell peppers, crisp sweet corn, black olives, red onions", price: "₹219" },
        { name: "Classic Margherita Royale", desc: "San Marzano sauce, fresh mozzarella, extra virgin olive oil", price: "₹189" }
      ]
    },
    {
      category: "Shakes & Chillers",
      items: [
        { name: "Oreo Mudslide Shake", desc: "Crushed Oreo cookies, vanilla bean ice cream, chocolate drizzle", price: "₹119" },
        { name: "Belgian Chocolate Blast", desc: "Dark chocolate ganache, whipped cream, choco chips", price: "₹129" },
        { name: "Blue Lagoon Mocktail", desc: "Sparkling blue curaçao, mint leaves, lemon twist & soda", price: "₹99" }
      ]
    }
  ];

  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={food.heroImage}
            alt="Chilliflakes Cafe Exterior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-nxgen-dark via-nxgen-dark/85 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-crimson/20 border border-nxgen-crimson/50 text-nxgen-crimson-light text-xs font-bold uppercase tracking-widest mb-6">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>SECONDARY BUSINESS VERTICAL</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Food &amp; <span className="text-nxgen-crimson-light">Hospitality</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed mb-8">
            {food.fullDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="#menu"
              className="px-7 py-3.5 rounded-full bg-nxgen-crimson text-white font-bold text-xs uppercase tracking-wider hover:bg-nxgen-crimson-dark transition-all"
            >
              Explore Menu Highlights
            </Link>
            <Link
              href="/contact?vertical=food"
              className="px-6 py-3.5 rounded-full glass-panel border border-white/20 text-white font-medium text-xs hover:border-nxgen-crimson transition-colors"
            >
              Franchise &amp; Cloud Kitchen Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Food Divisions */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-nxgen-crimson uppercase tracking-widest">
            CULINARY BRANDS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
            Our Hospitality Network
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {food.divisions.map((div, idx) => (
            <div
              key={idx}
              className="group rounded-3xl glass-panel border border-white/10 hover:border-nxgen-crimson/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src={div.image}
                    alt={div.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 text-nxgen-crimson text-[11px] font-extrabold border border-nxgen-crimson/40">
                    {div.code}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Store className="w-5 h-5 text-nxgen-crimson" />
                  <h3 className="font-serif-luxury font-bold text-xl text-white">
                    {div.name}
                  </h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                  {div.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {div.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[12px] text-gray-400 flex items-start gap-2">
                      <span className="text-nxgen-crimson font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
                <span>Campus / Cloud Kitchen Model</span>
                <span className="text-nxgen-crimson-light font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Split: Chilliflakes Party Lounge */}
        <div className="rounded-3xl glass-panel border border-nxgen-crimson/30 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/chilliflakes-lounge.jpeg"
              alt="Chilliflakes Party Lounge"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nxgen-crimson/20 text-nxgen-crimson text-xs font-bold uppercase mb-3">
              <PartyPopper className="w-3.5 h-3.5" />
              <span>YOUTH &amp; PARTY DESTINATION</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-3">
              Celebrate in Style at Cafestron Chilliflakes
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
              Equipped with private celebration seating, colorful balloon murals, mood lighting, and surround audio, Chilliflakes is the preferred celebration spot for birthdays, college reunions, and milestone gatherings in Bhopal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+917805987151"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nxgen-crimson text-white text-xs font-bold uppercase tracking-wider hover:bg-nxgen-crimson-dark transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Book Lounge: +91 7805987151</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-white/20 text-white text-xs font-semibold hover:border-nxgen-crimson transition-colors"
              >
                <span>Party Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Menu Highlights Section */}
        <div id="menu" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-nxgen-crimson uppercase tracking-widest">
              CURATED TASTES
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
              Popular Menu Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((section, sIdx) => (
              <div key={sIdx} className="rounded-2xl glass-panel p-6 border border-white/10">
                <h3 className="font-serif-luxury font-bold text-lg text-nxgen-crimson-light mb-4 pb-2 border-b border-white/10">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-start gap-4">
                      <div>
                        <div className="font-semibold text-sm text-white">{item.name}</div>
                        <div className="text-[11px] text-gray-400 font-light mt-0.5">{item.desc}</div>
                      </div>
                      <span className="text-xs font-bold text-nxgen-gold shrink-0 bg-white/5 px-2 py-1 rounded">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home or explore others */}
        <div className="text-center pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-xs font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            ← Back to NXGEN PEOPLE Group Home
          </Link>
        </div>
      </section>
    </div>
  );
}

