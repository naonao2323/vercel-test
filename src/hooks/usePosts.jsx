import useSWR from 'swr';
import { fetcher } from 'src/utils/fetcher';

export const usePosts = (url) => {
    const { data, error } = useSWR(url, fetcher);
    return {
        data: data,
        error: error,
        isLoading: !error && !data,
        isEmpty: data && data.length < 0,
    }
};