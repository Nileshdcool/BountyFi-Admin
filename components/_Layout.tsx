// components/Layout.tsx
import React from 'react';

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold">Immunefi</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-8 pb-20 gap-16 sm:p-20">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 My Website
      </footer>
    </div>
  );
};

export default Layout;