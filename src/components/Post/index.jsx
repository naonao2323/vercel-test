import Head from 'next/head'
import { useRouter } from 'next/router';
import { CommentsByPostsId } from "src/components/Commnets/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserID";
import { usePost } from 'src/hooks/usePost';

export const Post = () => {
    const router = useRouter();
    const { data, error, isLoading, isEmpty } = usePost(router.query.id);

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (isEmpty) return (<div>データは空です。</div>);
    return (
        <div>
            <Head>
                <title>{data.title}</title>
            </Head>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <UserByUserId userId={data.userId} />
            <CommentsByPostsId id={data.id} />
        </div>
    )
};
