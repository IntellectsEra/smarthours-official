import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section
      id='get-started-today'
      className='relative overflow-hidden bg-blue-600 py-32'
    >
      <img
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        src={'/assets/images/background-call-to-action.jpg'}
        alt=''
        width={2347}
        height={1244}
      />
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8 relative'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-bold text-3xl tracking-tight text-white sm:text-5xl'>
            Start Learning Today
          </h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            Kickstart your journey with expert-led internship training,
            real-world projects, and hands-on mentorship. Join now to build
            skills that get you hired.
          </p>
          <Button
            color='white'
            className='mt-10 bg-white text-black hover:bg-gray-200 hover:text-black'
          >
            Upscale your skills with Smart Hours
          </Button>
        </div>
      </div>
    </section>
  );
}
