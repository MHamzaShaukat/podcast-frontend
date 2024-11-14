'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter();

  const navigateToPodcasts = () => {
    router.push('/podcasts');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Podcast Listing Website</h1>
        <p className="text-lg mb-6">Discover amazing podcasts from various categories!</p>
        <button
          onClick={navigateToPodcasts}
          className="px-6 py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
        >
          Go to Podcasts
        </button>
      </div>
    </div>
  );
};

export default Page;
