import React from 'react';
import { navOptions } from '../../shared/constants/nav-options';
import Link from 'next/link';

const Page = () => {
  const games = navOptions.find((item) => item.name === 'Games')?.options || [];
  return (
    <div className='flex flex-col items-center mt-5 px-5'>
      <h1 className="text-center p-2 border sm:w-1/3 w-full">Games</h1>
      <ul className='sm:w-1/3 w-full bg-[var(--color-border)] mt-3 p-2 flex gap-4 flex-wrap justify-center'>
        {games.map((item, index) => {
          return (
            <li key={index} className='p-2 underline'>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
