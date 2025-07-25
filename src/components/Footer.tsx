'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-muted-foreground py-10 px-10 flex flex-row justify-between">
      <div className='text-sm text-center text-muted-foreground'>
        <p>Copyright &copy; 2025 FirmOS Inc. All rights reserved.</p>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <Link
          href="https://www.linkedin.com/company/firmos/">
            <Image src='/linkedin.png' alt='FirmOS Linkedin' width={20} height={20} />
          </Link>
          <Link
          href="https://www.youtube.com/@Firm-OS">
            <Image src='/youtube.png' alt='FirmOS YouTube' width={20} height={20} />
          </Link>
          <Link
          href="https://www.instagram.com/firmos.ai/?hl=en">
            <Image src='/instagram.png' alt='FirmOS Instagram' width={20} height={20} />
          </Link>
          <Link
          href="https://web.facebook.com/FirmOSAI">
            <Image src='/facebook.png' alt='FirmOS Facebook' width={20} height={20} />
          </Link>
          <Link
          href="https://x.com/FirmOS_AI">
            <Image src='/twitter.png' alt='FirmOS Twitter' width={20} height={20} />
          </Link>
        </div>
      {/* <div>
        <h3 className="text-2xl mb-5 border-b-2 border-icon pb-2">
          Contact Us
        </h3>
        <div className="mb-7 text-lg leading-relaxed">
          <p>Contact Number: (123) 456-7890</p>
          <p>
            Email:{' '}
            <Link
              href="mailto:contact@firmos.ai"
              className="text-gray-200 hover:text-icon"
            >
              contact@firmos.ai
            </Link>
          </p>
          <p>
            Website:
            <Link
              href="https://firmos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-icon"
            >
              {' '}
              firmos.ai
            </Link>{' '}
            |
            <Link
              href="https://www.firmos.ai/#demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-icon"
            >
              {' '}
              firmos.ai/demo
            </Link>
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mb-5 border-b-2 border-icon pb-2">
          Quick Links
        </h3>
        <div className="mb-7">
          <Link
            href="#about"
            className="block text-gray-200 hover:text-icon mb-2"
          >
            About Us
          </Link>
          <Link
            href="#products"
            className="block text-gray-200 hover:text-icon mb-2"
          >
            Services
          </Link>
          <Link
            href="#"
            className="block text-gray-200 hover:text-icon mb-2"
          >
            Blog
          </Link>
          <Link
            href="mailto:contact@firmos.ai"
            className="block text-gray-200 hover:text-icon"
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mb-5 border-b-2 border-icon pb-2">
          Follow Us
        </h3>
        <div className="flex justify-start gap-5 mt-7">
          <a
            href="https://www.facebook.com/FirmOSApp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-icon text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/firmos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-icon text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/firmos.ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-icon text-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@Firm-OS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-3xl transition-transform transform hover:scale-110 border-2 border-transparent rounded-full p-2 hover:border-icon text-red-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

/*
To use this component, simply import and add <Footer /> in your homepage or desired page.
*/
