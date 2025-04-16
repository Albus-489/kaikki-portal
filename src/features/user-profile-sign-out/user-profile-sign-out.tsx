import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const UserProfileOrSignOut = () => {
  return (
    <div className="flex justify-cennter gap-3 items-center bg-[#444b9a39] shadow-md pl-3 rounded-xl transition-all ease-in-out">
      <Link
        href="profile"
        className="text-white hover:text-[#5656ff] transition-all ease-in-out flex text-sm items-center justify-center gap-2">
        <CircleUserRound />
      </Link>
      <button>Log out</button>
    </div>
  );
};
