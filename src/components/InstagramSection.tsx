"use client";

import Image from "next/image";
import { ArrowUpRight, Flame, Heart, Play } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/config/siteConfig";

export default function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: "/brand/founder-vishal.jpg",
      tag: "Founder Hustle",
      caption: "Day by day building Protein Adda on Zoo Road. Consistency is everything.",
      type: "Reel"
    },
    {
      id: 2,
      image: "/brand/high-protein-oats-bowl.jpg",
      tag: "Fresh Oats Bowl",
      caption: "High Protein Oats Bowl loaded with berries, peanut butter & seeds for morning power.",
      type: "Post"
    },
    {
      id: 3,
      image: "/brand/bowl-fresh-prep.jpg",
      tag: "Stall Prep",
      caption: "6:45 AM morning prep with fresh fruits and Dabur honey. Guwahati mornings!",
      type: "Behind The Scenes"
    },
    {
      id: 4,
      image: "/brand/healthy-sandwich.jpg",
      tag: "Healthy Sandwich",
      caption: "Seeded multigrain toast with fresh crunch and protein-rich paneer. Starting ₹59.",
      type: "Post"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-pink-400 uppercase">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Official Instagram Community</span>
            </div>

            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              FOLLOW THE JOURNEY. <br />
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
                BE PART OF THE GROWTH.
              </span>
            </h2>

            <p className="text-base text-neutral-300 font-normal">
              Follow Vishal as he shares daily raw, unfiltered entrepreneurship videos, morning stall prep, and healthy breakfast bowls.
            </p>
          </div>

          <div>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{siteConfig.contact.instagramHandle}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Real Brand Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {posts.map((post) => (
            <a
              key={post.id}
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-[#141414] border border-white/10 hover:border-pink-500/40 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-black">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>

                {/* Center Hover InstagramIcon Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                  {post.caption}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-pink-400 font-medium">
                  <span>View on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Profile Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500">
              <Image
                src="/brand/founder-vishal.jpg"
                alt="Protein Adda Instagram Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">PROTEIN ADDA (@proteinadda2026)</p>
              <p className="text-xs text-neutral-400">Guwahati, Assam • Daily Startup Hustle Series</p>
            </div>
          </div>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#A6D63C] hover:underline flex items-center gap-1"
          >
            <span>Follow Day-by-Day Journey</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
