"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, FileText, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import ProductCard from "./ProductCard";
import MenuPosterModal from "./MenuPosterModal";

export default function MenuSection() {
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-[#080808] relative">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#A6D63C]/8 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#D9AE56]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#A6D63C]" />
              <span>Signature Morning Menu</span>
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              FUEL YOUR BODY. <br />
              <span className="text-[#A6D63C]">LOVE YOUR FOOD.</span>
            </h2>
            <p className="text-base text-neutral-400 font-normal">
              Explore our delicious and affordable healthy food collection. Handcrafted every morning on Zoo Road.
            </p>
          </div>

          {/* Quick Action: View Authentic Poster */}
          <div>
            <button
              onClick={() => setPosterOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-[#A6D63C]/40 text-sm font-medium text-neutral-200 hover:text-white transition-all cursor-pointer shadow-lg"
            >
              <FileText className="w-4 h-4 text-[#A6D63C]" />
              <span>View Stall Poster</span>
            </button>
          </div>
        </div>

        {/* 3 Signature Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {siteConfig.menu.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Menu Guarantee Banner */}
        <div className="mt-16 rounded-3xl bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#A6D63C]/10 border border-[#A6D63C]/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#A6D63C]" />
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
                100% Honest Nutrition Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400">
                Fresh fruits, no hidden sugars, pure natural honey, and rich source of natural fiber & protein.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#location"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#A6D63C] hover:underline"
            >
              <span>Visit Stall at Zoo Road</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Full Poster Lightbox */}
      <MenuPosterModal isOpen={posterOpen} onClose={() => setPosterOpen(false)} />
    </section>
  );
}
