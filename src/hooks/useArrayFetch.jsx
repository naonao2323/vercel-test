import useSWRImmutable from 'swr/immutable';

export const useArrayFetch = (url) => {
    const { data, error } = useSWRImmutable(url);
    return {
        data,
        error,
        isLoading: !error && !data,
        isEmpty: data && data.length <= 0,
    };
}

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
    return useArrayFetch(`${API_URL}/comments`);
};

export const usePosts = () => {
    return useArrayFetch(`${API_URL}/posts`);
};

export const useUsers = () => {
    return useArrayFetch(`${API_URL}/users`);
}

export const useCommentsByPostId = (id) => {
    return useArrayFetch(id ? `${API_URL}/comments?postId=${id}` : null);
}
export const useUserByUseId = (userId) => {
    return useArrayFetch(userId ? `${API_URL}/users/${userId}` : null);
}

export const usePostsByUserId = (userId) => {
    return useArrayFetch(userId ? `${API_URL}/posts?userId=${userId}` : null);
}