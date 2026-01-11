import { Container } from '@/common/container';

const faqs = [
  [
    {
      question: 'What is included in the internship program?',
      answer:
        'Our internship includes hands-on training, live projects, and expert mentorship. You gain practical skills and a job-ready portfolio.',
    },
    {
      question: 'Who can apply for the internship?',
      answer:
        'Students, freshers, and career changers can apply. No prior experience is required—just passion and willingness to learn.',
    },
    {
      question: 'Do I need technical knowledge to join?',
      answer:
        'Basic computer skills are enough. We train you from scratch with beginner-friendly, industry-aligned modules.',
    },
    {
      question: 'Is there any fee for the internship program?',
      answer:
        'Yes, a minimal program fee covers training, tools, and certification. It ensures you receive structured, high-quality learning support.',
    },
  ],
  [
    {
      question: 'How long is the internship program?',
      answer:
        'The internship duration ranges from 4 to 12 weeks depending on the track. Each week includes structured tasks and project work.',
    },
    {
      question: 'Will I work on real-world projects?',
      answer:
        'Yes, every intern works on live, industry-based projects to build practical experience and a strong portfolio.',
    },
    {
      question: 'Do I receive a certificate after completion?',
      answer:
        'Yes, you earn an internship completion certificate showcasing your skills and project experience—ideal for resumes and LinkedIn.',
    },
  ],
  [
    {
      question: 'Will I work onsite or from home during the internship?',
      answer:
        'Both options are available. You can choose onsite or WFH based on your comfort, project needs, and availability.',
    },
    {
      question: 'What career support do you offer?',
      answer:
        'We provide resume building, interview prep, and placement guidance to help you become job-ready.',
    },
    {
      question: 'How do I apply for the internship?',
      answer:
        'Simply fill out the online application form and complete the basic screening. Our team will guide you through the next steps.',
    },
  ],
];

export function Faqs() {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='relative overflow-hidden bg-slate-50 py-20 sm:py-32'
    >
      <img
        className='absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%] '
        src={'/assets/images/background-faqs.jpg'}
        alt=''
        width={1558}
        height={946}
      />
      <Container className='relative'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faq-title'
            className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'
          >
            Frequently asked questions
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3'
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='flex flex-col gap-y-8'>
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className='font-display text-lg/7 text-slate-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-sm text-slate-700'>{faq.answer}</p>
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
