import React from 'react';
import { LogoCmp } from '../Logo/Logo.cmp';
import { UserProfileOrSignOut } from '../UserProfileOrSignOut/UserProfileOrSignOut.cmp';

export const NavbarCmp = () => {
  return <div id='navbar' className="p-3 border-2 border-amber-50 sticky top-0 flex justify-between items-center select-none">
    <LogoCmp />
    <LogoCmp />
    <div role='button' className='cursor-pointer  border border-amber-100 p-2'>Sign In</div>
  </div>;
};
