import Search from '@/components/search';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-12 text-center text-5xl/relaxed font-extrabold'>
        Where to?
      </h1>
      <Search />
    </div>
  );
}
