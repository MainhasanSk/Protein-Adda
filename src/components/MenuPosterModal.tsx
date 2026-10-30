"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, Download, ExternalLink } from "lucide-react";

interface MenuPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuPosterModal({ isOpen, onClose }: MenuPosterModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 max-w-2xl w-full max-h-[90vh] bg-[#141414] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:px-6 sm:py-4 border-b border-white/10 flex items-center justify-between bg-[#191919]">
          <div>
            <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">
              Official Protein Adda Menu Poster
            </h3>
            <p className="text-xs text-neutral-400">Authentic stall poster from Zoo Road, Guwahati</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Poster Image Container */}
        <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-[480px] aspect-[682/1024] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/brand/menu-poster.jpg"
              alt="Protein Adda Official Menu Poster"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#161616] flex items-center justify-between text-xs text-neutral-300">
          <span className="flex items-center gap-1.5 text-[#A6D63C]">
            <ZoomIn className="w-4 h-4" />
            High Resolution Poster
          </span>
          <a
            href="/brand/menu-poster.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-[#A6D63C] transition-colors"
          >
            <span>Open Original Image</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
