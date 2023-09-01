import SearchHeader from '@/components/UI/SearchHeader';

import '../globals.css';

export default function SearchLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
