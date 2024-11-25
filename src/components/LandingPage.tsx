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
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Clock,
  Award,
  Search,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  faqList,
  products,
  clientVideos,
  overviewItems,
  productVideos,
} from '@/content/landingPageContent';
import TimelineSegment from '@/components/TimelineSegment';
import NavigationBar from '@/components/NavigationBar';

export function LandingPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeClientVideo, setActiveClientVideo] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const nextClientVideo = () => {
    setActiveClientVideo((prev) => (prev + 1) % clientVideos.length);
  };

  const prevClientVideo = () => {
    setActiveClientVideo(
      (prev) => (prev - 1 + clientVideos.length) % clientVideos.length,
    );
  };

  const prevIndex =
    (activeClientVideo - 1 + clientVideos.length) % clientVideos.length;
  const nextIndex = (activeClientVideo + 1) % clientVideos.length;

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
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-[#323232]/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
                Strategic FirmOS Solutions
              </h1>
              <p className="text-lg md:text-xl text-[#CCCCCC] max-w-3xl mx-auto">
                Elevate your accounting practice with our meticulously crafted
                suite of professional tools. Select the optimal FirmOS package
                to revolutionize your firm&apos;s efficiency, client engagement,
                and growth potential.
              </p>
            </div>
          </div>
        </section>

        {/* Video Carousel Section */}
        <section className="py-16 px-4" id="products">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Video Buttons (2/12 width) */}
              <div className="md:col-span-2 flex md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                {productVideos.map((video, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveVideo(index)}
                    className={`text-left w-full h-16 ${
                      activeVideo === index
                        ? 'bg-gradient-to-r from-[#FE7443] to-[#FE8F68]'
                        : 'bg-[#323232]/60'
                    } text-[#FFFFFF] rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-between px-4 py-3`}
                  >
                    <span className="text-sm font-semibold flex-1 whitespace-normal md:block hidden">
                      {video.title}
                    </span>
                    <span className="text-sm font-semibold md:hidden">
                      {index + 1}
                    </span>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
                  </Button>
                ))}
              </div>

              {/* Video Player (7/12 width) */}
              <div className="md:col-span-7 aspect-video">
                <iframe
                  src={productVideos[activeVideo].url.replace(
                    'youtu.be/',
                    'youtube.com/embed/',
                  )}
                  className="w-full h-full rounded-xl shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description Card (3/12 width) */}
              <Card className="md:col-span-3 bg-[#323232]/40 backdrop-blur-sm text-[#FFFFFF]">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4">
                    {productVideos[activeVideo].title}
                  </h3>
                  <p className="flex-grow mb-6 text-[#CCCCCC]">
                    {productVideos[activeVideo].description}
                  </p>
                  <Link
                    href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 text-center font-semibold shadow-lg hover:shadow-xl"
                  >
                    Get it Now!
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                Welcome to FirmOS
              </h2>
              <p className="text-xl text-[#CCCCCC]">
                Your Partner in Scalable Growth and Operational Excellence
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-[#E5E5E5] leading-relaxed">
                  FirmOS is the all-in-one platform designed exclusively for
                  fractional CFOs and accounting firms. With a focus on Business
                  Development, Talent, Operations, and Finance, we provide
                  innovative tools to streamline processes, attract high-value
                  clients, and empower your team—all while ensuring financial
                  stability.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-[#E5E5E5] leading-relaxed">
                  Our mission is to help accounting firms overcome growth
                  challenges and scale sustainably with AI-powered automation
                  and strategic systems. Whether you&apos;re looking to improve
                  workflow efficiency, retain top talent, or build a consistent
                  client pipeline, FirmOS is here to transform the way you work
                  and grow your business.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {overviewItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 3) }}
                  className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6 hover:bg-[#999999]/40 transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-[#FE7443] mb-4" />
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#CCCCCC]">{item.description}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6 hover:bg-[#999999]/40 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1"
              >
                <Clock className="w-12 h-12 text-[#FE7443] mb-4" />
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                  FIRMOS CONSULTING
                </h3>
                <p className="text-[#CCCCCC] mb-4">
                  Bi-weekly strategy sessions with tailored advice, templates,
                  and actionable steps to optimize operations, strategies, and
                  team performance.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-[#E5E5E5] mb-6">
                Let&apos;s redefine success in the accounting industry—together.
              </p>
              <Link
                href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-8 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Client Success Stories Section */}
        <section
          className="py-16 px-4 bg-gradient-to-b from-[#000000] to-[#323232]"
          id="success"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-12 text-center"
            >
              Client Success Stories
            </motion.h2>

            <div className="relative flex items-center justify-center gap-4 mb-12">
              {/* Previous Video */}
              <div
                className="relative w-1/4 aspect-video cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={prevClientVideo}
              >
                <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[2px] rounded-xl" />
                <iframe
                  src={clientVideos[prevIndex].url.replace(
                    'youtu.be/',
                    'youtube.com/embed/',
                  )}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronLeft className="w-12 h-12 text-[#FFFFFF]" />
                </div>
              </div>

              {/* Current Video */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeClientVideo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-1/2 aspect-video z-10"
                >
                  <div className="relative h-full">
                    <iframe
                      src={clientVideos[activeClientVideo].url.replace(
                        'youtu.be/',
                        'youtube.com/embed/',
                      )}
                      className="w-full h-full rounded-xl shadow-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next Video */}
              <div
                className="relative w-1/4 aspect-video cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={nextClientVideo}
              >
                <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[2px] rounded-xl" />
                <iframe
                  src={clientVideos[nextIndex].url.replace(
                    'youtu.be/',
                    'youtube.com/embed/',
                  )}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronRight className="w-12 h-12 text-[#FFFFFF]" />
                </div>
              </div>
            </div>

            {/* Client Info and Success Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-4xl mx-auto"
            >
              <Card className="bg-[#666666]/60 backdrop-blur-md text-[#FFFFFF] overflow-hidden border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h3 className="text-3xl font-bold mb-2 md:mb-0">
                      {clientVideos[activeClientVideo].name}
                    </h3>
                    <p className="text-xl text-[#FEC7B3]">
                      {clientVideos[activeClientVideo].operations}
                    </p>
                  </div>
                  <div className="bg-[#323232]/40 rounded-lg p-6">
                    <h4 className="text-2xl font-bold mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-[#FE7443]" />
                      Success Overview
                    </h4>
                    <p className="text-[#E5E5E5] leading-relaxed">
                      {clientVideos[activeClientVideo].overview}
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <Button
                      onClick={() => {
                        const element = document.getElementById('products');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-[#FE7443] hover:bg-[#FE8F68] text-[#FFFFFF] font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-lg"
                    >
                      Explore Our Solutions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8">
              {clientVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveClientVideo(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                    index === activeClientVideo
                      ? 'bg-[#FE7443] scale-125'
                      : 'bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

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
