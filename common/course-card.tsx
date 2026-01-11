'use client';

import { ArrowUpRight, Book, CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CourseCard({
  title,
  duration,
  classes,
  image,
}: {
  title: string;
  classes?: string;
  duration: string;
  image: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      role='button'
      tabIndex={0}
      aria-label='Full Stack Web Development course card'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className='group border border-b-gray-300 p-4 rounded-md flex flex-col gap-4 cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-400'
    >
      {/* Course Image */}
      <div
        className='w-full h-48 lg:h-64 rounded-md'
        aria-label='Course preview image placeholder'
      >
        <img
          src={image}
          alt={`${title} course preview image`}
          className='w-full h-full object-cover rounded-md'
        />
      </div>

      {/* Course Info */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
            {/* <span
              className='text-sm font-normal text-gray-500 px-2 py-1 border border-b-gray-300 rounded-[0.3rem] flex items-center gap-1'
              aria-label='hours total duration'
            >
              <CalendarClock className='w-4 h-4' aria-hidden='true' />
              {duration}
            </span> */}
          </div>

          <div className='flex'>
            <div className='text-white bg-[#2568FF] w-10 h-10 rounded-full flex items-center justify-center'>
              <motion.div
                animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='origin-center'
              >
                <ArrowUpRight className='w-6 h-6' />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
