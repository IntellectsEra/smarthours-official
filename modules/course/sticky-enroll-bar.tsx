'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';
import { HeroData } from './hero-section';
import { PricingData } from '@/types/course';

interface StickyEnrollBarProps {
  data: HeroData;
  price: PricingData;
  title: String;
  setOpen: any;
}

export function StickyEnrollBar({
  data,
  price,
  title,
  setOpen,
}: StickyEnrollBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border/50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='flex-1'>
            <div className='font-semibold text-center sm:text-left'>
              Ready to launch your {title} Career ?
            </div>
            <div className='hidden lg:flex text-sm text-muted-foreground gap-2'>
              Join Advanced Career Program • Next Batch {data.info.startAt}
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='hidden sm:block text-right'>
              <div className='font-bold text-accent'>
                ₹{price.price.toLocaleString('en-IN')}
              </div>
              <div className='text-xs text-muted-foreground'>
                Save ₹
                {(price.originalPrice - price.price).toLocaleString('en-IN')}{' '}
                this month
              </div>
            </div>

            <Button
              size='lg'
              className='px-8 w-full sm:w-auto'
              onClick={() => setOpen((prev: any) => !prev)}
            >
              Enroll Now
            </Button>

            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsVisible(false)}
              className='p-2 hidden sm:block'
            >
              <X className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
