'use client';

import React from 'react';

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedField: string;
  setSelectedField: React.Dispatch<React.SetStateAction<string>>;
}

const PodcastsHeader: React.FC<HeaderProps> = ({ search, setSearch, selectedField, setSelectedField }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Podcast Listings</h1>
      <div className="flex flex-row">
        <select
          value={selectedField}
          onChange={(e) => {
            setSelectedField(e.target.value);
            setSearch('');
          }}
          className="py-2 border border-gray-800 text-black rounded-md mr-4"
        >
          <option value="search">All</option>
          <option value="title">Title</option>
          <option value="categoryName">Category</option>
        </select>

        <input
          type="text"
          placeholder={`${selectedField === 'search' ? 'All' : `Search by ${selectedField}...`} `}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-800 text-black rounded-md w-40 sm:w-48 md:w-64 lg:w-80"
        />
      </div>
    </header>
  );
};

export default PodcastsHeader;
