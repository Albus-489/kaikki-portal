'use client';

import React, { useState } from 'react';
import { LogoCmp } from '../../shared/ui/logo/Logo.cmp';
import { ThemeSwitcher } from '../theme-switcher/ui';
import { GlobalButton } from '../../shared/ui/button/button';
import Link from 'next/link';
import clsx from 'clsx';
import { navOptions } from '@/shared/constants/nav-options';
import { ArrowLeft } from 'lucide-react';

export const NavbarCmp = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="relative">
      <div
        id="global-navbar"
        className="p-3 sticky top-0 flex justify-between items-center select-none bg-[var(--color-bg-soft)] z-10">
        {/* LOGO + OPTIONS */}
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <LogoCmp />
          </Link>
          <ul className="hidden gap-2 sm:flex">
            {navOptions.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.link}>
                    <GlobalButton text={item.name} variant="neutral" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* SWITCH + BURGER */}
        <GlobalButton
          variant="neutral"
          text="☰"
          className="block sm:hidden p-2 border border-[var(--color-border)] hover:border-[var(--color-accent)]"
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        />
        <div className="hidden sm:block">
          <ThemeSwitcher />
        </div>
      </div>

      {/* SideNav */}
      <div
        className={clsx(
          'fixed top-0 right-0 h-full w-64 bg-[var(--color-bg-soft)]',
          'transition-transform transform',
          isSideNavOpen ? 'translate-x-0' : 'translate-x-full',
          'sm:hidden z-20'
        )}>
        <div className="p-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h2
              className="text-lg font-bold text-[var(--color-fg)] border-[var(--color-border)]"
              onClick={() => setIsSideNavOpen(false)}>
              <ArrowLeft />
            </h2>
            <ThemeSwitcher />
          </div>

          <ul className="mt-4 space-y-2">
            {navOptions.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => setIsSideNavOpen(false)}
                    href={item.link}>
                    <GlobalButton text={item.name} variant='neutral' className='w-full text-center' />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-[#00000056] bg-opacity-50 sm:hidden z-10"
          onClick={() => setIsSideNavOpen(false)}
        />
      )}
    </div>
  );
};
