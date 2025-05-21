import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = 'Search', maxWidth = '3xl' }) {
  return (
    <section className="px-8 mb-4">
      <div className={`relative max-w-${maxWidth} mx-auto`}>
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-full py-3 pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </section>
  );
}
