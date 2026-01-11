import type { Metadata } from 'next';
import ThemeProvider from '@/providers/theme-provider';

import { ThemeToggle } from '@/providers/theme-toggle';

export const metadata: Metadata = {
  title: 'SmartHours – Learn Live from Industry Experts',
  description:
    'SmartHours is a live learning platform where you can join interactive courses, connect with expert instructors, and gain real-world skills to grow your career.',
};

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
