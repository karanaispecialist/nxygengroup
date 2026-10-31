"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  Sparkles,
  Camera,
  Star,
  CheckCircle2,
  Calendar,
  MapPin,
  Send,
  HelpCircle
} from "lucide-react";
import { triggerAuditionCelebration } from "@/lib/confetti";

export default function AuditionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Female",
    age: "",
    height: "",
    mobile: "",
    email: "",
    city: "",
    state: "Madhya Pradesh",
    instagram: "",
    targetContest: "NXGEN Miss India 2026",
    priorExperience: "Beginner / Fresh Talent",
    portfolioUrl: "",
    bio: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    triggerAuditionCelebration();
  };

  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/pageant-grand-stage.jpeg"
            alt="Pageant Runway"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-nxgen-dark via-nxgen-dark/85 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-4 shadow-gold-glow">
            <Crown className="w-3.5 h-3.5" />
            <span>OFFICIAL NATIONAL AUDITIONS 2026</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Model &amp; Talent <span className="text-gold-gradient">Casting Portal</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Apply now for NXGEN Miss India 2026, The Khadi Beauty Pageant, and upcoming cinematic productions by NFTP.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Audition Rules & Guidelines (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl glass-panel gold-border space-y-4">
              <h3 className="font-serif-luxury text-xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Crown className="w-5 h-5 text-nxgen-gold" />
                <span>Eligibility Guide</span>
              </h3>

              <div className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Miss India 2026:</strong>
                  Female contestants aged 17 – 27 years. Minimum height 5&apos;3&quot; preferred. Unmarried.
                </div>
                <div>
                  <strong className="text-white block font-semibold mb-0.5">The Khadi Pageant:</strong>
                  Male and female categories (Miss &amp; Mr. Khadi). All Indian citizens eligible.
                </div>
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Screen &amp; TV Casting:</strong>
                  All age groups eligible for NFTP character and lead auditions.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
              <h4 className="font-serif-luxury font-bold text-sm text-nxgen-gold">
                Audition Rounds Breakdown:
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-nxgen-gold font-bold">1.</span> Online Screening &amp; Portfolio Review
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nxgen-gold font-bold">2.</span> Offline State Auditions &amp; Ramp Walk
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nxgen-gold font-bold">3.</span> Personality Interview &amp; Camera Poise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nxgen-gold font-bold">4.</span> Semi-Final Grooming at 5* Luxury Resort
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-400">
              <div className="flex items-center gap-2 text-nxgen-gold font-bold mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Questions?</span>
              </div>
              <p>Contact Audition Helpline:</p>
              <a href="tel:+917805987151" className="text-white font-semibold hover:underline block mt-0.5">
                +91 7805987151 / +91 9827217552
              </a>
            </div>
          </div>

          {/* Registration Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel gold-border">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-nxgen-gold/20 text-nxgen-gold border border-nxgen-gold/50 flex items-center justify-center mx-auto shadow-gold-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your audition entry for <strong className="text-nxgen-gold">{formData.targetContest}</strong> has been received by our casting jury.
                  </p>
                  <p className="text-xs text-gray-400">
                    Our team will review your profile and contact you via WhatsApp (+91 {formData.mobile}) with your Stage I audition slot.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                      Candidate Audition Registration
                    </h2>
                    <p className="text-xs text-gray-400 font-light">
                      Fill out your details accurately. Shortlisted candidates will be invited for screen tests and the semi-final bootcamp.
                    </p>
                  </div>

                  {/* Contest Choice */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                      Select Competition / Casting Call *
                    </label>
                    <select
                      value={formData.targetContest}
                      onChange={(e) => setFormData({ ...formData, targetContest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-nxgen-card border border-white/10 text-white text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                    >
                      <option value="NXGEN Miss India 2026">NXGEN Miss India 2026 (Grand National Pageant)</option>
                      <option value="The Khadi Beauty Pageant (Miss Khadi)">The Khadi Beauty Pageant (Miss Khadi)</option>
                      <option value="The Khadi Beauty Pageant (Mr. Khadi)">The Khadi Beauty Pageant (Mr. Khadi)</option>
                      <option value="Films & TV Productions Casting (NFTP)">Films &amp; TV Productions Lead/Supporting Roles</option>
                      <option value="Runway Model Agency Roster">Runway Model Agency Roster (NA Apparels)</option>
                    </select>
                  </div>

                  {/* Name and Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Priya Sen"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Gender *
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-nxgen-card border border-white/10 text-white text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Age & Height */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Age (Years) *
                      </label>
                      <input
                        type="number"
                        required
                        min="16"
                        max="35"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 21"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Height (e.g. 5&apos;7&quot; or cm) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        placeholder="e.g. 5'7''"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* City & State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Current City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bhopal"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Madhya Pradesh"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Instagram / Social Profile & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Instagram Profile Handle
                      </label>
                      <input
                        type="text"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        placeholder="@yourhandle"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Experience Level
                      </label>
                      <select
                        value={formData.priorExperience}
                        onChange={(e) => setFormData({ ...formData, priorExperience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-nxgen-card border border-white/10 text-white text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                      >
                        <option value="Beginner / Fresh Talent">Beginner / Fresh Talent (No prior experience)</option>
                        <option value="Some Pageant / College Fashion Walk">Some Pageant / College Fashion Walk</option>
                        <option value="Professional Model (Runway/Print)">Professional Model (Runway/Print)</option>
                        <option value="Theatre / Acting Background">Theatre / Acting Background</option>
                      </select>
                    </div>
                  </div>

                  {/* Portfolio URL / Drive link */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                      Portfolio / Photos Google Drive Link (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://drive.google.com/... or Instagram link"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none"
                    />
                  </div>

                  {/* Short Bio */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                      Tell Us About Yourself &amp; Why You Wish to Compete
                    </label>
                    <textarea
                      rows={3}
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      placeholder="Share your passions, talents, aspirations, and why you represent the spirit of NXGEN..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm focus:border-nxgen-gold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Star className="w-4 h-4 text-black" />
                    <span>Submit Audition Registration</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
