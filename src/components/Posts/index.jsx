import { useState, useCallback, useEffect } from 'react';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = useCallback(async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error("データが発生したため、データ取得できませんでした。")
            }
            const json = await res.json();
            setPosts(posts => posts = json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (loading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (posts.length <= 0) return (<div>データは空です。</div>);
    return (
        <ol>
            {posts.map((post, x) => {
                return (
                    <li key={x}>{post.title}</li>
                )
            })}
        </ol>
    )
}
