'use client';

import { ReactNode } from 'react';
import PodcastsHeader from './PodcastHeader';

interface PodcastsLayoutProps {
  children: ReactNode;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedField: string;
  setSelectedField: React.Dispatch<React.SetStateAction<string>>;
}

const PodcastsLayout: React.FC<PodcastsLayoutProps> = ({
  children,
  search,
  setSearch,
  selectedField,
  setSelectedField,
}) => {
  return (
    <div className="p-4">
      <PodcastsHeader
        search={search}
        setSearch={setSearch}
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />
      <main>{children}</main>
    </div>
  );
};

export default PodcastsLayout;
