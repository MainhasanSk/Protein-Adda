"use client";

import { Leaf, Dumbbell, HeartHandshake, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function BrandIntro() {
  const iconMap = {
    Leaf: Leaf,
    Dumbbell: Dumbbell,
    HeartHandshake: HeartHandshake,
  };

  return (
    <section id="about" className="py-20 bg-[#0C0C0C] relative border-y border-white/5 overflow-hidden">
      {/* Background soft ambient highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A6D63C]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
            <span>Our Philosophy</span>
          </div>

          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            HEALTHY EATING. <span className="text-[#A6D63C]">MADE SIMPLE.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            We believe eating healthy shouldn&apos;t be expensive or complicated. At Protein Adda, we bring together taste, nutrition and affordability to make your mornings better.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {siteConfig.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Leaf;

            return (
              <div
                key={feature.title}
                className="group relative rounded-3xl bg-[#141414] border border-white/10 hover:border-[#A6D63C]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(166,214,60,0.15)] flex flex-col justify-between"
              >
                {/* Glow pill behind icon */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#1d1d1d] group-hover:bg-[#A6D63C]/10 border border-white/10 group-hover:border-[#A6D63C]/30 flex items-center justify-center transition-colors">
                      <IconComponent className="w-7 h-7 text-[#A6D63C] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 text-neutral-400 group-hover:text-[#A6D63C] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight text-white group-hover:text-[#A6D63C] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-2.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-[#A6D63C]" />
                  <span>{feature.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
