import Image from 'next/image';

const Newsletter = () => {
  return (
    <section id='join-section' className='-mb-64 p-6'>
      <div className='relative z-30'>
        <div className='mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange-200 rounded-lg bg-newsletter bg-contain bg-no-repeat bg-right-bottom'>
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8'>
            <div className=''>
              <h3 className='text-4xl md:text-5xl font-bold mb-3'>
                {' '}
                Join Our Newsletter{' '}
              </h3>
              <h4 className='text-lg font-medium text-gray-700 mb-7'>
                Subscribe our newsletter for discounts, promo and many more.
              </h4>
              <div className='flex gap-2'>
                <input
                  type='Email address'
                  name='q'
                  className='py-4 w-full text-base px-4 bg-white transition-all duration-500 focus:border-primary focus:outline-1 rounded-lg pl-4'
                  placeholder='Enter your email'
                  autoComplete='off'
                />
                <button className='bg-[#2D4AF1] cursor-pointer text-white font-medium py-2 px-4 rounded-sm'>
                  Subscribe
                </button>
              </div>
            </div>
            <div className='hidden sm:block'>
              <div className='float-right -mt-32'>
                <Image
                  src={'/assets/images/newsletter/Free.svg'}
                  alt='Hand Image'
                  width={64}
                  height={64}
                  className='w-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
