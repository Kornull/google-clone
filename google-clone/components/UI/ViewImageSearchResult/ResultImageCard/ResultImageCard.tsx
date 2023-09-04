import Link from 'next/link';

import { ImageItemsType } from '@/types';

type CardProps = {
  data: ImageItemsType;
};

export const ResultImageCard = ({ data }: CardProps) => {
  return (
    <div className=" group max-w-xl w-full">
      <Link href={data.image.contextLink}>
        <img
          src={data.link}
          alt={data.title}
          className=" h-30 sm:h-60 group-hover:shadow-xl mb-2 w-full object-contain transition-shadow"
        />
      </Link>
      <Link href={data.image.contextLink}>
        <h2 className=" group-hover:underline truncate text-xl">{data.title}</h2>
      </Link>
      <Link href={data.image.contextLink}>
        <p className=" group-hover:underline text-gray-500">{data.displayLink}</p>
      </Link>
    </div>
  );
};
