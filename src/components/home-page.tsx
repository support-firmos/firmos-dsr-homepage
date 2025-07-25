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
  Calendar,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Clipboard,
  PlayCircle,
  Award,
  BarChart,
  TrendingUp,
  Target,
  Search,
  ThumbsUp,
  Clock,
  ChevronDown,
  Share,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  category: string;
  icon: React.ReactNode;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    category: 'General',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
    items: [
      {
        question: 'What is FirmOS and how can it benefit my accounting firm?',
        answer:
          'FirmOS automates your operations, helping your accounting firm scale efficiently while staying competitive and profitable. We build to reduce your daily involvement, allowing you to focus on strategic growth, transforming your firm into a high-value, autonomous business.',
      },
      {
        question:
          'How does FirmOS help with attracting and retaining high-value clients?',
        answer:
          'FirmOS combines strategic goal-setting, targeted outreach, and personalized nurturing to attract and retain high-value clients. By aligning your firm&apos;s branding, generating awareness, and converting leads through tailored strategies, we ensure sustainable growth and client loyalty.',
      },
    ],
  },
  {
    category: 'Products',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
    items: [
      {
        question: 'What sets FirmOS apart from other solutions?',
        answer:
          'FirmOS is tailored for accounting firms, combining expert CPA guidance with custom automation. We streamline operations, generate qualified leads, and deliver data-driven results. A fully done-for-you service, you won&apos;t find anything like it.',
      },
      {
        question: 'Do you offer a guarantee?',
        answer:
          'FirmOS offers a 30-Day Satisfaction-Based Refund. If you&apos;re not satisfied with our service within the first 30 days, we&apos;ll refund your retainer, no questions asked.',
      },
      {
        question:
          'What kind of support does FirmOS offer during implementation?',
        answer:
          'FirmOS provides full support from onboarding to ongoing optimization. We have a channel on our platform open 24/7 for any issues or questions, ensuring you always have the support you need.',
      },
    ],
  },
];

const products = [
  {
    title: 'Lead Management Tools',
    timeline: '15 Days',
    keyFeatures: [
      'Outbound Discovery Form: Streamlines outbound lead qualification processes',
      'Inbound Discovery Form: Captures and organizes inbound leads efficiently.',
      'Workforce Optimization: Predictive workforce planning, task delegation, and performance analysis for maximum productivity.',
      'Intake Form: Centralized data collection for seamless lead onboarding.',
      'Discovery Call Interface: Simplifies pre-call preparation and engagement.',
      'Post Discovery Form: Summarizes outcomes for follow-up and next steps.',
    ],
    benefits: [
      'Enhances lead capture and qualification efficiency.',
      'Provides a unified approach to managing lead data.',
      'Improves hiring and employee experiences with tailored solutions.',
      'Improves call preparation and follow-up communication.',
    ],
    outcome:
      'Empowers sales teams to focus on high-quality leads with structured workflows for improved conversions',
    position: 'top',
    color: '#323232',
  },
  {
    title: ' Email Campaign Sequences',
    timeline: '30 Days',
    keyFeatures: [
      'Priming Sequence: Engages prospects before the discovery phase.',
      'Demo Invite Email Sequence: Simplifies demo scheduling with compelling invites.',
      'Retargeting Email Sequence: Re-engages unresponsive leads effectively.',
      'No-Show Sequences: Automates follow-ups for missed meetings.',
      'Waitlist Email Nurturing: Keeps prospects engaged during waitlist periods.',
    ],
    benefits: [
      'Boosts email engagement rates with tailored sequences',
      'Reduces manual follow-ups with automated communication.',
      'Converts leads effectively through nurturing strategies.',
    ],
    outcome:
      'Drives consistent communication, increasing meeting attendance and conversion rates.',
    position: 'bottom',
    color: '#666666',
  },
  {
    title: 'Sales Engagement Interfaces',
    timeline: '45 Days',
    keyFeatures: [
      'Simplifies client interaction during critical sales phases.',
      'Enhances professionalism and client satisfaction.',
      'Post Demo/Follow Up Call Forms: Captures key insights for further engagement.',
      'Centralizes sales resources for efficient engagement.',
    ],
    benefits: [
      'Saves time by automating content production.',
      'Ensures consistent branding with customizable templates.',
      'Boosts engagement through tailored, audience-focused material.',
      'Enhances SEO efforts with optimized keyword integration.',
    ],
    outcome:
      'Optimizes client engagement during prospecting and sales calls, improving close rates.',
    position: 'top',
    color: '#999999',
  },
  {
    title: 'Campaign Management Tools',
    timeline: '60 Days',
    keyFeatures: [
      'Performance Dashboard: Tracks key campaign metrics and ROI in real-time.',
      'Campaign Management: Provides tools for seamless campaign planning.',
      'Outbound Campaign Troubleshooting: Identifies and resolves campaign issues quickly.',
      'Referral Program Promotion Campaigns: Drives customer advocacy and referrals.',
      'Cross-Selling GHL Email Campaigns: Upsells additional products to existing clients.',
    ],
    benefits: [
      'Centralizes campaign operations for better oversight.',
      'Increases campaign success rates with real-time insights',
      'Encourages repeat purchases through referral and cross-selling strategies.',
    ],
    outcome:
      'Maximizes marketing campaign efficiency with actionable insights and automated management.',
    position: 'bottom',
    color: '#323232',
  },
  {
    title: 'AI-Powered Sales Tools',
    timeline: '75 Days',
    keyFeatures: [
      'AI Inbox Manager: Automates email sorting and prioritization for efficient communication.',
      'ROI Calculator: Estimates campaign profitability with data-driven forecasts.',
      'Outbound Account Troubleshooting: Resolves lead generation issues proactively.',
      'Business Development Calendars: Organizes outreach schedules for better planning.',
    ],
    benefits: [
      'Reduces administrative tasks with AI-driven automation.',
      'Improves accuracy in sales forecasting and reporting.',
      'Enhances team productivity with structured schedules.',
    ],
    outcome:
      'Empowers sales teams to focus on high-value activities with intelligent tools.',
    position: 'top',
    color: '#FFFFFF',
  },

  {
    title: 'Customer Retention Campaigns',
    timeline: '90 Days',
    keyFeatures: [
      'Online Review GHL Campaigns: Collects client reviews to enhance online reputation.',
      'Post Demo/Follow Up Call Forms: Encourages client retention with timely feedback.',
      'Waitlist Email Nurturing: Keeps prospects engaged during onboarding delays.',
      'Pre-Discovery GHL Email Sequence: Prepares clients for the sales journey.',
    ],
    benefits: [
      'Strengthens client relationships with proactive communication.',
      'Improves client satisfaction through timely engagement.',
      'Enhances brand reputation with positive online reviews.',
    ],
    outcome:
      ' Drives customer loyalty and retention with strategic communication campaigns.',
    position: 'top',
    color: '#FFFFFF',
  },
];

const clientVideos = [
  {
    name: 'Stewart Robinson',
    operations: 'Biotech CPA',
    url: 'https://www.youtube.com/embed/lk679d1rAZA?si=RXUQyZzr-p3N0shW',
    overview:
      'Biotech CPA faced challenges in client acquisition and workflow management. With FirmOS, they unlocked remarkable efficiency and revenue potential, including a 400% increase in search impressions and $864K annual ROI by automating outreach and focusing on high-value clients.',
    keywords: [
      { text: '400% More Search Impressions', icon: TrendingUp },
      { text: '$864K Annual ROI', icon: BarChart },
      { text: 'Automated Outreach', icon: Zap },
    ],
  },
  {
    name: 'Aaron Ready, CPA',
    operations: 'The Non Profit CFO',
    url: 'https://youtube.com/embed/mSjAeEvvnf0',
    overview:
      'The Non-Profit CFO struggled with overwhelming administrative tasks, inefficient workflows, and challenges in finding qualified talent, leaving little time for growth or marketing. FirmOS streamlined operations, implemented modern technology, and provided expert recruitment support, freeing up time to focus on strategic priorities. This partnership reduced stress, improved efficiency, and positioned the firm for sustainable growth.',
    keywords: [
      { text: 'Streamlined Operations', icon: BarChart },
      { text: 'Expert Recruitment Support', icon: Users },
      { text: 'Sustainable Growth', icon: TrendingUp },
    ],
  },
  {
    name: 'Abir Seyed, CPA',
    operations: 'Upcounting',
    url: 'https://youtube.com/embed/Hs8aNN9QIHY',
    overview:
      "UpCounting partnered with FirmOS to overcome challenges in social media management and brand building, benefiting from FirmOS's unique blend of accounting expertise and marketing knowledge. By creating on-brand, client-focused content and managing social media profiles, FirmOS allowed UpCounting to build trust, enhance engagement, and free up time to focus on core business tasks. This partnership significantly improved their marketing efforts, making FirmOS a trusted resource for accounting firms.",
    keywords: [
      { text: 'On-Brand, Client-Focused Content', icon: Target },
      { text: 'Enhanced Engagement', icon: Users },
      { text: 'Trusted Resource for Accounting Firms', icon: Award },
    ],
  },
  {
    name: 'Scott Amano, CPA',
    operations: 'Amano FAS',
    url: 'https://youtube.com/embed/pJqq9M1pR74',
    overview:
      "Scott Amano, founder of Amano Financial Advisory Services, partnered with FirmOS to enhance his website's performance and user experience. FirmOS provided ongoing monitoring, analysis, and proactive optimization, resulting in increased website traffic, improved user retention, and positive client feedback. Their industry expertise and tailored approach addressed Scott's unique challenges, making FirmOS a trusted and effective marketing partner for accounting and financial professionals.",
    keywords: [
      { text: 'Increased Website Traffic', icon: TrendingUp },
      { text: 'Improved User Retention', icon: Users },
      { text: 'Trusted Marketing Partner', icon: Award },
    ],
  },
  {
    name: 'Imran Jiwa, CPA',
    operations: 'LiftCPA',
    url: 'https://youtube.com/embed/1DSs0PUCAcA',
    overview:
      'LiftCPA partnered with FirmOS to address limited online visibility and lack of social media presence. Through targeted SEO strategies and personalized support, FirmOS significantly improved search rankings and lead generation, delivering a strong return on investment within just four months. Their expertise and collaborative approach made it easy to position LiftCPA for long-term success in attracting qualified leads.',
    keywords: [
      { text: 'Targeted SEO Strategies', icon: Target },
      { text: 'Improved Search Rankings', icon: TrendingUp },
      { text: 'Strong Return on Investment', icon: BarChart },
    ],
  },
  {
    name: 'Dominic Wong',
    operations: 'Invoke Digital',
    url: 'https://youtube.com/embed/jnrde6jB0Jc',
    overview:
      "Dominic, Managing Director of Invoke Digital, partnered with FirmOS to optimize processes and drive lead generation for his tech business. Through automation and a tailored strategy, FirmOS streamlined operations and enhanced sales efforts, resulting in significant growth, including $30K in additional MRR. Their responsive and collaborative team earned Dominic's trust, making FirmOS a valuable partner for tech-focused businesses.",
    keywords: [
      { text: '$30K in Additional MRR', icon: BarChart },
      { text: 'Streamlined Operations', icon: TrendingUp },
      { text: 'Valuable Partner for Tech Businesses', icon: Award },
    ],
  },
  {
    name: 'Mathew Cohen',
    operations: 'Incommon Projects',
    url: 'https://youtube.com/embed/G4AvCFjtQWA',
    overview:
      "FirmOS collaborated with Incommon Project to deliver a high-quality website with impressive speed and efficiency. Rodney and Martin's proactive approach, responsiveness, and ongoing support ensured a seamless experience, addressing challenges and implementing improvements even post-launch. The result was a flawless website at competitive pricing, making FirmOS a highly recommended partner for professional website design.",
    keywords: [
      { text: 'High-Quality Website', icon: Award },
      { text: 'Seamless Experience', icon: ThumbsUp },
      { text: 'Highly Recommended Partner', icon: Users },
    ],
  },
];

const overviewItems = [
  {
    icon: Zap,
    title: 'Business Development',
    description: 'Attract high-value clients and build a consistent pipeline.',
  },
  {
    icon: Users,
    title: 'Talent Management',
    description: 'Retain top talent and empower your team for success.',
  },
  {
    icon: BarChart3,
    title: 'Operations',
    description: 'Streamline processes and improve workflow efficiency.',
  },
];

const videos = [
  {
    title: 'AI Inbox Manager',
    url: 'https://youtube.com/embed/u8xN-hWSnoo',
    description:
      'Take control of your inbox with AI-powered efficiency. Our AI Inbox Manager sorts, prioritizes, and responds to emails, keeping you organized and focused on what matters. Less clutter, more clarity.',
    status: null, // No indicator
    icon: '💬', // Speech bubble icon
    shortDescription: 'Take control of your inbox with AI-powered efficiency.',
  },
  {
    title: 'AI Content Generator',
    url: 'https://youtube.com/embed/rseJGWxFCVo',
    description:
      `Creating high-quality content takes time. Our AI Content Generator helps you write articles, social media posts, and marketing copy—quickly and effortlessly. Aligned with your brand's identity, it simplifies the process so you can focus on what matters most: creating impact.`,
    status: 'Coming Soon!', // Show the indicator
    icon: '✨', // Sparkle icon
    shortDescription: 'Create engaging content with advanced AI assistance.',
  },
  {
    title: 'AI Marketing Analytics',
    url: 'https://youtube.com/embed/zaQyYuYxSuQ',
    description:
      'Make smarter decisions with data. Our AI Marketing Analytics tool provides insights into your marketing performance, helping you analyze data from multiple channels to refine strategies and improve ROI.',
    status: null, // No indicator
    icon: '📊', // Bar chart icon
    shortDescription: 'Unlock insights with intelligent data analysis.',
  },
];

function TimelineSegment({
  product,
  index,
  isSelected,
  onSelect,
}: {
  product: { position: string; [key: string]: any };
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}) {
  const isTop = product.position === 'top';
  const hoverColor = '#FE7443';

  return (
    <div
      className={`relative flex-1 h-24 flex items-stretch transition-all duration-300 cursor-pointer group`}
      onClick={() => onSelect(index)}
    >
      <div
        className={`flex-1 flex items-center justify-center transition-all duration-300 relative group-hover:bg-[#FE7443] ${
          isSelected ? 'bg-[#FE7443]' : ''
        }`}
      >
        <span
          className={`text-2xl font-bold z-10 transition-colors duration-300
            ${index > 2 ? 'text-[#323232] group-hover:text-white' : 'text-white'}
            ${isSelected ? 'text-white' : ''}`}
        >
          {product.timeline}
        </span>
      </div>

      <div
        className={`w-8 transition-all duration-300 group-hover:bg-[#FE7443] ${
          isSelected ? 'bg-[#FE7443]' : ''
        }`}
      />

      <div
        className={`absolute text-xl font-bold transition-all duration-300 w-48 text-center
          ${isTop ? '-top-20' : 'bottom-[-5rem]'}
          left-[calc(50%-6rem)]
          ${isSelected ? 'text-[#FE7443]' : 'group-hover:text-[#FE7443]'}
          ${index > 2 ? 'text-[#323232] hover:text-[#FE7443]' : 'text-white'}`}
      >
        {product.title}
      </div>
    </div>
  );
}

export function HomePage() {
  const [activeVideo, setActiveVideo] = useState(0);
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

  const [activeClientVideo, setActiveClientVideo] = React.useState(0);

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

  const filteredFAQ = faqData
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
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-[#000000]/90 backdrop-blur-sm' : 'bg-transparent'
          } py-4`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="#" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FirmOS%20Logo%20-%20White-ccaDc4vMhJOlqCR9jcM2XDUIHbHJ28.png"
                  alt="FirmOS Logo"
                  width={180}
                  height={40}
                  className="h-12 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="bg-[#14151A]/60 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-6">
                  <Link
                    href="#"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="#products"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    AI Products
                  </Link>
                  <Link
                    href="#about"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#stories"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    Client Success Stories
                  </Link>
                  <Link
                    href="#roadmap"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    Road Map
                  </Link>
                  <Link
                    href="#faq"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    FAQ
                  </Link>

                </div>
                {/* <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#FE7443] text-[#FFFFFF] rounded-full flex items-center gap-2 hover:bg-[#FE8F68] transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Demo
                </Button> */}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-[#FFFFFF]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden bg-[#14151A]/60 backdrop-blur-sm p-4 absolute w-full left-0 rounded-b-xl">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="#"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="#products"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    AI Products
                  </Link>
                  <Link
                    href="#about"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#stories"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    Client Success Stories
                  </Link>
                  <Link
                    href="#roadmap"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    Road Map
                  </Link>
                  <Link
                    href="#faq"
                    className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors"
                  >
                    FAQ
                  </Link>

                  {/* <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#FE7443] text-[#FFFFFF] w-full rounded-full flex items-center justify-center gap-2 hover:bg-[#FE8F68] transition-all duration-300 transform hover:scale-105"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a Demo
                  </Button> */}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative w-full" style={{ aspectRatio: '2.16/1' }}>
            <picture>
              {/* Desktop */}
              <source
                media="(min-width: 1024px)"
                srcSet="/firmos-dsr-headline-desktop.png"
                type="image/png"
              />
              {/* Laptop */}
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet="/firmos-dsr-headline-laptop.png"
                type="image/png"
              />
              {/* Tablet */}
              <source
                media="(min-width: 481px) and (max-width: 767px)"
                srcSet="/firmos-dsr-headline-tablet.png"
                type="image/png"
              />
              {/* Mobile - fallback */}
              <img
                src="/firmos-dsr-headline-desktop.png"
                alt="FirmOS Abstract Design"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </picture>
            {/* Welcome Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-wide text-center px-4">
                <span className="font-normal">Welcome to </span>
                <span className="font-bold">FirmOS</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Video Carousel Section */}
        <section className="py-16 px-4" id="products">
          <div className="container mx-auto max-w-none px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Product Selection (2/12 width) */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-6">Choose a Product</h3>
                <div className="flex md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveVideo(index)}
                      className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 min-w-[280px] md:min-w-0 ${
                        activeVideo === index ? 'scale-105' : ''
                      }`}
                    >
                      <div className={`bg-[#323232] rounded-xl p-4 border transition-all duration-300 ${
                        activeVideo === index
                          ? 'border-[#4CAF50] bg-[#323232]/80'
                          : 'border-[#666666] hover:border-[#4CAF50]/60 hover:bg-[#323232]/60'
                      }`}>
                        <div className="flex items-start space-x-3">
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                            activeVideo === index
                              ? 'bg-[#999999] text-[#FFFFFF]'
                              : 'bg-[#666666] text-[#FFFFFF]'
                          }`}>
                            {video.icon}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className={`text-sm font-bold truncate ${
                                activeVideo === index
                                  ? 'text-[#4CAF50]'
                                  : 'text-[#FFFFFF]'
                              }`}>
                                {video.title}
                              </h4>
                            </div>
                            {video.status && (
                              <div className="absolute -top-2 -right-2">
                                <span className="bg-[#FF6B6B] text-white text-xs font-bold px-2 py-1 rounded-full">
                                  {video.status}
                                </span>
                              </div>
                            )}
                            <p className="text-xs text-[#CCCCCC] mb-3 leading-relaxed">
                              {video.shortDescription}
                            </p>
                            <div className="flex items-center text-[#4CAF50] text-xs font-semibold">
                              <PlayCircle className="w-3 h-3 mr-1" />
                              Watch Demo
                              <ChevronRight className="w-3 h-3 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Player (8/12 width) */}
              <div className="md:col-span-8">
                <div className="aspect-video bg-[#FFFFFF] rounded-xl shadow-2xl">
                  <iframe
                    src={videos[activeVideo].url.replace(
                      'youtu.be/',
                      'youtube.com/embed/',
                    )}
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Description Card (2/12 width) */}
              <Card className="md:col-span-2 bg-[#323232] text-[#FFFFFF] border-[#4CAF50]/20">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#666666] rounded-lg flex items-center justify-center text-2xl text-[#FFFFFF]">
                      {videos[activeVideo].icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#FFFFFF]">
                      {videos[activeVideo].title}
                    </h3>
                  </div>
                  <p
                    className="flex-grow mb-6 text-[#CCCCCC] leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: videos[activeVideo].description,
                    }}
                  />
                  <Link
                    href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-[#323232] px-6 py-3 rounded-lg hover:bg-[#F5F5F5] transition-all duration-300 transform hover:scale-105 text-center font-semibold shadow-lg hover:shadow-xl"
                  >
                    Get it Now!
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section
          className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]"
          id="about"
        >
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
                FirmOS is the all-in-one platform designed exclusively for fractional CFOs and accounting firms. With a focus on Business Development, Talent, Operations, and Management efficiency, we provide innovative tools to streamline processes, attract high-value clients, and empower your team—all while ensuring financial stability.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-[#E5E5E5] leading-relaxed">
                  Our mission is to help accounting firms overcome growth challenges and scale sustainably with AI-powered automation and strategic systems. Whether you&apos;re looking to improve workflow efficiency, retain top talent, or build a consistent client pipeline, FirmOS is here to transform the way you work and grow your business.
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
                  <item.icon className="w-12 h-12 text-icon mb-4" />
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#CCCCCC]">{item.description}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6 hover:bg-[#999999]/40 transition-all duration-300"
              >
                <Clipboard className="w-12 h-12 text-icon mb-4" />
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                  Strategic Guidance
                </h3>
                <p className="text-[#CCCCCC]">
                  Bi-weekly 60-minute sessions offering structured advice to
                  improve operations and strategies.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Success Stories Section */}
        <section
          className="py-16 px-4 bg-gradient-to-b from-[#000000] to-[#323232]"
          id="stories"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
            >
              Client Success Stories
            </motion.h2>

            <div className="relative flex flex-col items-center justify-center gap-4 mb-12">
              <div className="relative flex items-center justify-center gap-4 w-full">
                {/* Previous Video */}
                <div
                  className="relative w-1/4 aspect-video cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={prevClientVideo}
                >
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-xl" />
                  <iframe
                    src={clientVideos[prevIndex].url}
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ChevronLeft className="w-12 h-12 text-white" />
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
                        src={clientVideos[activeClientVideo].url}
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
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-xl" />
                  <iframe
                    src={clientVideos[nextIndex].url}
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ChevronRight className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Dot Navigation */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {clientVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveClientVideo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeClientVideo
                        ? 'bg-icon w-6'
                        : 'bg-[#666666] hover:bg-[#999999]'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeClientVideo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#323232] rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-8 flex flex-col md:flex-row gap-8">
                  {/* Overview on the left */}
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {clientVideos[activeClientVideo].name}
                    </h3>
                    <p className="text-xl text-[#B2B2B2] mb-4">
                      {clientVideos[activeClientVideo].operations}
                    </p>
                    <div className="bg-[#666666] rounded-lg p-6 transition-all duration-300 hover:bg-[#999999] group">
                      <p className="text-[#F2F2F2] leading-relaxed font-medium group-hover:text-lg group-hover:leading-loose">
                        {clientVideos[activeClientVideo].overview}
                      </p>
                    </div>
                  </div>

                  {/* Keywords on the right */}
                  <div className="md:w-1/3 flex flex-col">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Key Highlights
                    </h4>
                    <div className="flex flex-col gap-4">
                      {clientVideos[activeClientVideo].keywords.map(
                        (keyword, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-secondary/10 border-2 border-border text-white text-base py-4 px-5 rounded-lg transition-all duration-300 hover:bg-secondary/20 shadow-lg shadow-[#323232]/20 w-fit"
                          >
                            <keyword.icon className="w-6 h-6 mr-4 flex-shrink-0 text-icon" />
                            <span className="font-medium">{keyword.text}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Roadmap Section */}
        <section
          className="min-h-screen bg-black text-white py-20 px-4 md:px-8"
          id="roadmap"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              FirmOS Product Roadmap
            </motion.h2>
            <div className="relative">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-8 md:mb-0">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedRoadmapIndex === index
                          ? 'bg-border border-2 border-border text-white'
                          : 'bg-primary text-gray-300 hover:bg-border hover:border-2 hover:border-border'
                      }`}
                      onClick={() => setSelectedRoadmapIndex(index)}
                    >
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-sm">{product.timeline}</p>
                    </motion.div>
                  ))}
                </div>
                {/* Product Details */}
                <div className="md:w-3/4 md:pl-8">
                  {products[selectedRoadmapIndex] && (
                    <motion.div
                      key={selectedRoadmapIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-secondary/10 p-6 rounded-lg"
                    >
                      <h3 className="text-2xl font-bold mb-4">
                        {products[selectedRoadmapIndex]?.title}
                      </h3>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">
                          Key Features:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {products[selectedRoadmapIndex]?.keyFeatures?.map(
                            (feature, i) => {
                              const [subtitle, description] =
                                feature.split(':');
                              return (
                                <li key={i}>
                                  <span className="font-bold">{subtitle}:</span>{' '}
                                  {description}
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">
                          Benefits:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {products[selectedRoadmapIndex]?.benefits?.map(
                            (benefit, i) => <li key={i}>{benefit}</li>,
                          )}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Outcome:</h4>
                        <p className="text-gray-300">
                          {products[selectedRoadmapIndex]?.outcome}
                        </p>
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-icon" />
                        <span className="text-sm text-gray-400">
                          Timeline: {products[selectedRoadmapIndex]?.timeline}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              {/* Vertical Divider */}
              {/* <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-700 hidden md:block"></div> */}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]"
          id="faq"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-medium text-primary-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 rounded-full border-2 border-border bg-transparent text-[#FFFFFF] placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-border focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-icon">
                <Search size={20} />
              </div>
            </div>

            {hasResults ? (
              filteredFAQ.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary/10 text-icon p-3 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-semibold text-primary-foreground">
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
                              className={`text-icon transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
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
