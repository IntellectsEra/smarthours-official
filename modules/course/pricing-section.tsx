'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import type { PricingData } from '@/types/course';

interface PricingSectionProps {
  pricing: PricingData;
  setOpen: any;
}

export function PricingSection({ pricing, setOpen }: PricingSectionProps) {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-balance'>
            Investment in Your Future
          </h2>
          <p className='text-xl text-muted-foreground max-w-4xl mx-auto text-balance'>
            One Payment Today, Value That Lasts a Lifetime.
          </p>
        </div>

        <div className='max-w-2xl mx-auto'>
          <Card className='border-accent/20 bg-card/50 backdrop-blur-sm relative overflow-hidden'>
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50' />
            <CardHeader className='text-center pb-8'>
              {pricing.badge && (
                <Badge variant='secondary' className='w-fit mx-auto mb-4'>
                  {pricing.badge}
                </Badge>
              )}
              <CardTitle className='text-3xl mb-2'>
                {pricing.planName}
              </CardTitle>
              <div className='text-5xl font-bold text-accent mb-2'>
                {pricing.price.toLocaleString('en-IN')}
              </div>
              {pricing.originalPrice && (
                <div className='text-muted-foreground'>
                  <span className='line-through'>
                    {pricing.originalPrice.toLocaleString('en-IN')}
                  </span>{' '}
                  Early Bird Special
                </div>
              )}
              {pricing.monthlyInstallment && (
                <div className='text-sm text-muted-foreground mt-2'>
                  2 installments of{' '}
                  {Math.round(pricing.price / 2).toLocaleString('en-IN')}
                </div>
              )}
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-1 gap-3'>
                {pricing.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-accent flex-shrink-0' />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className='pt-6 space-y-4'>
                <Button
                  size='lg'
                  className='w-full text-lg py-6'
                  onClick={() => setOpen((prev: any) => !prev)}
                >
                  {pricing.ctaLabel}
                </Button>
                {/* {pricing.note && (
                  <div className='text-center text-sm text-muted-foreground'>
                    {pricing.note}
                  </div>
                )} */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
