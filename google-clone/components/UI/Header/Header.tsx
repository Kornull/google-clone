import Link from 'next/link';

import { TbGridDots } from 'react-icons/tb';

const Header = () => {
  return (
    <header className="flex justify-end p-4 text-sm">
      <div className="flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          className="hover:underline hover:text-indigo-700  transition-colors"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          className="hover:underline hover:text-indigo-700  transition-colors"
        >
          Image
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer transition-colors" />
        <button className=" bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
