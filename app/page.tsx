"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/Features";
import StopOverpaying from "@/components/sections/StopOverpaying";
import CompatibleDevices from "@/components/sections/CompatibleDevices";
import ContentPreview from "@/components/sections/ContentPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import { Testimonials, FAQ, Footer } from "@/components/sections/Others";

type Section = "home" | "features" | "content" | "pricing" | "devices" | "faq";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as Section;
      if (hash && hash !== activeSection) {
        setActiveSection(hash);
      }
      if (!window.location.hash) {
        setActiveSection("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
  };

  if (activeSection === "features") {
    return (
      <main>
        <Navbar onNavigate={handleNavClick} />
        <Features />
        <Footer />
      </main>
    );
  }

  if (activeSection === "content") {
    return (
      <main>
        <Navbar onNavigate={handleNavClick} />
        <ContentPreview />
        <Footer />
      </main>
    );
  }

  if (activeSection === "pricing") {
    return (
      <main>
        <Navbar onNavigate={handleNavClick} />
        <Pricing />
        <Footer />
      </main>
    );
  }

  if (activeSection === "devices") {
    return (
      <main>
        <Navbar onNavigate={handleNavClick} />
        <CompatibleDevices />
        <Footer />
      </main>
    );
  }

  if (activeSection === "faq") {
    return (
      <main>
        <Navbar onNavigate={handleNavClick} />
        <FAQ />
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar onNavigate={handleNavClick} />
      <Hero />
      <TrustBar />
      <Features />
      <StopOverpaying />
      <CompatibleDevices />
      <ContentPreview />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
