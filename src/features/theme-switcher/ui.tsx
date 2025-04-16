'use client';

import { useTheme } from '@/shared/model/theme/hooks';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-[var(--color-primary)] text-[var(--color-bg)] px-4 py-2 rounded">
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};
