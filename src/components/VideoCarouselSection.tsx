import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { productVideos } from '@/content/landingPageContent';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function VideoCarouselSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  return (
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
  );
}
