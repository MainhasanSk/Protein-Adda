"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { siteConfig, getWhatsAppOrderLink } from "@/config/siteConfig";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Our Journey", href: "#journey" },
    { name: "Contact & Location", href: "#location" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-neutral-400 relative overflow-hidden">
      
      {/* Top subtle lime accent border */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#A6D63C] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#A6D63C]/40 shadow-md">
                <Image
                  src="/brand/protein-adda-logo.jpg"
                  alt="PROTEIN ADDA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-[family-name:var(--font-outfit)] font-black text-2xl tracking-tight text-white">
                  PROTEIN <span className="text-[#A6D63C]">ADDA</span>
                </span>
                <p className="text-xs uppercase tracking-widest text-[#D9AE56] font-semibold">
                  {siteConfig.brand.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm pt-2">
              A healthy food startup founded by Vishal in Guwahati, Assam. Making nutrient-rich breakfast accessible, delicious, and affordable from our Zoo Road stall to the city.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Protein Adda Instagram"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-pink-500 flex items-center justify-center text-white hover:text-pink-400 transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Protein Adda WhatsApp"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-[#A6D63C] flex items-center justify-center text-white hover:text-[#A6D63C] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-[family-name:var(--font-outfit)] text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A6D63C] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-[family-name:var(--font-outfit)] text-sm font-bold uppercase tracking-wider text-white">
              Stall Location & Hours
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A6D63C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Zoo Road, Guwahati, Assam</p>
                  <p className="text-xs text-neutral-400">Opposite AIDC Complex Office</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A6D63C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#A6D63C]">7:00 AM – 11:00 AM</p>
                  <p className="text-xs text-neutral-400">Open Daily • Monday through Sunday</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 hover:bg-[#A6D63C]/10 text-[#A6D63C] border border-white/5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {siteConfig.contact.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            &copy; 2026 Protein Adda. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Real Food. Real Nutrition. Real You.</span>
            <span>•</span>
            <span>Founded with ❤️ by Vishal</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
