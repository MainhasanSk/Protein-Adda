"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppOrderLink } from "@/config/siteConfig";

export default function FloatingWhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8">
      <a
        href={getWhatsAppOrderLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#A6D63C] hover:bg-[#95C62B] text-black px-4 py-3 sm:px-5 sm:py-3.5 rounded-full font-bold text-sm shadow-[0_4px_25px_rgba(166,214,60,0.5)] hover:shadow-[0_4px_35px_rgba(166,214,60,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-black" />
        <span className="hidden sm:inline font-extrabold tracking-tight">Quick WhatsApp Order</span>
        <span className="sm:hidden font-extrabold">Order</span>
      </a>
    </aside>
  );
}
