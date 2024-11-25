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

type Client =
  | {
      id?: string;
      object?: string;
      createdAt?: string;
      givenName?: string;
      familyName?: string;
      email?: string;
      companyId?: string;
      status?: string;
      fallbackColor?: string;
      inviteUrl?: string;
      avatarImageUrl?: string;
      firstLoginDate?: string;
      lastLoginDate?: string;
      customFields?: {
        phoneNumber?: string;
        tags?: Array<string>;
      };
      creationMethod?: string;
    }
  | undefined;

export function LandingPage({ client }: { client: Client }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const displayName = client?.givenName || 'Guest';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000000] text-[#FFFFFF]">
      <div className="relative">
        <h1 className="absolute top-5 left-5 z-[9999] bg-[#14151A] text-white p-2.5 rounded-md text-lg font-sans shadow-md w-auto">
          Welcome! <code>{displayName}</code>
        </h1>
        <NavigationBar
          isScrolled={isScrolled}
          setIsModalOpen={setIsModalOpen}
        />
        <HeroSection />
        <VideoCarouselSection />
        <OverviewSection />
        <SuccessStoriesSection />
        <RoadmapSection />
        <FAQSection />
        <CalendarModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}
