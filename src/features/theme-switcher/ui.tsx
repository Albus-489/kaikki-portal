'use client';

import { useTheme } from '@/shared/model/theme/hooks';
import { GlobalButton } from '@/shared/ui/button/button';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <GlobalButton
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        text={theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        variant='secondary'
      />
    </>
  );
};
