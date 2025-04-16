import React from 'react';
import { LogoCmp } from '../logo/Logo.cmp';

export const NavbarCmp = () => {
  return (
    <div
      id="global-navbar"
      className="p-3 border-2 border-amber-50 sticky top-0 flex justify-between items-center select-none">
      <div
        role="button"
        className="cursor-pointer  border border-amber-100 p-2">
        Sign In
      </div>
      <div
        role="button"
        className="cursor-pointer  border border-amber-100 p-2">
        Sign In
      </div>
      <div
        role="button"
        className="cursor-pointer  border border-amber-100 p-2">
        Sign In
      </div>
    </div>
  );
};
