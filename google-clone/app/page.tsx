import Header from '@/components/Header';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-24">
        <Image
          className=" w-72 h-24"
          src="/google-clone.png"
          width={288}
          height={96}
          alt="google-clone"
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
}
