import MapLocation from '@/common/map-location';
import PublicHeader from '@/common/public-header';
import Footer from '@/modules/home/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enroll in Live Online Courses – SmartHours',
  description:
    'Secure your spot in our expert-led, live Zoom courses. Enroll in a SmartHours batch and start learning with real-time guidance today.',
};

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='main'>
      <div className='w-full h-24 bg-gray-900 relative isolate'>
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
        <PublicHeader />
      </div>
      {children}
      <MapLocation />
      <Footer />
    </main>
  );
}
