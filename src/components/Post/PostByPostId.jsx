import Link from "next/link";
import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props) => {
    const { data, error, isLoading, isEmpty } = usePost(props.postId);

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (isEmpty) return (<div>データは空です。</div>);

    return (
        <div>
            <Link href={`/posts/${data.id}`}><a>{data.title}</a></Link>
        </div>
    )
};