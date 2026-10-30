"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Quote, MapPin, Target } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/config/siteConfig";

export default function FounderStory() {
  return (
    <section id="story" className="py-24 bg-[#080808] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#A6D63C]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#D9AE56]/6 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Container */}
        <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Portrait Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Backing accent frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#A6D63C]/30 via-transparent to-[#D9AE56]/20 rounded-3xl blur-xl" />

              <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#A6D63C]/40 shadow-2xl bg-[#000]">
                <Image
                  src="/brand/founder-vishal.jpg"
                  alt="Vishal, Founder of Protein Adda"
                  fill
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  priority
                />

                {/* Scrim overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Floating caption on the portrait */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#121212]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
                        Vishal
                      </p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#A6D63C] text-black uppercase">
                        Founder
                      </span>
                    </div>
                    <p className="text-xs text-[#A6D63C] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Zoo Road, Guwahati, Assam
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      Documenting the startup journey day by day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-7">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#A6D63C]" />
                  <span>The Founder&apos;s Story</span>
                </div>

                <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  EVERY BIG DREAM <br />
                  <span className="text-gradient-green">STARTS SOMEWHERE.</span>
                </h2>

                <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-[#D9AE56]">
                  Meet Vishal – The Founder of Protein Adda
                </p>
              </div>

              {/* Exact narrative verbatim */}
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal border-l-2 border-[#A6D63C]/40 pl-5">
                <p>
                  Protein Adda started with a simple idea: making healthy food accessible to everyone.
                </p>
                <p>
                  With determination, passion and a vision to build something meaningful, Vishal started his entrepreneurial journey from a roadside food stall in Guwahati.
                </p>
                <p>
                  Every morning brings new customers, new experiences and new lessons.
                </p>
                <p>
                  What started as a small beginning is now a journey towards building a recognised healthy-food brand.
                </p>
                <p className="font-semibold text-white">
                  This is just the beginning.
                </p>
              </div>

              {/* Bold Statement Highlight */}
              <div className="p-6 rounded-2xl bg-neutral-900/90 border border-[#A6D63C]/30 relative overflow-hidden shadow-lg">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-[#A6D63C] flex-shrink-0 mt-1 opacity-80" />
                  <div>
                    <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-black tracking-wider text-[#A6D63C] uppercase">
                      &ldquo;START SMALL. DREAM BIG. STAY CONSISTENT.&rdquo;
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      — Vishal&apos;s guiding philosophy for Protein Adda
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram Follow CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-95 text-white font-bold text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow Vishal&apos;s Daily Vlogs on Instagram</span>
                </a>

                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm border border-white/10 transition-all cursor-pointer"
                >
                  <span>Explore Daily Timeline</span>
                  <span className="text-[#A6D63C]">&darr;</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
