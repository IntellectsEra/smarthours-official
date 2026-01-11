import React from 'react';

export default function Logo() {
  return (
    <figure
      className='flex items-center gap-4'
      aria-label='Smart Hours branding'
    >
      <img
        className='w-auto h-8 object-contain'
        src='/assets/branding/smarthours-logo.svg'
        alt='Smart Hours Logo'
        title='Smart Hours'
        loading='lazy'
      />
      <img
        className='w-auto h-5 object-contain'
        src='/assets/branding/smarthours-typo-white.svg'
        alt='Smart Hours wordmark'
        title='Smart Hours'
        loading='lazy'
      />
    </figure>
  );
}
