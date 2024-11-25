import { Zap, Users, BarChart3, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

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

type ClientVideo = {
  name: string;
  operations: string;
  url: string;
  overview: string;
};

type OverviewItem = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

type ProductVideo = {
  title: string;
  url: string;
  description: string;
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

export const clientVideos: ClientVideo[] = [
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

export const overviewItems: OverviewItem[] = [
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

export const productVideos: ProductVideo[] = [
  {
    title: 'AI Inbox Manager',
    url: 'https://youtu.be/u8xN-hWSnoo',
    description:
      'Revolutionize Your Email Management. Say goodbye to inbox overload. Our AI Inbox Manager intelligently prioritizes, categorizes, and responds to emails, ensuring you stay organized and focused on what matters most.',
  },
  {
    title: 'AI Content Generator',
    url: 'https://youtu.be/rseJGWxFCVo',
    description:
      'Unleash Your Creative Potential. Creating high-quality content consistently is a challenge. Our AI Content Generator assists you in producing engaging articles, social media posts, marketing copy, and more, all tailored to your brand voice.',
  },
  {
    title: 'AI Marketing Analytics',
    url: 'https://youtu.be/zaQyYuYxSuQ',
    description:
      'Drive Data-Driven Decisions. Unlock deep insights into your marketing performance with our AI Marketing Analytics tool. Analyze data from multiple channels to optimize your strategies and maximize ROI.',
  },
];
