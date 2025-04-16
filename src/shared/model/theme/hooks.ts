import { useContext, useEffect } from 'react';
import { ThemeContext } from './context';

export function useTheme() {
  const ctx = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(ctx.theme);
  }, [ctx.theme]);

  return ctx;
}
