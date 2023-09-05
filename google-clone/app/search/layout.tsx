import SearchHeader from '@/components/UI/SearchHeader';

import '../globals.css';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchHeader />
      <main className="w-full px-4 pt-52 md:pt-[168px] pb-[280px] sm:pb-[180px] md:pb-28">
        {children}
      </main>
    </>
  );
}
