type SectionTitlebarProps = {
  title: string;
  description: string;
  align?: 'left' | 'right' | 'center';
};

export default function SectionTitlebar({
  title,
  description,
  align = 'center',
}: SectionTitlebarProps) {
  const alignClass =
    align === 'left'
      ? 'justify-start items-start text-left'
      : align === 'right'
      ? 'justify-end items-end text-right'
      : 'items-center justify-center text-center';

  return (
    <hgroup
      className={`flex flex-col gap-2 ${alignClass}`}
      role='group'
      aria-labelledby={`section-heading-${title
        .replace(/\s+/g, '-')
        .toLowerCase()}`}
    >
      <h1
        id={`section-heading-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className='text-3xl font-semibold text-[var(--mi-text-black)]'
      >
        {title}
      </h1>

      <p className='text-base font-normal text-gray-500'>{description}</p>
    </hgroup>
  );
}
