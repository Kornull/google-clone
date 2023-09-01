import Image from 'next/image';

const Loading = () => {
  return (
    <Image src="/loading.svg" alt="load" width={200} height={200} className=" h-10 text-center" />
  );
};

export default Loading;
