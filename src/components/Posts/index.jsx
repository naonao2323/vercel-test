import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
    const { data, error, isLoading, isEmpty } = usePosts("https://jsonplaceholder.typicode.com/posts");

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (isEmpty) return (<div>データは空です。</div>);

    return (
        <ol>
            {data.map((post, x) => {
                return (
                    <li key={x}>{post.title}</li>
                )
            })}
        </ol>
    )
}
