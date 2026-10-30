"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, ArrowRight, ShieldCheck, Flame, Heart, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#A6D63C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-[#D9AE56]/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#A6D63C]/30 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase shadow-[0_0_15px_-3px_rgba(166,214,60,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#A6D63C] animate-pulse"></span>
              FRESH • HEALTHY • NUTRITIOUS
            </div>

            {/* Main Headline */}
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
              GOOD FOOD. <br />
              FUEL YOUR <br />
              <span className="text-gradient-green drop-shadow-[0_0_35px_rgba(166,214,60,0.35)]">
                BETTER DAYS.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Start your morning with food that fuels your body. Freshly prepared healthy meals, delicious protein-rich bowls and nutritious bites made for your everyday lifestyle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A6D63C] hover:bg-[#95C62B] text-black font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(166,214,60,0.35)] hover:shadow-[0_0_35px_rgba(166,214,60,0.55)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </Link>

              <Link
                href="#location"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-base px-7 py-4 rounded-full border border-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#A6D63C]" />
                <span>Find Us Today</span>
              </Link>
            </div>

            {/* Supporting Micro-Info */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A6D63C]" />
                <span>Healthy mornings start here. Open daily, 7 AM – 11 AM.</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="text-neutral-400">Zoo Road, Guwahati</span>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg mx-auto lg:mx-0 border-t border-white/10">
              <div className="text-left">
                <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-white">₹59</p>
                <p className="text-xs text-neutral-400">Starting Price</p>
              </div>
              <div className="text-left border-x border-white/10 px-3">
                <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-[#A6D63C]">100%</p>
                <p className="text-xs text-neutral-400">Fresh Daily</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-[#D9AE56]">7-11 AM</p>
                <p className="text-xs text-neutral-400">Morning Hours</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Food Photography & Floating Tags */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Food Spotlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A6D63C]/20 via-[#D9AE56]/10 to-transparent rounded-3xl blur-3xl -z-10" />

            {/* Main Food Showcase Card */}
            <div className="relative w-full max-w-[420px] rounded-3xl bg-[#121212] border border-white/10 p-3 sm:p-4 shadow-2xl overflow-visible">
              
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3.8] rounded-2xl overflow-hidden bg-[#181818] border border-white/5">
                <Image
                  src="/brand/hero-bowl.jpg"
                  alt="Protein Adda High Protein Oats Bowl with Berries and Seeds"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Live Badge */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Flame className="w-3.5 h-3.5 text-[#A6D63C]" />
                  <span>High Protein Oats Bowl</span>
                </div>

                {/* Price Tag in Lime Green */}
                <div className="absolute bottom-3 right-3 bg-[#A6D63C] text-black px-3.5 py-1.5 rounded-full font-[family-name:var(--font-outfit)] font-black text-sm shadow-lg">
                  ₹99 ONLY
                </div>
              </div>

              {/* Floating Badge 1: Fresh Ingredients (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#161616]/95 backdrop-blur-md border border-[#A6D63C]/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-bounce duration-1000">
                <div className="w-7 h-7 rounded-full bg-[#A6D63C]/20 flex items-center justify-center text-[#A6D63C]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Fresh Ingredients</p>
                  <p className="text-[10px] text-neutral-400">Real fruits & seeds</p>
                </div>
              </div>

              {/* Floating Badge 2: Nutrition Focused (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#161616]/95 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#D9AE56]/20 flex items-center justify-center text-[#D9AE56]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Nutrition Focused</p>
                  <p className="text-[10px] text-neutral-400">High-protein balance</p>
                </div>
              </div>

              {/* Floating Badge 3: Affordable & Healthy (Middle Left) */}
              <div className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-[#161616]/95 backdrop-blur-md border border-[#85B936]/40 px-3 py-1.5 rounded-full shadow-lg items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#A6D63C] fill-[#A6D63C]" />
                <span className="text-xs font-semibold text-neutral-200">Affordable & Healthy</span>
              </div>

              {/* Sub-card: Live Stall Authenticity Teaser */}
              <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#A6D63C]/50">
                    <Image
                      src="/brand/founder-vishal.jpg"
                      alt="Vishal, Founder of Protein Adda"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Crafted by Vishal</p>
                    <p className="text-[10px] text-neutral-400">Roadside stall to startup</p>
                  </div>
                </div>
                <Link
                  href="#story"
                  className="text-[11px] font-semibold text-[#A6D63C] hover:underline"
                >
                  Read Story &rarr;
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
