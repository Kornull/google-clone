'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';

import Loading from './UI/Loading';

const HomeSearch = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const handleSubmit = (
    ev: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>
  ): void => {
    ev.preventDefault();
    if (!inputValue.trim()) return;
    router.push(`/search/web/${inputValue}`);
  };

  const randomWordSearch = async (): Promise<void> => {
    setSearchLoading(true);
    const response: string = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res: Response) => res.json())
      .then((data: string[]) => data[0]);

    if (!response.trim()) return;

    router.push(`/search/web/${response}`);
    setTimeout(() => {
      setSearchLoading(false);
    }, 1000);
  };

  return (
    <>
      <form
        className=" flex w-full items-center mt-6 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <BiSearchAlt2 className="text-xl text-gray-400" />
        <input
          type="text"
          className=" flex-grow focus:outline-none text-xl"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-6">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className="btn flex justify-center items-center disabled:opacity-80"
          onClick={randomWordSearch}
          disabled={searchLoading}
        >
          {searchLoading ? <Loading /> : 'I am Feeling Lucky'}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
