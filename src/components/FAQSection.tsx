import { Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const faqList = [
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

export default function FAQSection() {
  const [openFAQItems, setOpenFAQItems] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [searchTerm, setSearchTerm] = useState('');

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
                  const isOpen = openFAQItems[`${categoryIndex}-${itemIndex}`];
                  return (
                    <div
                      key={itemIndex}
                      className="bg-[#1A1A1A] rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQItem(categoryIndex, itemIndex)}
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
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
  );
}
