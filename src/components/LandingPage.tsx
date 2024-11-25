'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { faqList, products } from '@/content/landingPageContent';
import TimelineSegment from '@/components/TimelineSegment';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import VideoCarouselSection from '@/components/VideoCarouselSection';
import OverviewSection from '@/components/OverviewSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFAQItems, setOpenFAQItems] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoadmapIndex, setSelectedRoadmapIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenFAQItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredFAQ = faqList
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0);

  const hasResults = filteredFAQ.length > 0;

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
        <section
          className="min-h-screen bg-black text-white py-20 px-4 md:px-8"
          id="roadmap"
        >
          <div className="text-center mb-20">
            <motion.div
              className="inline-block bg-gradient-to-r from-[#FE7443] to-[#FEAB8E] p-1 rounded-lg mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-black px-6 py-3 rounded-lg">
                Product Roadmap
              </h1>
            </motion.div>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our product roadmap outlines the strategic direction and planned
              features for our AI-powered solutions. It provides a clear
              timeline of upcoming developments, ensuring transparency and
              alignment with our users&apos; evolving needs.
            </motion.p>
          </div>

          <div className="h-10"></div>
          <div className="relative max-w-7xl mx-auto mt-16">
            <div className="flex justify-between items-center mb-32">
              {products.map((product, index) => (
                <TimelineSegment
                  key={index}
                  product={product}
                  index={index}
                  isSelected={selectedRoadmapIndex === index}
                  onSelect={setSelectedRoadmapIndex}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoadmapIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-16"
              >
                <Card className="bg-gray-800 border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#FE7443] mb-4">
                      {products[selectedRoadmapIndex].title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {products[selectedRoadmapIndex].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]"
          id="faq"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FE7443] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 rounded-full border-2 border-[#FE7443] bg-transparent text-[#FFFFFF] placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#FE7443] focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FE7443]">
                <Search size={20} />
              </div>
            </div>

            {hasResults ? (
              filteredFAQ.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#FE7443] p-3 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-semibold text-[#FE7443]">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const isOpen =
                        openFAQItems[`${categoryIndex}-${itemIndex}`];
                      return (
                        <div
                          key={itemIndex}
                          className="bg-[#1A1A1A] rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              toggleFAQItem(categoryIndex, itemIndex)
                            }
                            className="w-full text-left p-6 flex justify-between items-center hover:bg-[#323232] transition-colors duration-300"
                          >
                            <span className="text-lg font-medium text-[#FFFFFF]">
                              {item.question}
                            </span>
                            <ChevronDown
                              size={24}
                              className={`text-[#FE7443] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="p-6 text-[#CCCCCC]">{item.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-[#CCCCCC] mb-4">
                  No results found. Maybe ask that question to us!
                </p>
                <Link
                  href="https://app.firmos.ai/messaging"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  Ask a Question
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Calendar Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-[#323232] text-[#FFFFFF]">
            <DialogHeader>
              <DialogTitle>Schedule a Call</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <div className="bg-[#666666]/40 p-8 rounded-xl text-center">
                <p className="mb-4">Calendar integration placeholder</p>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] hover:from-[#FE8F68] hover:to-[#FE7443] rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
