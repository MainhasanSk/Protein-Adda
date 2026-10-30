"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, MessageCircle, Clock } from "lucide-react";
import { getWhatsAppOrderLink } from "@/config/siteConfig";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Background Food Image & Gradient Overlay */}
        <div className="relative rounded-3xl overflow-hidden border border-[#A6D63C]/30 shadow-[0_0_50px_-15px_rgba(166,214,60,0.25)] bg-[#121212]">
          
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/brand/bowl-fresh-prep.jpg"
              alt="Protein Adda Oats Bowl and Ingredients"
              fill
              className="object-cover object-center opacity-25 scale-105"
            />
            {/* Deep rich dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-[#080808]/90 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Floating glowing green orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A6D63C]/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#A6D63C]/40 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Make The Change Tomorrow Morning</span>
            </div>

            <h2 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08]">
              YOUR BODY <br />
              <span className="text-gradient-green">DESERVES BETTER.</span>
            </h2>

            <p className="text-base sm:text-xl text-neutral-200 leading-relaxed font-normal max-w-xl">
              Make healthier choices. Enjoy delicious food. Start your morning with Protein Adda.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-[#A6D63C] hover:bg-[#95C62B] text-black font-extrabold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(166,214,60,0.4)] hover:shadow-[0_0_35px_rgba(166,214,60,0.6)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </Link>

              <Link
                href="#location"
                className="inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-neutral-900 border border-white/20 hover:border-white/40 text-white font-semibold text-base px-7 py-4 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#A6D63C]" />
                <span>Visit Protein Adda</span>
              </Link>
            </div>

            {/* Operating details line */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-300">
              <span className="flex items-center gap-1.5 text-[#A6D63C]">
                <Clock className="w-4 h-4" />
                Open 7:00 AM – 11:00 AM Daily
              </span>
              <span className="text-neutral-500">•</span>
              <span>Zoo Road, Guwahati</span>
              <span className="text-neutral-500">•</span>
              <span className="text-[#D9AE56]">Starting at just ₹59</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
