import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  TreePine,
  HeartHandshake,
  BookOpen,
  School,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { VERTICALS, COMPANY_INFO } from "@/lib/data";

export default function EducationVerticalPage() {
  const education = VERTICALS.education;

  return (
    <div className="bg-nxgen-dark text-white pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={education.heroImage}
            alt="NXGEN Public School Building"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-nxgen-dark via-nxgen-dark/85 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nxgen-blue/20 border border-nxgen-blue/50 text-nxgen-blue-light text-xs font-bold uppercase tracking-widest mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>SECONDARY BUSINESS VERTICAL</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Education &amp; <span className="text-nxgen-blue-light">Social Impact</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed mb-8">
            {education.fullDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/contact?vertical=admissions"
              className="px-7 py-3.5 rounded-full bg-nxgen-blue text-white font-bold text-xs uppercase tracking-wider hover:bg-nxgen-blue-dark transition-all"
            >
              School Admissions 2026-27
            </Link>
            <Link
              href="#ngo"
              className="px-6 py-3.5 rounded-full glass-panel border border-white/20 text-white font-medium text-xs hover:border-nxgen-blue-light transition-colors"
            >
              Our NGO &amp; Plantation Drives
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Specialized Educational Entities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-nxgen-blue-light uppercase tracking-widest">
            INSTITUTIONAL NETWORK
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-1">
            Our Schools &amp; Academies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {education.divisions.map((div, idx) => (
            <div
              key={idx}
              className="group rounded-3xl glass-panel border border-white/10 hover:border-nxgen-blue/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <Image
                    src={div.image}
                    alt={div.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-nxgen-blue-light text-xs font-extrabold border border-nxgen-blue/40">
                    {div.code}
                  </div>
                </div>

                <h3 className="font-serif-luxury font-bold text-2xl text-white mb-2 group-hover:text-nxgen-blue-light transition-colors">
                  {div.name}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                  {div.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {div.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-nxgen-blue-light shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400">Head Office: Bag Mugaliya, Bhopal</span>
                <span className="text-nxgen-blue-light font-semibold">Verified Center</span>
              </div>
            </div>
          ))}
        </div>

        {/* District Collector Award Feature Split */}
        <div className="rounded-3xl glass-panel border border-nxgen-gold/30 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/cleanliness-award.jpeg"
              alt="Cleanliness Drive Award from District Collector"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nxgen-gold/20 text-nxgen-gold text-xs font-bold uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>OFFICIAL CIVIC RECOGNITION</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-3">
              Best Cleanliness Drive Award
            </h3>
            <div className="text-xs text-nxgen-gold font-medium mb-3">
              Felicitated by District Collector Sir
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
              In acknowledgment of our rigorous sanitation campaigns, campus hygiene standards, and student-driven civic clean-up initiatives, NXGEN Public School was awarded the coveted Cleanliness Trophy by the District Collector.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nxgen-gold" />
                100% Eco-Sanitary Standards
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nxgen-gold" />
                Swachh Bharat Participant
              </span>
            </div>
          </div>
        </div>

        {/* NGO & Plantation Drives Deep Dive */}
        <div id="ngo" className="rounded-3xl bg-gradient-to-r from-nxgen-dark via-nxgen-card to-nxgen-dark border border-white/10 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase mb-4">
              <TreePine className="w-3.5 h-3.5" />
              <span>NPSCES NGO INITIATIVES</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-4">
              Save Environment &amp; Community Upliftment
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light mb-8">
              Under our NGO society (NPSCES), our students and volunteers regularly conduct massive sapling plantation drives across Bhopal, organize health &amp; AIDS awareness rallies, and support girl-child literacy for impoverished households.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-8">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <HeartHandshake className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Free BPL Education</h4>
                <p className="text-xs text-gray-400 font-light">Subsidizing education &amp; supplies for underprivileged students.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <TreePine className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Plantation Drives</h4>
                <p className="text-xs text-gray-400 font-light">Thousands of saplings planted by our school students annually.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Users className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Health &amp; Awareness</h4>
                <p className="text-xs text-gray-400 font-light">Active workshops on AIDS awareness, hygiene, and wellness.</p>
              </div>
            </div>

            <Link
              href="/contact?vertical=education"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              <span>Partner With Our NGO Society</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Back Link */}
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

