import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/UI/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Google Clone App',
  description: 'Google clone next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
