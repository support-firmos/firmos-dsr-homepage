import TimelineSegment from '@/components/TimelineSegment';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/content/landingPageContent';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function RoadmapSection() {
  const [selectedRoadmapIndex, setSelectedRoadmapIndex] = useState(0);
  return (
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
          features for our AI-powered solutions. It provides a clear timeline of
          upcoming developments, ensuring transparency and alignment with our
          users&apos; evolving needs.
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
  );
}
