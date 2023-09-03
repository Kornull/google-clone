'use client';

enum SearchSettings {
  WEB = 'web',
  IMAGE = 'image',
}

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const SearchHeaderOptions = () => {
  const [search, setSearch] = useState<string>(SearchSettings.WEB);
  const pathname = usePathname();
  return (
    <div className=" flex items-start px-6 py-3 border-b-2 border-gray-200">
      <div className=" flex items-center gap-1">
        <button className={`page__search-btn ${search === SearchSettings.WEB ? 'active' : ''}`}>
          All
        </button>
        <button className={`page__search-btn ${search === SearchSettings.WEB ? '' : 'active'}`}>
          Image
        </button>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
