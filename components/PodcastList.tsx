'use client';

import { Podcast } from '@/graphql/queries';
import React from 'react';
import PodcastCard from './PodcastCard';

interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastList: React.FC<PodcastListProps> = React.memo(({ podcasts }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
});

export default PodcastList;
