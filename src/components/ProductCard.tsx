"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Check, ChevronDown, ChevronUp, Sparkles, Leaf, Info, X } from "lucide-react";
import { MenuItem, getWhatsAppOrderLink } from "@/config/siteConfig";

interface ProductCardProps {
  product: MenuItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const whatsappUrl = getWhatsAppOrderLink(product.name, product.price);

  return (
    <div className="group relative rounded-3xl bg-[#141414] border border-white/10 hover:border-[#A6D63C]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(166,214,60,0.2)]">
      
      {/* Product Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient dark scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider shadow-md ${
                product.badgeColor || "bg-[#A6D63C] text-black"
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Price Tag in Lime Green */}
        <div className="absolute bottom-3 right-4 z-10">
          <div className="bg-[#080808]/90 backdrop-blur-md border border-[#A6D63C]/30 px-3.5 py-1.5 rounded-2xl flex items-baseline gap-0.5">
            <span className="text-xs text-neutral-400">₹</span>
            <span className="font-[family-name:var(--font-outfit)] font-black text-2xl text-[#A6D63C]">
              {product.price}
            </span>
          </div>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white group-hover:text-[#A6D63C] transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Key Nutrition Highlights preview */}
          <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-neutral-400">
            {product.nutritionHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-1.5 truncate">
                <Check className="w-3.5 h-3.5 text-[#A6D63C] flex-shrink-0" />
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>

          {/* View Details / Ingredients Button */}
          <div className="pt-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                showDetails
                  ? "bg-[#A6D63C]/15 border-[#A6D63C]/50 text-[#A6D63C]"
                  : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-neutral-300 hover:text-white"
              }`}
              aria-expanded={showDetails}
            >
              <span className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-[#A6D63C]" />
                <span>{showDetails ? "Hide Ingredients & Details" : "View Details & Ingredients"}</span>
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono">
                {showDetails ? (
                  <>
                    <span>Close</span>
                    <ChevronUp className="w-4 h-4 text-[#A6D63C]" />
                  </>
                ) : (
                  <>
                    <span className="text-neutral-400">({product.ingredients?.length || 0} items)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Expandable Ingredients Box */}
          {showDetails && (
            <div className="p-4 rounded-2xl bg-[#0d0d0d] border border-[#A6D63C]/30 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A6D63C] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  All Fresh Ingredients ({product.ingredients?.length})
                </span>
                <span className="text-[10px] text-neutral-400">100% Fresh Daily</span>
              </div>

              <ul className="space-y-1.5">
                {product.ingredients?.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A6D63C] mt-1.5 flex-shrink-0" />
                    <span className="leading-tight">{ingredient}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Handmade upon order</span>
                <span className="text-[#D9AE56] font-medium">Zoo Road Stall</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Button: Order on WhatsApp */}
        <div className="pt-4 border-t border-white/5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#A6D63C] hover:bg-[#95C62B] text-black font-bold text-sm py-3.5 px-5 rounded-2xl transition-all duration-300 shadow-[0_4px_15px_rgba(166,214,60,0.25)] hover:shadow-[0_6px_25px_rgba(166,214,60,0.4)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Order Now (₹{product.price})</span>
          </a>
          <p className="text-[11px] text-center text-neutral-500 mt-2">
            Instant WhatsApp confirmation • Pickup at Zoo Road
          </p>
        </div>

      </div>

    </div>
  );
}
