"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Clock, MapPin } from "lucide-react";
import { siteConfig, getWhatsAppOrderLink } from "@/config/siteConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Our Journey", href: "#journey" },
    { name: "Location", href: "#location" },
  ];

  return (
    <>
      {/* Top micro-announcement banner */}
      <div className="bg-[#111111] border-b border-white/5 py-2 px-4 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A6D63C] animate-pulse"></span>
            <span className="font-medium text-[#A6D63C]">Serving Now in Guwahati</span>
            <span className="text-neutral-500">•</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#A6D63C]" />
              7:00 AM – 11:00 AM Daily
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-[#A6D63C]" />
            <span>Zoo Road, AIDC Complex Office</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-transparent border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-[#A6D63C]/30 group-hover:border-[#A6D63C] transition-colors shadow-[0_0_15px_-3px_rgba(166,214,60,0.3)]">
              <Image
                src="/brand/protein-adda-logo.jpg"
                alt="PROTEIN ADDA Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-[family-name:var(--font-outfit)] font-black text-xl tracking-tight text-white flex items-center gap-1">
                PROTEIN <span className="text-[#A6D63C]">ADDA</span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-[#D9AE56] font-medium hidden sm:block">
                Real Food • Real Nutrition
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-[#A6D63C] transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A6D63C] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A6D63C] hover:bg-[#95C62B] text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(166,214,60,0.3)] hover:shadow-[0_0_30px_rgba(166,214,60,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-white/10 text-white hover:text-[#A6D63C] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c0c0c] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-[#A6D63C] py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#A6D63C] hover:bg-[#95C62B] text-black font-semibold text-sm px-5 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(166,214,60,0.3)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 text-xs text-neutral-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A6D63C]" />
                Operating: 7:00 AM – 11:00 AM (Daily)
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A6D63C]" />
                Zoo Road, AIDC Complex Office, Guwahati
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
