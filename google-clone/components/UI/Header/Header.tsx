import Link from 'next/link';

import HeaderButtons from '../Buttons/HeaderButtons';

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
        <HeaderButtons />
      </div>
    </header>
  );
};

export default Header;
