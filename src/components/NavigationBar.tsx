import { Button } from '@/components/ui/button';
import { Calendar, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

export default function NavigationBar({
  isScrolled,
  setIsModalOpen,
}: {
  isScrolled: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#000000]/90 backdrop-blur-sm' : 'bg-transparent'} py-4`}
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
            <div className="bg-[#323232]/40 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-6">
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
                href="#success"
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
              <Link
                href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg animate-pulse"
                style={{ animationDuration: '2.5s' }}
              >
                Subscribe Now!
              </Link>
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FE7443] text-[#FFFFFF] rounded-full flex items-center gap-2 hover:bg-[#FE8F68] transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Demo
            </Button>
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
          <div className="md:hidden bg-[#323232]/95 backdrop-blur-sm p-4 absolute w-full left-0 rounded-b-xl">
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
                href="#success"
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
              <Link
                href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-4 py-2 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-center animate-pulse"
                style={{ animationDuration: '2.5s' }}
              >
                Subscribe Now!
              </Link>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FE7443] text-[#FFFFFF] w-full rounded-full flex items-center justify-center gap-2 hover:bg-[#FE8F68] transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
