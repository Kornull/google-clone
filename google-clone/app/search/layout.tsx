import SearchHeader from '@/components/UI/SearchHeader';

import '../globals.css';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchHeader />
      <main className="w-full px-4 pt-52 md:pt-[168px] pb-[420px] sm:pb-56">{children}</main>
    </>
  );
}
