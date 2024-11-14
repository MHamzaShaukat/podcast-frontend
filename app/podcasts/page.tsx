'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_PODCASTS, GetPodcastsData, PaginationDTO } from '@/graphql/queries';
import PaginationControls from '@/components/PaginationControls';
import PodcastList from '@/components/PodcastList';
import PodcastsLayout from '@/components/PodcastLayout';
import SpinningLoader from '@/components/Spinner';

const Podcasts: React.FC = () => {
    const router = useRouter();
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [search, setSearch] = useState<string>('');
    const [selectedField, setSelectedField] = useState<string>('search');
    const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const searchQuery = params.get('search') || '';
        const titleQuery = params.get('title') || '';
        const categoryNameQuery = params.get('categoryName') || '';
        const pageQuery = params.get('page');
        const limitQuery = params.get('limit');

        setSearch(searchQuery || titleQuery || categoryNameQuery);
        setSelectedField(searchQuery ? 'search' : titleQuery ? 'title' : categoryNameQuery ? 'categoryName' : 'search');
        setPage(pageQuery ? parseInt(pageQuery, 10) : 1);
        setLimit(limitQuery ? parseInt(limitQuery, 10) : 10);
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 50);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        const params = new URLSearchParams();

        if (selectedField === 'search' && debouncedSearch) {
            params.set('search', debouncedSearch);
        } else if (selectedField === 'title' && debouncedSearch) {
            params.set('title', debouncedSearch);
        } else if (selectedField === 'categoryName' && debouncedSearch) {
            params.set('categoryName', debouncedSearch);
        }

        params.set('page', page.toString());
        params.set('limit', limit.toString());

        router.push(`/podcasts?${params.toString()}`);
    }, [debouncedSearch, selectedField, page, limit, router]);

    const { loading, error, data } = useQuery<GetPodcastsData, { pagination: PaginationDTO }>(
        GET_PODCASTS,
        {
            variables: {
                pagination: {
                    page,
                    limit,
                    search: selectedField === 'search' ? debouncedSearch : undefined,
                    title: selectedField === 'title' ? debouncedSearch : undefined,
                    categoryName: selectedField === 'categoryName' ? debouncedSearch : undefined,
                },
            },
        }
    );

    const podcasts = data?.podcasts?.podcasts || [];
    const totalCount = data?.podcasts?.totalCount || 0;

    return (
        <PodcastsLayout
            search={search}
            setSearch={setSearch}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
        >
            {loading ? (
                <SpinningLoader />
            ) : error || podcasts.length === 0 ? (
                <div className='text-center'>No records found.</div>
            ) : (
                <>
                    <PodcastList podcasts={podcasts} />
                    <PaginationControls
                        page={page}
                        setPage={setPage}
                        totalCount={totalCount}
                        limit={limit}
                    />
                </>
            )}
        </PodcastsLayout>
    );
};

export default Podcasts;
