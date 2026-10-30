"use client";

import Image from "next/image";
import { Play, ArrowUpRight, Film, Sparkles, Calendar } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/config/siteConfig";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A6D63C]/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
            <Film className="w-3.5 h-3.5 text-[#A6D63C]" />
            <span>Startup Documentary Series</span>
          </div>

          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            BUILDING A DREAM. <br />
            <span className="text-[#A6D63C]">ONE DAY AT A TIME.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            From the first day of starting a roadside food business to building a recognised brand, follow our journey.
          </p>

          <p className="text-xs text-neutral-400">
            Vishal documents the daily hustle, recipes, morning customers, and startup lessons live on Instagram.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {siteConfig.journey.map((item, index) => (
            <div
              key={item.day}
              className="rounded-3xl bg-[#141414] border border-white/10 hover:border-[#A6D63C]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(166,214,60,0.18)]"
            >
              <div>
                {/* Video Card Preview / Thumbnail */}
                <div className="relative aspect-[9/12] w-full overflow-hidden bg-black">
                  <Image
                    src={item.thumbnail}
                    alt={`${item.day} - ${item.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-black/20" />

                  {/* Top Badge: Day Number */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="bg-[#A6D63C] text-black font-[family-name:var(--font-outfit)] font-black text-xs px-3 py-1 rounded-full shadow-lg">
                      {item.day}
                    </span>
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10">
                      {item.dateTag}
                    </span>
                  </div>

                  {/* Play Reel Overlay Button */}
                  <a
                    href={item.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                    aria-label={`Watch ${item.day} on Instagram`}
                  >
                    <div className="w-14 h-14 rounded-full bg-black/60 group-hover/btn:bg-[#A6D63C] backdrop-blur-md border border-white/20 group-hover/btn:border-[#A6D63C] flex items-center justify-center transition-all duration-300 shadow-xl group-hover/btn:scale-110">
                      <Play className="w-6 h-6 text-white group-hover/btn:text-black fill-white group-hover/btn:fill-black ml-1 transition-colors" />
                    </div>
                  </a>

                  {/* Highlight pill */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="bg-neutral-900/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-[11px] text-[#A6D63C] font-medium flex items-center gap-1.5 truncate">
                      <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{item.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Text Description */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white group-hover:text-[#A6D63C] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Watch on Instagram link */}
              <div className="p-5 pt-0">
                <a
                  href={item.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#A6D63C]/10 hover:text-[#A6D63C] text-neutral-300 border border-white/5 transition-all group-hover:border-[#A6D63C]/30"
                >
                  <span className="flex items-center gap-1.5">
                    <InstagramIcon className="w-3.5 h-3.5 text-[#A6D63C]" />
                    Watch on Instagram
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA for Journey Section */}
        <div className="mt-16 text-center">
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(219,39,119,0.3)] hover:shadow-[0_0_40px_rgba(219,39,119,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>FOLLOW OUR JOURNEY ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-neutral-400 mt-3 font-mono">
            {siteConfig.contact.instagramHandle} • Daily videos from Zoo Road
          </p>
        </div>

      </div>
    </section>
  );
}
