import Hero from '@/assets/hero.jpg';
import Search from '@/components/home/search';
import MaxWidthContainer from '@/components/max-width-container';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Search />
      <MaxWidthContainer className='mt-16'>
        <Image
          src={Hero}
          alt='Da Nang symbol'
          className='h-auto max-h-[600px] w-full rounded-xl object-cover object-top'
        />
      </MaxWidthContainer>
    </div>
  );
}
