'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from '@/shared/model/theme/hooks';

export const LogoCmp = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colors = ['success', 'info', 'warning', 'danger'] as const;

  const D_IN = 0.3;
  const D_OUT = 0.7;

  return (
    <div id="logo" className="">
      <div
        className={clsx(
          'flex items-center gap-0.5 p-1 rounded-md cursor-pointer',
          'border-2 border-[var(--color-border)]'
        )}>
        {colors.map((color, idx) => {
          const topVisible = isDark ? idx % 2 === 0 : idx % 2 !== 0;
          const bgVar = `var(--color-${color})`;

          return (
            <div key={color} className="h-8 w-4 grid grid-rows-2 gap-0.5">
              {['top', 'bottom'].map((pos) => {
                const show = pos === 'top' ? topVisible : !topVisible;
                return (
                  <div
                    key={pos}
                    className="relative h-4 w-4 border-2 border-[var(--color-border)] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      style={{ backgroundColor: bgVar }}
                      initial={false}
                      animate={{ opacity: show ? 1 : 0 }}
                      transition={{
                        opacity: { duration: show ? D_IN : D_OUT },
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
