type NavOptionsType = {
  name: string;
  link: string;
  options?: {name: string, link: string}[];
};

export const navOptions: NavOptionsType[] = [
  {
    name: 'Games',
    options: [
        { name: 'Sprite Bite', link: '/games/sprite-bite' },
    ],
    link: '/games',
  },
  {
    name: 'About',
    link: '/about',
  },
];
