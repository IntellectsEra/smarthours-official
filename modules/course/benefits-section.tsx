'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Briefcase,
  Users,
  Award,
  Megaphone,
  IndianRupee,
} from 'lucide-react';
import type { BenefitData } from '@/types/course';

interface BenefitsSectionProps {
  benefits: BenefitData[];
}

const icons = [Code, Briefcase, Users, IndianRupee, Award, Megaphone];

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className='py-20 bg-card/50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-balance'>
            Why Choose Our Program?
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            We don't just teach you to code. We prepare you for a successful
            career in tech with comprehensive support and industry connections.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={index}
                className='border-border/50 bg-card/50 backdrop-blur-sm'
              >
                <CardContent className='p-8'>
                  <Icon className='w-12 h-12 text-accent mb-4' />
                  <h3 className='text-xl font-semibold mb-3'>
                    {benefit.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
