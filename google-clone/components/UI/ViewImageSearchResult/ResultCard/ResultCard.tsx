import Link from 'next/link';
import Parser from 'html-react-parser';

import { DataItemsType } from '@/types';

type CardProps = {
  data: DataItemsType;
};

export const ResultCard = ({ data }: CardProps) => {
  return (
    <div className=" mb-8 max-w-2xl">
      <div className=" flex flex-col group">
        <Link href={data.link} className="text-sm truncate text-gray-500">
          {data.formattedUrl}
        </Link>
        <Link
          href={data.link}
          className=" text-blue-800 font-medium text-xl md:text-2xl group-hover:underline group-hover:text-violet-500 "
        >
          {data.title}
        </Link>
      </div>
      <p className="">{Parser(data.htmlSnippet)}</p>
    </div>
  );
};
