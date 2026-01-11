import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Testimonial } from '@/types/course';

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className='py-20 bg-card/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-balance'>
            Success Stories
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Join hundreds of graduates who've transformed their careers and
            landed high-paying jobs at top tech companies.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='border-border/50 bg-card/50 backdrop-blur-sm'
            >
              <CardContent className='p-8'>
                <div className='flex items-center gap-4 mb-6'>
                  <Avatar className='w-12 h-12'>
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>{testimonial.name}</div>
                  </div>
                </div>
                <p className='text-muted-foreground mb-4 leading-relaxed'>
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
