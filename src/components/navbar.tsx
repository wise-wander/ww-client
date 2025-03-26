import { cn } from '@/lib/utils';
import { Compass } from 'lucide-react';
import Link from 'next/link';
import MaxWidthContainer from './max-width-container';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

type INavigationItem = {
  href: string;
  title: string;
};

const navigationItems: INavigationItem[] = [
  { href: '/discover', title: 'Discover' },
  { href: '/review', title: 'Review' },
  { href: '/more', title: 'More' },
];

export default function Navbar() {
  return (
    <nav className='mt-2 border-b'>
      <MaxWidthContainer className='flex flex-row items-center justify-between gap-4 py-2'>
        <Link href='/' className='p-1'>
          <Compass size={36} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn('capitalize', navigationMenuTriggerStyle())}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex flex-row items-center gap-1'>
          <Button asChild>
            <Link href='/login'>Login</Link>
          </Button>
        </div>
      </MaxWidthContainer>
    </nav>
  );
}
