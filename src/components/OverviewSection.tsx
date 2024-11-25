import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, Users, Zap } from 'lucide-react';
import Link from 'next/link';

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

export default function OverviewSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]">
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
              FirmOS is the all-in-one platform designed exclusively for
              fractional CFOs and accounting firms. With a focus on Business
              Development, Talent, Operations, and Finance, we provide
              innovative tools to streamline processes, attract high-value
              clients, and empower your team—all while ensuring financial
              stability.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6"
          >
            <p className="text-[#E5E5E5] leading-relaxed">
              Our mission is to help accounting firms overcome growth challenges
              and scale sustainably with AI-powered automation and strategic
              systems. Whether you&apos;re looking to improve workflow
              efficiency, retain top talent, or build a consistent client
              pipeline, FirmOS is here to transform the way you work and grow
              your business.
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
              <item.icon className="w-12 h-12 text-[#FE7443] mb-4" />
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                {item.title}
              </h3>
              <p className="text-[#CCCCCC]">{item.description}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6 hover:bg-[#999999]/40 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1"
          >
            <Clock className="w-12 h-12 text-[#FE7443] mb-4" />
            <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
              FIRMOS CONSULTING
            </h3>
            <p className="text-[#CCCCCC] mb-4">
              Bi-weekly strategy sessions with tailored advice, templates, and
              actionable steps to optimize operations, strategies, and team
              performance.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-[#E5E5E5] mb-6">
            Let&apos;s redefine success in the accounting industry—together.
          </p>
          <Link
            href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-8 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
