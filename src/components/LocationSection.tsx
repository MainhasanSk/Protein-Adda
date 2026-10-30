"use client";

import { MapPin, Clock, Navigation, MessageCircle, Phone, Compass, CalendarCheck } from "lucide-react";
import { siteConfig, getWhatsAppOrderLink } from "@/config/siteConfig";

export default function LocationSection() {
  const { location } = siteConfig.contact;

  return (
    <section id="location" className="py-24 bg-[#080808] relative overflow-hidden">
      
      {/* Background glow behind map */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#A6D63C]/6 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#A6D63C] uppercase">
            <Compass className="w-3.5 h-3.5 text-[#A6D63C]" />
            <span>Visit The Morning Stall</span>
          </div>

          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            YOUR HEALTHY <span className="text-[#A6D63C]">MORNING STOP.</span>
          </h2>

          <p className="text-base text-neutral-300 font-normal">
            Start your day right. Join the runners, gym-goers, and morning commuters at our roadside stall on Zoo Road.
          </p>
        </div>

        {/* 2-Column Layout: Location Info on Left, Map Embed on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Information Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#141414] border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-2xl space-y-8">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D9AE56]">
                  Guwahati Flagship Spot
                </span>
                <h3 className="font-[family-name:var(--font-outfit)] text-3xl font-black text-white mt-1">
                  {location.title}
                </h3>
                <p className="text-sm text-[#A6D63C] font-medium mt-1">
                  Zoo Road, Guwahati
                </p>
              </div>

              {/* Address Block */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#A6D63C]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Address & Landmark
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      {location.landmark}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      {location.road}, {location.city}
                    </p>
                  </div>
                </div>

                {/* Operating Hours Block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#A6D63C]/10 border border-[#A6D63C]/30 flex items-center justify-center flex-shrink-0 text-[#A6D63C]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Operating Hours
                    </p>
                    <p className="font-[family-name:var(--font-outfit)] text-lg sm:text-xl font-bold text-[#A6D63C] mt-0.5">
                      {location.operatingHours}
                    </p>
                    <p className="text-xs text-neutral-300">
                      Open daily (All 7 Days) for fresh morning breakfast
                    </p>
                  </div>
                </div>

                {/* Quick Notice */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#D9AE56]">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Service Style
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                      Quick takeaway boxes & on-the-spot breakfast bowls. Pre-ordering on WhatsApp available for instant pickup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Directions + WhatsApp */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={location.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 border border-white/15 hover:border-white/30 text-white font-semibold text-sm py-3.5 px-6 rounded-2xl transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#A6D63C]" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#A6D63C] hover:bg-[#95C62B] text-black font-bold text-sm py-3.5 px-6 rounded-2xl transition-all shadow-[0_0_20px_rgba(166,214,60,0.3)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Contact / Order on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Map Preview / Embed Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#141414] border border-white/10 overflow-hidden shadow-2xl relative flex flex-col min-h-[420px]">
            
            {/* Live Interactive Map Frame */}
            <div className="relative w-full h-full min-h-[420px] flex-1">
              <iframe
                title="Protein Adda Location Map"
                src={location.embedMapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px]"
              />

              {/* Map Floating Location Pin Card */}
              <div className="absolute top-4 left-4 z-10 bg-[#080808]/90 backdrop-blur-md border border-[#A6D63C]/40 p-3.5 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6D63C] animate-ping" />
                  <p className="font-[family-name:var(--font-outfit)] font-bold text-xs text-white">
                    PROTEIN ADDA STALL
                  </p>
                </div>
                <p className="text-[11px] text-neutral-300 mt-1">
                  Opposite AIDC Complex Office, Zoo Road, Guwahati
                </p>
                <a
                  href={location.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-[#A6D63C] font-semibold mt-2 hover:underline"
                >
                  <span>Open in Navigation</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom Bar on Map */}
            <div className="p-4 bg-[#111111] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
              <span className="flex items-center gap-1 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#A6D63C]" />
                Guwahati, Assam
              </span>
              <span>Coordinates & map configurable in siteConfig</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
