import Header from '@/components/Header';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
          width="272"
          height="100"
          alt="google-clone"
        />
        <HomeSearch />
      </div>
    </>
  );
}
