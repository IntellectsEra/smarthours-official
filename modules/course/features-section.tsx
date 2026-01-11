'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { FeatureCategory } from '@/types/course';
import { Asterisk } from 'lucide-react';

interface FeaturesSectionProps {
  features: FeatureCategory[];
  tools: string[];
  title: string;
}

export function FeaturesSection({
  features,
  tools,
  title,
}: FeaturesSectionProps) {
  return (
    <section className='py-20' id="curriculum">
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-balance'>
            {title} Curriculum
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <Card key={index} className='border-border/50'>
              <CardHeader>
                <CardTitle className='text-xl'>{feature.category}</CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h4 className='font-semibold mb-3 text-muted-foreground'>
                    Technologies
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {feature.skills.map((skill, i) => (
                      <Badge key={i} variant='secondary'>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className='font-semibold mb-3 text-muted-foreground'>
                    Projects
                  </h4>
                  <ul className='space-y-2'>
                    {feature.projects.map((project, i) => (
                      <li key={i} className='flex items-center gap-2'>
                        <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                        <span className='text-sm'>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-20'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl  font-bold mb-6 text-balance'>
              Tools you will learn with us
            </h2>

            <div>
              <div className='flex flex-wrap items-center justify-center gap-2'>
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-2 border-gray-700 border  py-3 px-4 rounded-full'
                    role='status'
                    aria-live='polite'
                  >
                    <Asterisk
                      aria-hidden='true'
                      className='w-4 h-4 text-white'
                    />
                    <span className='text-sm font-normal text-white'>
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
