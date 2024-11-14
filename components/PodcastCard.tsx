import { Podcast } from '@/graphql/queries';
import React from 'react';

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: React.FC<PodcastCardProps> = React.memo(({ podcast }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out w-full">
      <div className="w-full !flex !justify-center overflow-hidden rounded-lg mb-4">
        <img
          src={podcast.images.featured}
          alt={podcast.title}
          className="object-cover w-3/4 h-48 md:h-40 lg:h-32 transition-transform transform hover:scale-105"
        />
      </div>

      <div className="flex-grow w-full">
        <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">{podcast.title}</h3>
        <p className="text-gray-800 mb-4 text-sm text-left line-clamp-3">{podcast.description}</p>
        
        <div className="text-left text-gray-800 ">
          <p className="text-sm mb-1"><strong>Publisher:</strong> {podcast.publisherName}</p>
          <p className="text-sm mb-1"><strong>Media Type:</strong> {podcast.mediaType}</p>
          <p className="text-sm mb-1"><strong>Category:</strong> {podcast.categoryName}</p>
          <p className="text-sm mb-1"><strong>Exclusive:</strong> {podcast.isExclusive ? "Yes" : "No"}</p>
          <p className="text-sm mb-1"><strong>Free Episodes:</strong> {podcast.hasFreeEpisodes ? "Yes" : "No"}</p>
          <p className="text-sm mb-1"><strong>Play Sequence:</strong> {podcast.playSequence}</p>
        </div>
      </div>
    </li>
  );
});

export default PodcastCard;
