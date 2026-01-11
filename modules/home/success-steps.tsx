'use client';

import { motion } from 'framer-motion';
import SectionTitlebar from '@/common/section-titlebar';
import SuccessCard from '@/common/success-card';

const successStepsData = [
  {
    title: 'Apply for the Internship',
    description:
      'Sign up to work on real-world projects, gain hands-on experience, and learn directly from industry experts.',
    icon: '/assets/vectors/enroll.svg',
  },
  {
    title: 'Choose Your Path',
    description:
      'Explore curated internship tracks and pick what excites you development, AI, design, or more.',
    icon: '/assets/vectors/choice.svg',
  },
  {
    title: 'Get Certified',
    description:
      'Complete real-world internship projects, gain hands-on experience, and earn a certificate you can proudly share.',
    icon: '/assets/vectors/certified.svg',
  },
];

export default function SuccessSteps() {
  const headingId = 'success-steps-title';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const, // ✅ Type-safe
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const, // ✅ FIXED
      },
    },
  };

  return (
    <section
      className='py-8 sm:py-10 md:py-12 lg:py-16 success-steps-bg min-h-[28rem]'
      role='region'
      aria-labelledby={headingId}
    >
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8 '>
        <div className='flex flex-col items-center justify-center gap-8'>
          {/* Section Title */}
          <motion.div
            variants={titleVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitlebar
              title='Your Roadmap to Success in 3 Moves'
              description='Sign up now to access live classes and expert-led learning.'
              align='center'
            />
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            className='w-full max-w-[70rem]'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
              role='list'
              aria-label='Success step cards'
            >
              {successStepsData.map((step, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <SuccessCard
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
