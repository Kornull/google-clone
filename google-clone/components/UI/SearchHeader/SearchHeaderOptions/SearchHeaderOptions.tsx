'use client';

enum SearchSettings {
  WEB = 'web',
  IMAGE = 'image',
}
enum SearchSettingsName {
  WEB = 'All',
  IMAGE = 'Image',
}

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SearchHeaderButton } from './SearchHeaderButton/SearchHeaderButton';

const SearchHeaderOptions = () => {
  const [search, setSearch] = useState<string>(SearchSettings.WEB);
  const router = useRouter();
  const pathname = usePathname();

  const selectTab = (path: string) => {
    const searchArray = pathname.split('/');
    const searchData = searchArray[searchArray.length - 1];

    setSearch(path);
    router.push(`/search/${path}/${searchData}?item=${searchData}`);
  };

  return (
    <div className=" flex items-start px-6 py-3 border-b-2 border-gray-200">
      <div className=" flex items-center gap-1">
        <SearchHeaderButton
          style={`page__search-btn ${search === SearchSettings.WEB ? 'active' : ''}`}
          onClick={selectTab}
          name={SearchSettingsName.WEB}
          data={SearchSettings.WEB}
        />
        <SearchHeaderButton
          style={`page__search-btn ${search === SearchSettings.WEB ? '' : 'active'}`}
          onClick={selectTab}
          name={SearchSettingsName.IMAGE}
          data={SearchSettings.IMAGE}
        />
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
