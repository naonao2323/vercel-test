import { useCallback, useEffect, useReducer } from 'react';

const initialState = {
    posts: [],
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "end": {
            return {
                ...state,
                posts: action.data,
                loading: false,
            };
        }
        case "error": {
            return {
                ...state,
                error: state.error,
                loading: false,
            };
        }
        default: {
            throw new Error("no such action type!!!")
        }
    }
}

export const Posts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getPosts = useCallback(async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error("データが発生したため、データ取得できませんでした。")
            }
            const json = await res.json();
            dispatch({ type: "end", data: json });
        } catch (error) {
            dispatch({ type: "error", error: error });
        }
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (state.loading) return (<div>loading中です</div>);
    if (state.error) return (<div>{state.error.message}</div>);
    if (state.posts.length <= 0) return (<div>データは空です。</div>);
    return (
        <ol>
            {state.posts.map((post, x) => {
                return (
                    <li key={x}>{post.title}</li>
                )
            })}
        </ol>
    )
}
