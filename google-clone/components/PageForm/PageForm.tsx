'use client';

import { ChangeEvent, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const PageForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <form className="  flex flex-grow max-w-3xl justify-between border border-gray-200 px-2 py-1 ml-0 mr-0 md:ml-10 md:mr-5 sm:px-4  rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl ">
      <input
        type="text"
        className=" w-full focus:outline-none text-xl"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <AiOutlineClose className="text-4xl pr-1 sm:pr-2 text-gray-400 " />
      <BsFillMicFill className="hidden sm:inline-flex pl-2 text-4xl text-blue-700 border-s " />
      <BiSearchAlt2 className="hidden sm:inline-flex text-4xl pl-2 text-blue-700" />
    </form>
  );
};

export default PageForm;
