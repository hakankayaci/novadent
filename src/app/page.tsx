import React from "react";
import { EmergencyTopBar } from "@/components/layout/EmergencyTopBar";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Veterinarian } from "@/components/sections/Veterinarian";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { EmergencySection } from "@/components/sections/EmergencySection";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-clip">
      {/* Top Emergency Strip */}
      <EmergencyTopBar />

      {/* Main Sticky Navigation */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <TrustHighlights />
        <Services />
        <About />
        <Veterinarian />
        <ClinicGallery />
        <EmergencySection />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Floating Action Bar */}
      <MobileActionBar />
    </div>
  );
}
