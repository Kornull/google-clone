'use client';

import { ReadonlyURLSearchParams, useSearchParams, useRouter } from 'next/navigation';

import { ChangeEvent, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { UserSettingsBtn } from '@/types';

const PageForm = () => {
  const router = useRouter();
  const params: ReadonlyURLSearchParams = useSearchParams();
  const search: string | null = params.get('item');
  const [inputValue, setInputValue] = useState<string>(search || '');

  const handleSubmit = (
    ev: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>
  ): void => {
    ev.preventDefault();
    let path = '';
    const currentUrl: string = window.location.href;

    if (currentUrl.includes(UserSettingsBtn.WEB)) path = UserSettingsBtn.WEB;
    if (currentUrl.includes(UserSettingsBtn.IMAGE)) path = UserSettingsBtn.IMAGE;

    if (!inputValue.trim()) return;

    router.push(`/search/${path}/${inputValue}?item=${inputValue}`);
  };

  return (
    <form
      className="  flex flex-grow max-w-3xl justify-between border border-gray-200 px-2 py-1 ml-0 mr-0 md:ml-10 md:mr-5 sm:px-4  rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className=" w-full focus:outline-none text-xl"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <AiOutlineClose
        className="text-4xl pr-1 sm:pr-2 text-gray-400 hover:cursor-pointer hover:text-gray-600 transition-colors ease-linear duration-300"
        onClick={() => setInputValue('')}
      />
      <BsFillMicFill className="hidden sm:inline-flex pl-2 text-4xl text-blue-700 border-s hover:cursor-pointer hover:text-blue-400 transition-colors ease-linear duration-300" />
      <button>
        <BiSearchAlt2 className=" hidden items-center sm:inline-flex text-4xl pl-2 text-blue-700 hover:cursor-pointer hover:text-blue-400 transition-colors ease-linear duration-300 " />
      </button>
    </form>
  );
};

export default PageForm;
