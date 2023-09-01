import Image from 'next/image';

import Header from '@/components/UI/Header';
import HomeSearch from '@/components/HomeSearch';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-3 sm:mt-24">
        <Image
          className=" w-48 sm:w-72 sm:h-24"
          src="/google-clone.png"
          width={300}
          height={300}
          alt="google-clone"
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
}
