export function StatsSection() {
  const stats = [
    {
      number: '100%',
      label: 'Start-Up Program',
      description:
        'Start-up launch Real-world case studies Funding, branding & growth hacks',
    },
    {
      number: '50+',
      label: 'IT Project Management Program',
      description:
        'Learn to manage projects step by step top tools ,deadlines, and deliverables',
    },
    {
      number: '20+',
      label: 'Freelance Program',
      description:
        'Work on live freelance projects Learn pricing, pitching & client skills Build a global-ready portfolio',
    },
  ];

  return (
    <section className='py-20 border-t border-border'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div>
            <h2 className='text-3xl md:text-3xl font-bold mb-6 text-balance'>
              India’s First Futuristic Career Program
            </h2>
          </div>
          {stats.map((stat, index) => (
            <div key={index} className='text-left'>
              <div className='text-3xl md:text-4xl font-bold text-accent mb-2'>
                {stat.number}
              </div>
              <div className='font-semibold mb-1'>{stat.label}</div>
              <div className='text-sm text-muted-foreground'>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
