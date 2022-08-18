import Head from 'next/head'
import { useRouter } from 'next/router';
import { CommentsByPostsId } from "src/components/Commnets/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
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
            <UserByUserId userId={data.userId} />
            <h1 className={"font-bold text-3xl"}>{data.title}</h1>
            <p className={"text-gray-900 text-xl my-6"}>{data.body}</p>
            <h2 className={"font-bold text-2xl border-b"}>コメント一覧</h2>
            <CommentsByPostsId id={data.id} />
        </div>
    )
};
