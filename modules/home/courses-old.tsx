'use client';

import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import SectionTitlebar from '@/common/section-titlebar';
import CourseCard from '@/common/course-card';

export default function Courses() {
  const headingId = 'explore-courses-title';

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section
      id='explore-courses'
      className='py-8 sm:py-10 md:py-12 lg:py-16'
      role='region'
      aria-labelledby={headingId}
    >
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8 '>
        <div className='flex flex-col gap-8'>
          {/* Header row */}
          <motion.div
            className='flex items-end justify-between gap-2'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitlebar
              title='Explore Our Courses'
              description='Discover expert-led, career-focused courses designed to boost your skills.'
              align='left'
            />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href='/enroll'>
                <Button
                  className='hidden md:flex bg-[#2D4AF1] text-white'
                  size='lg'
                  aria-label='Enroll in a course'
                  title='Enroll in a course'
                >
                  Enroll Now <ArrowRight aria-hidden='true' />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Course Grid */}
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
            role='list'
            aria-label='List of available courses'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div key={'1'} variants={cardVariants}>
              <CourseCard
                title='AI powered Fullstack Marketing'
                classes='10 classes'
                duration={'20 hours'}
                image='/assets/courses/course-2.avif'
              />
            </motion.div>
            <motion.div key={'2'} variants={cardVariants}>
              <CourseCard
                title='Generative AI PRO'
                classes='8 classes'
                duration={'16 hours'}
                image='/assets/courses/course-1.avif'
              />
            </motion.div>
            <motion.div key={'3'} variants={cardVariants}>
              <CourseCard
                title='FutureX: Data Science & ML with AI Tools'
                classes='12 classes'
                duration={'24 hours'}
                image='/assets/courses/course-3.avif'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
