'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const searchItem = searchParams.get('item');

  const startIndexPage = Number(searchParams.get('start')) | 1;

  return (
    <div className="flex items-center justify-center sm:justify-start m-auto mt-8 md:m-0 md:mt-9 md:pl-56  w-full max-w-xl">
      <div className="flex space-x-4 items-baseline">
        {startIndexPage > 10 && (
          <Link
            href={`${pathname}?item=${searchItem}&start=${startIndexPage - 10}`}
            className="group"
          >
            <span className=" flex flex-col items-center pt-1">
              <BsChevronLeft className=" w-7 h-6  text-blue-600 group-hover:text-blue-900" />
              <h3 className="text-xl text-blue-600 group-hover:underline group-hover:text-blue-900">
                Prev
              </h3>
            </span>
          </Link>
        )}
        <Image src="/google-clone.png" width={200} height={60} className=" w-24 h-8" alt="" />
        {startIndexPage < 90 && (
          <Link
            href={`${pathname}?item=${searchItem}&start=${startIndexPage + 10}`}
            className=" group"
          >
            <span className=" flex flex-col items-center pt-1">
              <BsChevronRight className=" w-7 h-6  text-blue-600 group-hover:text-blue-900" />
              <h3 className="text-xl text-blue-600 group-hover:underline group-hover:text-blue-900">
                Next
              </h3>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaginationButtons;
