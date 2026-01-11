import EnrollForm from '@/modules/enroll/enroll-form';
import EnrollInfo from '@/modules/enroll/enroll-info';
import React from 'react';

export default function page() {
  return (
    <section className='py-8 sm:py-9 md:py-10 lg:py-12 bg-[#F5F6F8]'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8 '>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-16'>
          <EnrollInfo />
          <EnrollForm />
        </div>
      </div>
    </section>
  );
}
