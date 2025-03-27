import { Compass, Copyright } from 'lucide-react';
import Link from 'next/link';
import MaxWidthContainer from '../max-width-container';
import { Button } from '../ui/button';
import footerNavigationItems from './footer-navigation';

export default function Footer() {
  return (
    <footer className='bg-muted text-muted-foreground py-10'>
      <MaxWidthContainer className='flex flex-row gap-32'>
        <div className='flex grow flex-row items-start gap-4 text-sm'>
          <Compass size={36} className='text-foreground' />
          <div className='flex flex-col items-start justify-between'>
            <div className='flex flex-row items-center gap-1'>
              <span>Copyright</span>
              <Copyright size={12} />
              <span className='text-nowrap'>2025 WiseWander.</span>
            </div>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-24'>
          {footerNavigationItems.map((footerItem) => (
            <div className='flex flex-col gap-1' key={footerItem.label}>
              <h3 className='mb-0.5 px-3'>{footerItem.label}</h3>
              <div className='flex flex-col'>
                {footerItem.items.map((item) => (
                  <Link href={item.href} key={item.title} passHref>
                    <Button variant='link' size='sm' className='cursor-pointer'>
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
