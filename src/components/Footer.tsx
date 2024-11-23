"use client";

import Link from 'next/link';
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-16 px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-2xl mb-5 border-b-2 border-orange-500 pb-2">Contact Us</h3>
        <div className="mb-7 text-lg leading-relaxed">
          <p>Contact Number: (123) 456-7890</p>
          <p>Email: <Link href="mailto:contact@firmos.ai" className="text-gray-200 hover:text-orange-500">contact@firmos.ai</Link></p>
          <p>Website: 
            <Link href="https://firmos.ai" className="text-gray-200 hover:text-orange-500"> firmos.ai</Link> | 
            <Link href="https://firmos.ai/demo" className="text-gray-200 hover:text-orange-500"> firmos.ai/demo</Link>
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mb-5 border-b-2 border-orange-500 pb-2">Quick Links</h3>
        <div className="mb-7">
          <Link href="#about" className="block text-gray-200 hover:text-orange-500 mb-2">About Us</Link>
          <Link href="#products" className="block text-gray-200 hover:text-orange-500 mb-2">Services</Link>
          <Link href="#" className="block text-gray-200 hover:text-orange-500 mb-2">Blog</Link>
          <Link href="mailto:contact@firmos.ai" className="block text-gray-200 hover:text-orange-500">Contact</Link>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mb-5 border-b-2 border-orange-500 pb-2">Follow Us</h3>
        <div className="flex justify-start gap-5 mt-7">
          <a href="https://www.facebook.com/FirmOSApp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-orange-500 text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/firmos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-orange-500 text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/firmos.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-orange-500 text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@Firm-OS" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-orange-500 text-red-600">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
To use this component, simply import and add <Footer /> in your homepage or desired page.
*/