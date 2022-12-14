import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from 'src/utils/fetcher';

export const useComment = () => {
    const router = useRouter();

    const { data, error } = useSWR(
        router.query.id ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
            : null, fetcher);
    return {
        data,
        error,
        isLoading: !error && !data,
        isEmpty: data && data.length <= 0,
    }
};