import { gql } from '@apollo/client';

export const GET_PODCASTS = gql`
  query GetPodcasts($pagination: PaginationDTO!) {
    podcasts(pagination: $pagination) {
      totalCount
      page
      limit
      podcasts {
        id
        title
        images {
          default
          featured
          thumbnail
          wide
        }
        isExclusive
        publisherName
        publisherId
        mediaType
        description
        categoryId
        categoryName
        hasFreeEpisodes
        playSequence
      }
    }
  }
`;

export interface Podcast {
  id: string;
  title: string;
  images: {
    default: string;
    featured: string;
    thumbnail: string;
    wide: string;
  };
  isExclusive: boolean;
  publisherName: string;
  publisherId: string;
  mediaType: string;
  description: string;
  categoryId: string;
  categoryName: string;
  hasFreeEpisodes: boolean;
  playSequence: number;
}

export interface GetPodcastsData {
  podcasts: {
    totalCount: number;
    page: number;
    limit: number;
    podcasts: Podcast[];

  };
}

export interface PaginationDTO {
  page: number;
  limit: number;
  search?: string;
  title?: string;
  categoryName?: string;
}
