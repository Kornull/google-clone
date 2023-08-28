'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (
    ev: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>
  ): void => {
    ev.preventDefault();
    if (!inputValue.trim()) return;
    router.push(`/search/web?searchInfo=${inputValue}`);
  };

  const randomWordSearch = async (): Promise<void> => {
    try {
      const response: Response = await fetch('https://random-word-api.herokuapp.com/word');
      const result: string[] = await response.json();
      router.push(`/search/web?searchInfo=${result[0]}`);
    } catch (error) {
      return;
    }
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
        <button className="btn" onClick={randomWordSearch}>
          I am Feeling Lucky
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
