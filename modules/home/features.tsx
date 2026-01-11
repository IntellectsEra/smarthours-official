'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTitlebar from '@/common/section-titlebar';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
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

export default function Features() {
  return (
    <section className='py-8 sm:py-10 md:py-12 lg:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8 '>
        <div className='flex flex-col items-center justify-center gap-8'>
          <motion.div
            variants={titleVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitlebar
              title='Here’s What Makes Us Stand Out'
              description='We’re built to help you learn, apply, and succeed.'
              align='center'
            />
          </motion.div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {/* Card 1 */}
            <motion.div
              className='bg-[#2568FF] rounded-lg w-full sm:col-span-1 flex flex-col'
              variants={fadeInVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <div className='flex items-start justify-between p-6'>
                <h1 className='text-2xl md:text-4xl font-bold text-white max-w-[80%]'>
                  Learn from Industry Experts
                </h1>
                <div className='bg-white text-[#2568FF] w-10 h-10 rounded-full flex items-center justify-center'>
                  <ArrowUpRight className='w-6 h-6' />
                </div>
              </div>
              <div className='pl-10 pr-1 pb-1'>
                <img
                  src='/assets/features/card-1-image.webp'
                  alt='Learn from experts'
                  className='w-full h-auto'
                />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className='feature-card-2-bg rounded-lg w-full h-full lg:col-span-2 p-6'
              variants={fadeInVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center h-full'>
                <div className='flex flex-col gap-4 bg-white p-6 rounded-lg'>
                  <h1 className='text-xl md:text-3xl font-bold text-[var(--mi-text-black)]'>
                    Project-Based Confidence
                  </h1>
                  <p className='text-base text-gray-800 max-w-[80%] leading-relaxed'>
                    Work on real projects that showcase your skills and build
                    your confidence.
                  </p>
                </div>
                <div className='feature-card-image w-full h-40 md:h-full rounded-lg'></div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className='bg-[#F7F7F7] rounded-lg w-full sm:col-span-1 p-6 flex flex-col gap-4'
              variants={fadeInVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold text-[var(--mi-text-black)]'>
                  Live & Interactive
                </h1>
                <p className='text-base text-gray-800 max-w-[80%] leading-relaxed'>
                  Engage in live sessions, ask questions, and learn
                  collaboratively with peers.
                </p>
              </div>
              <div className='flex items-center justify-center'>
                <img
                  src='/assets/features/card-3-image.webp'
                  alt='Live interactive'
                  className='w-full h-auto'
                />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className='bg-[#52d4c3] rounded-lg w-full sm:col-span-1 flex flex-col justify-between'
              variants={fadeInVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <div className='p-6 flex flex-col gap-3'>
                <h1 className='text-2xl font-bold text-white'>
                  Guaranteed Internships
                </h1>
                <p className='text-base text-white max-w-[80%] leading-relaxed'>
                  Finish your course and get placed in internships with trusted
                  hiring partners.
                </p>
              </div>
              <div className='pl-8 pb-0 pr-0'>
                <img
                  src='/assets/features/card-4-image.webp'
                  alt='Internships'
                  className='w-full h-full rounded-br-lg'
                />
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className='bg-[#F7F7F7] rounded-lg w-full sm:col-span-1 p-6 flex flex-col gap-4'
              variants={fadeInVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <img
                src='/assets/features/card-5-image.webp'
                alt='AI & Tech'
                className='w-full h-auto'
              />
              <div className='flex flex-col gap-3'>
                <h1 className='text-xl md:text-2xl font-bold text-[var(--mi-text-black)]'>
                  Cutting-edge AI & Tech
                </h1>
                <p className='text-base text-gray-800 max-w-[80%] leading-relaxed'>
                  We teach what today’s jobs demand, not yesterday’s syllabus.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
