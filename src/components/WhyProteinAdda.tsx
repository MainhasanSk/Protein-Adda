"use client";

import Image from "next/image";
import { Wallet, Flame, Sparkles, Clock, CheckCircle2, Award } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function WhyProteinAdda() {
  const benefitIcons = {
    Wallet: Wallet,
    Flame: Flame,
    Sparkles: Sparkles,
    Clock: Clock,
  };

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      
      {/* Subtle green ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#A6D63C]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
            <span>The Protein Adda Advantage</span>
          </div>

          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            NOT JUST FOOD. <br />
            <span className="text-gradient-green">A BETTER LIFESTYLE.</span>
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed">
            We don&apos;t just serve breakfast bowls; we fuel morning gym sessions, office commutes, and daily health goals across Guwahati with accessible nutrition.
          </p>
        </div>

        {/* Dynamic Bento-Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Card with Live Stall Fresh Bowl Prep */}
          <div className="lg:col-span-5 rounded-3xl bg-[#121212] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative shadow-2xl">
            <div className="space-y-4 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#A6D63C]">
                <Award className="w-3.5 h-3.5" />
                <span>Daily Stall Craftsmanship</span>
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white">
                Freshly Handcrafted on Zoo Road Every Morning
              </h3>
              <p className="text-sm text-neutral-400">
                Witness real ingredients, crisp fruit cuts, and clean preparations prepared right in front of you.
              </p>
            </div>

            {/* Photo container */}
            <div className="relative aspect-[4/3.2] w-full rounded-2xl overflow-hidden mt-6 border border-white/10 shadow-lg">
              <Image
                src="/brand/bowl-fresh-prep.jpg"
                alt="Fresh Oats Bowl Preparation with Honey and Pomegranate at Protein Adda"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center justify-between">
                <span>Real Stall Preparation</span>
                <span className="text-[#A6D63C] font-semibold">Zoo Road, Guwahati</span>
              </div>
            </div>

            {/* Quick check pill */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A6D63C]" />
                Fresh Fruits & Nuts Daily
              </span>
              <span className="text-[#D9AE56] font-semibold">From ₹59</span>
            </div>
          </div>

          {/* Right Column: 4 Distinct Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons] || Sparkles;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl bg-[#141414] border border-white/10 hover:border-[#A6D63C]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(166,214,60,0.12)] group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#1e1e1e] group-hover:bg-[#A6D63C]/10 border border-white/10 group-hover:border-[#A6D63C]/30 flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6 text-[#A6D63C]" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-[#A6D63C] border border-white/5">
                        {benefit.metric}
                      </span>
                    </div>

                    <h4 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-white group-hover:text-[#A6D63C] transition-colors">
                      {benefit.title}
                    </h4>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A6D63C]"></span>
                    <span>Designed for Guwahati&apos;s morning routine</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
