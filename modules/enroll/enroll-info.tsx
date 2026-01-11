import { MapPin, Phone, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function EnrollInfo() {
  return (
    <section>
      <div className='flex items-center gap-2 text-[#2D4AF1]'>
        <TrendingUp />
        <h2 className='text-base font-normal'>Power your progress</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <h1
          id='showcase-heading'
          className='text-[clamp(1.5rem,6vw,2rem)] sm:text-[clamp(1.5rem,10vw,2.5rem)] md:text-[clamp(1.5rem,12vw,3rem)] font-medium text-[var(--mi-text-black)]'
        >
          Start Your Skill Building Journey Today !
        </h1>

        <div className='max-w-[32rem]'>
          <p className='text-sm text-gray-700 leading-loose'>
            Future-proof your career with Smart Hours – learn from anywhere, get
            certified, and land internships with top companies.
          </p>
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          <div className='flex items-start gap-4'>
            <MapPin className='mt-2 h-6 w-6 text-blue-500' />

            <p className='text-lg font-medium text-gray-700 leading-loose'>
              Door No - 18/1/7, Green garden, SS Avenue Sholavandhan, Madurai -
              625214.
            </p>
          </div>

          <div className='flex items-start gap-4'>
            <Phone className='mt-2 h-5 w-5 text-blue-500' />

            <div className='flex items-center gap-2'>
              <Link href='tel:+919342042607'>
                <p className='text-lg font-medium text-gray-700 leading-loose cursor-pointer'>
                  +91 93420 42607,
                </p>
              </Link>
              <Link href='tel:+918124342607'>
                <p className='text-lg font-medium text-gray-700 leading-loose cursor-pointer'>
                  +91 81243 42607
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-6'>
        <h2 className='text-2xl font-semibold'>Be one of us</h2>

        <div>
          <img src='/assets/vectors/contact-users.webp' alt='ContactImage' />
        </div>
      </div>
    </section>
  );
}
