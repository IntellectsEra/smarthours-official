'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Logo from './logo';

export default function PublicHeader() {
  return (
    <header className='w-full absolute top-0 left-0 z-50'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <nav
          className='w-full h-24 flex items-center justify-start md:justify-between'
          role='navigation'
          aria-label='Main site navigation'
        >
          {/* Branding */}
          <Link href='/'>
            {' '}
            <Logo />
          </Link>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center gap-8'>
            <Link
              href='#explore-courses'
              // onClick={(e) => {
              //   setTimeout(() => {
              //     const section = document.getElementById('explore-courses');
              //     section?.scrollIntoView({ behavior: 'smooth' });
              //   }, 100);
              // }}
              className='text-sm font-normal text-gray-300 hover:text-gray-400'
              aria-label='Explore courses'
            >
              Intern programs
            </Link>

            <Link
              href='/school/future-minds'
              // onClick={(e) => {
              //   setTimeout(() => {
              //     const section = document.getElementById('explore-courses');
              //     section?.scrollIntoView({ behavior: 'smooth' });
              //   }, 100);
              // }}
              className='text-sm font-normal text-gray-300 hover:text-gray-400'
              aria-label='Explore courses'
            >
              School programs
            </Link>

            <Link
              href='#'
              className='text-sm font-normal text-gray-300 hover:text-gray-400'
              aria-label='Explore courses'
            >
              Projects Showcase
            </Link>

            <Link
              href='#'
              className='text-sm font-normal text-gray-300 hover:text-gray-400'
              aria-label='Explore courses'
            >
              Blogs
            </Link>

            <Link href='/enroll'>
              <Button
                aria-label='Get started with Smart Hours'
                title='Get started with Smart Hours'
              >
                Contact Us <ChevronRight aria-hidden='true' className='ml-1' />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
