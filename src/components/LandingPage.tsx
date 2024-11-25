'use client';

import { useState, useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import VideoCarouselSection from '@/components/VideoCarouselSection';
import OverviewSection from '@/components/OverviewSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import RoadmapSection from '@/components/RoadmapSection';
import FAQSection from '@/components/FAQSection';
import CalendarModal from '@/components/CalendarModal';

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000000] text-[#FFFFFF]">
      <div className="relative">
        {/* Navigation Bar */}
        <NavigationBar
          isScrolled={isScrolled}
          setIsModalOpen={setIsModalOpen}
        />

        {/* Hero Section */}
        <HeroSection />

        {/* Video Carousel Section */}
        <VideoCarouselSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Success Stories Section */}
        <SuccessStoriesSection />

        {/* Roadmap Section */}
        <RoadmapSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Calendar Modal */}
        <CalendarModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}
