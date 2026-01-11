'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = (theme ?? resolvedTheme) === 'dark';

  return (
    <div className='fixed right-4 top-4 z-50'>
      <Button
        variant='outline'
        size='icon'
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className='bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      >
        {isDark ? (
          <Sun className='h-5 w-5' aria-hidden='true' />
        ) : (
          <Moon className='h-5 w-5' aria-hidden='true' />
        )}
        <span className='sr-only'>{isDark ? 'Light' : 'Dark'}</span>
      </Button>
    </div>
  );
}
