'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQ } from '@/types/course';

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className='py-20 bg-card/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-balance'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Got questions? We've got answers. Here are the most common questions
            about our program.
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm'
              >
                <AccordionTrigger className='text-left hover:no-underline py-6'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground leading-relaxed pb-6'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
