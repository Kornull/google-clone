import Image from 'next/image';
import Link from 'next/link';

import { IoSettingsOutline } from 'react-icons/io5';

import HeaderButtons from '../Buttons/HeaderButtons';
import PageForm from '@/components/PageForm';

const SearchHeader = () => {
  return (
    <header className="flex flex-col md:flex-row items-center p-1 sm:p-4">
      <Link href="/">
        <Image
          src="/google-clone.png"
          width={300}
          height={300}
          className=" w-32 mb-2 mt-3 md:m-0"
          alt="Google Clone"
        />
      </Link>
      <div className=" flex items-center w-full justify-between">
        <PageForm />
        <div className=" flex items-center ml-1 md:ml-6">
          <IoSettingsOutline className="setting__icon hidden sm:inline-flex " />
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
