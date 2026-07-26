import { SkipLink } from "@/components/layout/SkipLink";
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
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      {/* First focusable element in the document, by design. */}
      <SkipLink />

      <EmergencyTopBar />
      <Header />

      <main id="main-content" className="flex-1">
        <Hero />
        <TrustHighlights />
        <Services />
        <About />
        <Veterinarian />
        <ClinicGallery />
        <EmergencySection />
        <Reviews />
        <InstagramFeed />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
