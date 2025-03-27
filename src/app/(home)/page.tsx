import Hero from '@/assets/hero.jpg';
import Search from '@/components/home/search';
import MaxWidthContainer from '@/components/max-width-container';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Search />
      <MaxWidthContainer>
        <Image
          priority
          src={Hero}
          alt='Da Nang'
          className='h-auto max-h-[600px] w-full rounded-xl object-cover object-top'
        />
      </MaxWidthContainer>
      <MaxWidthContainer>
        <h2 className='text-2xl font-semibold'>
          Explore the most famous attractions
        </h2>
        <p className='mt-1'>2025&apos;s Travelers&apos; Choice</p>
        <div></div>
      </MaxWidthContainer>
    </div>
  );
}
