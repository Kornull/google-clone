'use client';

import { UserSettingsBtn } from '@/types';

enum SearchSettingsName {
  WEB = 'All',
  IMAGE = 'Image',
}

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SearchHeaderButton } from './SearchHeaderButton/SearchHeaderButton';

const SearchHeaderOptions = () => {
  const [search, setSearch] = useState<string>(UserSettingsBtn.WEB);
  const router = useRouter();
  const pathname = usePathname();

  const selectTab = (path: string) => {
    const searchArray = pathname.split('/');
    const searchData = searchArray[searchArray.length - 1];

    setSearch(path);
    router.push(`/search/${path}/${searchData}?item=${searchData}`);
  };

  useEffect(() => {
    selectTab(UserSettingsBtn.WEB);
  }, []);

  return (
    <div className=" flex items-center px-1 sm:px-6  md:px-44 py-3 border-b-2 border-gray-200">
      <div className=" flex items-center gap-1">
        <SearchHeaderButton
          style={`page__search-btn ${search === UserSettingsBtn.WEB ? 'active' : ''}`}
          onClick={selectTab}
          name={SearchSettingsName.WEB}
          data={UserSettingsBtn.WEB}
        />
        <SearchHeaderButton
          style={`page__search-btn ${search === UserSettingsBtn.IMAGE ? 'active' : ''}`}
          onClick={selectTab}
          name={SearchSettingsName.IMAGE}
          data={UserSettingsBtn.IMAGE}
        />
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
