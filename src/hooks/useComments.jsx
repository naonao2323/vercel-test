import useSWR from 'swr';
import { fetcher } from 'src/utils/fetcher';

export const useComments = () => {

    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/comments", fetcher);
    return {
        comments: data,
        error,
        isLoading: !error && !data,
    };
}