import { usePost } from "src/hooks/usePost";
import Head from 'next/head'

export const Post = () => {
    const { post, user, error, isLoading } = usePost();

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);

    return (
        <div>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <div>Created by {user?.name}</div>
        </div>
    )
}
