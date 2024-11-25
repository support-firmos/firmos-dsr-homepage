import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { useState } from 'react';

const clientVideos = [
  {
    name: 'Aaron Ready, CPA',
    operations: 'The Non Profit CFO',
    url: 'https://youtu.be/mSjAeEvvnf0',
    overview:
      'Transformed their operations with FirmOS, reducing administrative overwhelm and boosting efficiency. By streamlining workflows and leveraging cutting-edge technology, we saved the team valuable time, resolved recruitment challenges, and enabled a sharper focus on client services. The result: improved productivity, enhanced growth opportunities, and a modernized approach to business management, positioning them as a leader in their industry.',
  },
  {
    name: 'Abir Seyed, CPA',
    operations: 'Upcounting',
    url: 'https://youtu.be/Hs8aNN9QIHY',
    overview:
      'Elevated their marketing efforts with FirmOS, leveraging our unique blend of accounting expertise and advanced marketing knowledge. By focusing on social media and blog content, we built a strong online presence aligned with their branding, saving them time and effort. This trust-driven partnership empowered them to connect with their target audience effectively, enhancing their brand visibility and establishing a competitive edge in their industry.',
  },
  {
    name: 'Scott Amano, CPA',
    operations: 'Amano FAS',
    url: 'https://youtu.be/pJqq9M1pR74',
    overview:
      'Amano FAS harnessed the power of FirmOS to optimize their sustainable energy projects, leading to a 25% increase in energy efficiency and a 35% reduction in project costs. Our data-driven solutions enabled better resource management and predictive maintenance strategies.',
  },
  {
    name: 'Imran Jiwa, CPA',
    operations: 'LiftCPA',
    url: 'https://youtu.be/1DSs0PUCAcA',
    overview:
      'LiftCPA utilized FirmOS to streamline their healthcare operations, resulting in a 20% improvement in patient care quality and a 15% reduction in administrative overhead. Our secure, HIPAA-compliant platform enhanced data management and facilitated better interdepartmental collaboration.',
  },
  {
    name: 'Dominic Wong',
    operations: 'Invoke Digital',
    url: 'https://youtu.be/jnrde6jB0Jc',
    overview:
      'Invoke Digital optimized their international trade processes with FirmOS, achieving a 45% reduction in customs clearance times and a 60% improvement in supply chain visibility. Our global-ready solutions facilitated seamless cross-border transactions and real-time inventory management.',
  },
  {
    name: 'Mathew Cohen',
    operations: 'Incommon Projects',
    url: 'https://youtu.be/G4AvCFjtQWA',
    overview:
      'Incommon Projects transformed their educational technology offerings using FirmOS, leading to a 55% increase in student engagement and a 40% improvement in learning outcomes. Our adaptive learning algorithms and analytics tools revolutionized personalized education delivery.',
  },
];

export default function SuccessStoriesSection() {
  const [activeClientVideo, setActiveClientVideo] = useState(0);

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

  return (
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
  );
}
