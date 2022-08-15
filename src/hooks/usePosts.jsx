import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error("データが取り出せませんでした。");
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    const json = await res.json();
    return json;
}

export const usePosts = (url) => {
    const { data, error } = useSWR(url, fetcher);
    return {
        data: data,
        error: error,
        isLoading: !error && !data,
        isEmpty: data && data.length < 0,
    }
};