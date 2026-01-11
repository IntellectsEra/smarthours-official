type SuccessCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function SuccessCard({
  title,
  description,
  icon,
}: SuccessCardProps) {
  const headingId = `successcard-title-${title
    .replace(/\s+/g, '-')
    .toLowerCase()}`;

  return (
    <article
      className='flex flex-col items-center justify-center text-center gap-2 rounded-md bg-white py-12 px-8 mi-card'
      role='group'
      aria-labelledby={headingId}
    >
      <img
        src={icon}
        alt={`${title} icon`}
        title={title}
        className='w-16 h-16 mb-4'
        loading='lazy'
      />

      <h3
        id={headingId}
        className='text-lg font-bold text-[var(--mi-text-black)]'
      >
        {title}
      </h3>

      <p className='text-xs text-gray-500 max-w-[90%] leading-relaxed'>
        {description}
      </p>
    </article>
  );
}
