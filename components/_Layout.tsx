import React from 'react';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="p-8 pb-20 gap-16 sm:p-20">
        {children}
      </main>
     <Footer />
    </div>
  );
};

export default Layout;