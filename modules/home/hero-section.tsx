'use client';

import { Button } from '@/components/ui/button';
import { Asterisk, ChevronRight, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='bg-gray-900'>
      <main>
        <div className='relative isolate'>
          <svg
            aria-hidden='true'
            className='absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
          >
            <defs>
              <pattern
                x='50%'
                y={-1}
                id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
                width={200}
                height={200}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-800/20'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
              width='100%'
              height='100%'
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden='true'
            className='absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className='aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
            />
          </div>
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pt-18 pb-16 sm:pt-20 lg:px-8 lg:pt-24'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <div className='mt-14 sm:mt-32 lg:mt-0'>
                    <a href='#' className='inline-flex space-x-6'>
                      <div
                        className='flex items-center gap-2 border-gray-700 border  py-3 px-4 rounded-full'
                        role='status'
                        aria-live='polite'
                      >
                        <Asterisk
                          aria-hidden='true'
                          className='w-4 h-4 text-white'
                        />
                        <span className='text-sm font-normal text-white'>
                          Smart Hours is currently in beta
                        </span>
                        <FlaskConical
                          aria-hidden='true'
                          className='w-4 h-4 text-white'
                        />
                      </div>
                    </a>
                  </div>
                  <h1 className='mt-10 text-4xl font-semibold tracking-tight leading-tight text-pretty text-white sm:text-5xl'>
                    Worried About AI Taking Your Job? Learn Skills That Make You
                    Irreplaceable.
                  </h1>
                  <p className='mt-8  text-base  text-pretty text-gray-100 sm:max-w-md sm:text-lg/8 lg:max-w-none'>
                    Future-proof your career with Smart Hours – learn from
                    anywhere, get certified, and land internships with top
                    companies.
                  </p>
                  <div className='mt-10 flex items-center gap-x-6'>
                    <Link href='/enroll'>
                      <Button
                        aria-label='Get started with Smart Hours'
                        title='Get started with Smart Hours'
                      >
                        Get Started{' '}
                        <ChevronRight aria-hidden='true' className='ml-1' />
                      </Button>
                    </Link>
                    <a href='#' className='text-sm/6 font-semibold text-white'>
                      Learn more <span aria-hidden='true'>→</span>
                    </a>
                  </div>
                </div>
                <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                  <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-60'>
                    <div className='relative'>
                      <img
                        alt='Showcase Card 1'
                        src='/assets/images/showcase/card-1.avif'
                        className='aspect-2/4 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
                    </div>
                  </div>
                  <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-18'>
                    <div className='relative'>
                      <img
                        alt='Showcase Card 2'
                        src='/assets/images/showcase/card-2.avif'
                        className='aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
                    </div>
                    <div className='relative'>
                      <img
                        alt='Showcase Card 3'
                        src='/assets/images/showcase/card-3.avif'
                        className='aspect-2/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
                    </div>
                  </div>
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-28'>
                    <div className='relative'>
                      <img
                        alt='Showcase Card 4'
                        src='/assets/images/showcase/card-4.avif'
                        className='aspect-2/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
                    </div>
                    <div className='relative'>
                      <img
                        alt='Showcase Card 5'
                        src='/assets/images/showcase/card-5.avif'
                        className='aspect-2/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
