import INavigationItem from '@/types/navigation-item';

type IFooterNavigation = {
  label: string;
  items: INavigationItem[];
};

const footerNavigationItems: IFooterNavigation[] = [
  {
    label: 'Destinations',
    items: [
      { title: 'Hotels', href: '/' },
      { title: 'Things to do', href: '/' },
      { title: 'Restaurants', href: '/' },
    ],
  },
  {
    label: 'Do Business With Us',
    items: [{ title: 'Add a Place', href: '/' }],
  },
  {
    label: 'About WiseWander',
    items: [
      { title: 'Contact Us', href: '/' },
      { title: 'About Us', href: '/' },
    ],
  },
];

export default footerNavigationItems;
