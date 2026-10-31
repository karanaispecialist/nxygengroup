"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Clock,
  MessageSquare
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { triggerGoldConfetti } from "@/lib/confetti";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    category: "Fashion & Pageant Auditions",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    triggerGoldConfetti();
  };

  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-gold/20 border border-nxgen-gold/50 text-nxgen-gold text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT GROUP COMMUNICATIONS</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Contact <span className="text-gold-gradient">NXGEN PEOPLE</span>
          </h1>

          <p className="text-gray-300 text-base max-w-2xl mx-auto font-light">
            Headquartered in Bhopal, operating nationally across Fashion &amp; Showbiz, Gourmet Hospitality, and Value-Driven Education.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl glass-panel gold-border space-y-6">
              <h2 className="font-serif-luxury text-2xl font-bold text-white border-b border-white/10 pb-4">
                Head Office &amp; Secretariat
              </h2>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-nxgen-gold/15 text-nxgen-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                      Address
                    </div>
                    <div className="leading-relaxed">
                      {COMPANY_INFO.headOffice.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-nxgen-gold/15 text-nxgen-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                      Direct Mobile / WhatsApp
                    </div>
                    <div className="space-y-1">
                      {COMPANY_INFO.headOffice.phones.map((p, i) => (
                        <div key={i}>
                          <a href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-nxgen-gold transition-colors font-medium">
                            {p}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-nxgen-gold/15 text-nxgen-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                      Official Inquiries
                    </div>
                    <div className="space-y-1">
                      {COMPANY_INFO.headOffice.emails.map((e, i) => (
                        <div key={i}>
                          <a href={`mailto:${e}`} className="hover:text-nxgen-gold transition-colors">
                            {e}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-nxgen-gold/15 text-nxgen-gold shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                      Operating Hours
                    </div>
                    <div>Monday – Saturday: 10:00 AM – 7:30 PM</div>
                    <div className="text-xs text-gray-400">Emergency &amp; Audition hotline active 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Department Routing Box */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
              <h3 className="font-serif-luxury font-bold text-base text-white">
                Vertical Specific Contacts:
              </h3>
              <div className="space-y-2 text-xs text-gray-300">
                <div>
                  <strong className="text-nxgen-gold">Fashion &amp; Pageants:</strong> Contact Vicky Da &amp; Audition Team
                </div>
                <div>
                  <strong className="text-nxgen-crimson">Chilliflakes Café &amp; Food:</strong> Franchise Desk
                </div>
                <div>
                  <strong className="text-nxgen-blue-light">NXGEN Public School:</strong> Principal &amp; Admissions Office
                </div>
                <div>
                  <strong className="text-emerald-400">NPSCES NGO Society:</strong> General Secretary
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel gold-border">
              {formSubmitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    Thank You, Message Received!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                    Your inquiry has been routed to the relevant division at NXGEN PEOPLE&apos;S GROUP. Our secretariat will reach out to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        city: "",
                        category: "Fashion & Pageant Auditions",
                        message: ""
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                      Send an Official Inquiry
                    </h2>
                    <p className="text-xs text-gray-400 font-light">
                      Please select your topic of interest so we can direct your request to the right department.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        City &amp; State
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bhopal, M.P."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                      Business Vertical / Subject *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-nxgen-card border border-white/10 text-white text-base sm:text-sm min-h-[48px] focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                    >
                      <option value="Fashion & Pageant Auditions">Fashion &amp; Pageant Auditions (Miss India 2026)</option>
                      <option value="Films & TV Productions Casting">Films &amp; TV Productions Casting (NFTP)</option>
                      <option value="The Khadi Beauty Pageant">The Khadi Beauty Pageant (Bhopal Haat)</option>
                      <option value="Food & Cloudkitchen Franchise">Food &amp; Cloudkitchen Franchise (Chilliflakes / Suveez)</option>
                      <option value="NXGEN Public School Admissions">NXGEN Public School Admissions</option>
                      <option value="NIIFPA Academy Enrollment">NIIFPA Fashion &amp; Performing Arts Enrollment</option>
                      <option value="NPSCES NGO & Plantation Drives">NPSCES NGO &amp; Social Initiatives</option>
                      <option value="Brand Sponsorship & Corporate Alliance">Brand Sponsorship &amp; Corporate Alliance</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                      Your Message / Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your request, questions, or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-base sm:text-sm focus:border-nxgen-gold focus:outline-none focus:ring-1 focus:ring-nxgen-gold transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Submit Inquiry</span>
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
