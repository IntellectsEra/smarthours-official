import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/tailwind.css';
import ThemeProvider from '@/providers/theme-provider';
import { Suspense } from 'react';
import { ThemeToggle } from '@/providers/theme-toggle';
import { Toaster } from '@/components/ui/sonner';
import MetaPixel from '@/providers/pixel';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SmartHours – Learn Live from Experts',
  description:
    'Join SmartHours for live, instructor-led online courses. Learn from experts with weekly Zoom sessions and real-time feedback.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={null}>
          <MetaPixel />
          {children}
        </Suspense>
        <Toaster position='bottom-left' />
      </body>
    </html>
  );
}
