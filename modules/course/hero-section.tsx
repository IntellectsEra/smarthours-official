import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';
import Logo from '@/common/logo';

import Link from 'next/link';

// hero-section.tsx (or a shared types file)

export type HeroData = {
  badge: string;
  titleHighlight: string;
  titleMain: string;
  description: string;
  primaryCta: {
    label: string;
    link: string;
  };
  secondaryCta: {
    label: string;
    link: string;
  };
  info: {
    startAt: string; // e.g. "March 15, 2025"
    duration: string; // e.g. "12 Weeks Duration"
  };
};

export function HeroSection({ data, setOpen }: any) {
  return (
    <section className='relative min-h-screen pt-10 md:pt-24 pb-10 md:pb-24  grid-pattern bg-gray-900'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background' />

      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='flex items-center justify-center mb-8 py-6'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>

        <Badge variant='secondary' className='mb-6 text-sm font-medium'>
          {data.badge}
        </Badge>

        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance'>
          <span className='text-accent'>{data.titleHighlight}</span>
          <br />
          {data.titleMain}
        </h1>

        <p className='text-xl md:text-xl text-muted-foreground mb-8 max-w-5xl mx-auto text-balance'>
          {data.description}
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
          <Button
            size='lg'
            className='text-lg px-8 py-6'
            onClick={() => setOpen((prev: any) => !prev)}
          >
            {data.primaryCta.label}
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='text-lg px-8 py-6 bg-transparent'
            asChild
          >
            <a href={'#curriculum'}>{data.secondaryCta.label}</a>
          </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto'>
          <div className='flex items-center justify-center gap-2 text-muted-foreground'>
            {' '}
            <Calendar className='w-5 h-5' /> <span>{data.info.startAt}</span>{' '}
          </div>{' '}
          <div className='flex items-center justify-center gap-2 text-muted-foreground'>
            {' '}
            <Clock className='w-5 h-5' /> <span>{data.info.duration}</span>{' '}
          </div>{' '}
          <div className='flex items-center justify-center gap-2 text-muted-foreground'>
            {' '}
            <Users className='w-5 h-5' /> <span>Limited seats available</span>{' '}
          </div>
        </div>
      </div>
    </section>
  );
}
