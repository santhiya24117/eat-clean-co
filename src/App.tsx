/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { StudioBanner } from './components/StudioBanner';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureMarquee } from './components/SignatureMarquee';
import { Intro } from './components/Intro';
import { Stats } from './components/Stats';
import { SignatureFoodStack } from './components/SignatureFoodStack';
import { CravingSection } from './components/CravingSection';
import { MenuSection } from './components/MenuSection';
import { WhyEatClean } from './components/WhyEatClean';
import { Testimonials } from './components/Testimonials';
import { Atmosphere } from './components/Atmosphere';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MenuCategoryId } from './types';

export default function App() {
  const [activeMenuCategory, setActiveMenuCategory] =
    useState<MenuCategoryId>('smoothie-bowls');

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#191B18] relative selection:bg-[#26382D] selection:text-[#F7F4EC]">
      {/* Studio Client Presentation Banner */}
      <StudioBanner />

      {/* Thin Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Experience Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* Signature Brand Marquee */}
        <SignatureMarquee />

        {/* 2. Brand Introduction */}
        <Intro />

        {/* 3. Brand Statistics */}
        <Stats />

        {/* 4. Signature Picks: React Bits Physical Card Stack with Centered Orbit */}
        <SignatureFoodStack />

        {/* 5. Interactive "What are you craving today?" */}
        <CravingSection onSelectCategory={setActiveMenuCategory} />

        {/* 6. Comprehensive Interactive Menu Section */}
        <MenuSection
          activeCategory={activeMenuCategory}
          onCategoryChange={setActiveMenuCategory}
        />

        {/* 7. Why Eat Clean Co. (Core Commitments) */}
        <WhyEatClean />

        {/* 8. Customer Reviews & 5-Star Testimonials */}
        <Testimonials />

        {/* 10. Café Atmosphere & Spatial Mood */}
        <Atmosphere />

        {/* 11. Visual Journal & Instagram Gallery */}
        <Gallery />

        {/* 12. Location & Hours (JP Nagar 2nd Phase) */}
        <Location />

        {/* 13. Cinematic Final CTA */}
        <FinalCTA />
      </main>

      {/* 14. Minimal Editorial Footer */}
      <Footer />

      {/* 15. Accessible Floating WhatsApp Contact */}
      <WhatsAppFloating />
    </div>
  );
}
