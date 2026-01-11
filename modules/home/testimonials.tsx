import { Container } from '@/common/container';
import SectionTitlebar from '@/common/section-titlebar';

const testimonials = [
  [
    {
      content:
        'This LMS is so intuitive! I can focus on learning without worrying about navigating complicated platforms.',
      author: {
        name: 'Sheryl Berge',
        role: 'Student at Tech Academy',
        image: '/assets/images/avatars/avatar-1.png',
      },
    },
    {
      content:
        'I needed help with a course assignment, and the support team responded immediately. Their guidance was invaluable!',
      author: {
        name: 'Amy Hahn',
        role: 'Student at Velocity Institute',
        image: '/assets/images/avatars/avatar-4.png',
      },
    },
  ],
  [
    {
      content:
        'The best part about this LMS is the interactive quizzes and progress tracking. I can see my improvement every week!',
      author: {
        name: 'Leland Kiehn',
        role: 'Student at Kiehn Learning Center',
        image: '/assets/images/avatars/avatar-5.png',
      },
    },
    {
      content:
        'I love how easy it is to manage my courses and assignments. Everything I need is in one place.',
      author: {
        name: 'Erin Powlowski',
        role: 'Instructor at Armstrong Academy',
        image: '/assets/images/avatars/avatar-2.png',
      },
    },
  ],
  [
    {
      content:
        'The certificate program gave me credibility and helped me land a new job. Highly recommend this LMS to anyone serious about learning.',
      author: {
        name: 'Peter Renolds',
        role: 'Student at West Learning',
        image: '/assets/images/avatars/avatar-3.png',
      },
    },
    {
      content:
        'The platform is reliable and easy to use, and the support team is always responsive. I feel confident recommending it to my peers.',
      author: {
        name: 'Amy Hahn',
        role: 'Instructor at Velocity Institute',
        image: '/assets/images/avatars/avatar-4.png',
      },
    },
  ],
];

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden='true' width={105} height={78} {...props}>
      <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z' />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id='testimonials'
      aria-label='What our customers are saying'
      className='bg-slate-50 py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl md:text-center'>
          <SectionTitlebar
            title='Loved by learners and educators'
            description='Our LMS makes learning and teaching effortless. With intuitive
            design and smart features, students and instructors can focus on
            what truly matters—growing skills and knowledge.'
            align='center'
          />
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3'
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                      <QuoteIcon className='absolute top-6 left-6 fill-slate-100' />
                      <blockquote className='relative'>
                        <p className='text-lg tracking-tight text-slate-900'>
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                        <div>
                          <div className='font-display text-base text-slate-900'>
                            {testimonial.author.name}
                          </div>
                          <div className='mt-1 text-sm text-slate-500'>
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className='overflow-hidden rounded-full bg-slate-50'>
                          <img
                            className='h-14 w-14 object-cover'
                            src={testimonial.author.image}
                            alt=''
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
