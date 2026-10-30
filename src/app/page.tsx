import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import MenuSection from "@/components/MenuSection";
import WhyProteinAdda from "@/components/WhyProteinAdda";
import FounderStory from "@/components/FounderStory";
import JourneyTimeline from "@/components/JourneyTimeline";
import LocationSection from "@/components/LocationSection";
import InstagramSection from "@/components/InstagramSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F2E9] selection:bg-[#A6D63C] selection:text-black">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Brand Introduction (Healthy Eating. Made Simple.) */}
        <BrandIntro />

        {/* 4. Signature Menu (High Protein Oats Bowl, Classic Oats Bowl, Healthy Sandwich) */}
        <MenuSection />

        {/* 5. Why Protein Adda? (Affordable, Fresh, Nutrition-Focused, Morning Convenience) */}
        <WhyProteinAdda />

        {/* 6. The Founder's Story (Vishal's Journey from Roadside Stall) */}
        <FounderStory />

        {/* 7. Startup Documentary Journey (Day 1 to Day Infinity Timeline) */}
        <JourneyTimeline />

        {/* 8. Location & Directions (Zoo Road, Guwahati, Assam) */}
        <LocationSection />

        {/* 9. Instagram Community Showcase */}
        <InstagramSection />

        {/* 10. Final High-Impact Call to Action */}
        <FinalCTA />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Mobile Floating Quick WhatsApp Order Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
