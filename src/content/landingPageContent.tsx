type FAQCategory = {
  category: string;
  icon: React.ReactNode;
  items: {
    question: string;
    answer: string;
  }[];
};

type Product = {
  title: string;
  timeline: string;
  description: string;
  position: string;
  color: string;
};

export const faqList: FAQCategory[] = [
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

export const products: Product[] = [
  {
    title: 'AI Talent Management',
    timeline: '30 Days',
    description:
      'Advanced AI-powered system for recruiting, employee development, and workforce optimization.',
    position: 'top',
    color: '#323232',
  },
  {
    title: 'AI Inbox Manager',
    timeline: '30 Days',
    description:
      'Smart email management system that prioritizes, categorizes, and automates responses.',
    position: 'bottom',
    color: '#666666',
  },
  {
    title: 'AI Content Generator',
    timeline: '30 Days',
    description:
      'Automated content creation tool for marketing materials, social media, and documentation.',
    position: 'top',
    color: '#999999',
  },
  {
    title: 'AI Marketing Analytics',
    timeline: '30 Days',
    description:
      'Comprehensive analytics platform for tracking and optimizing marketing campaigns.',
    position: 'bottom',
    color: '#323232',
  },
  {
    title: 'AI Invoice & Expenses',
    timeline: '30 Days',
    description:
      'Automated system for managing invoices, track expenses, and financial reporting.',
    position: 'top',
    color: '#FFFFFF',
  },
];
