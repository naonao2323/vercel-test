import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useArrayFetch";

export const CommentsByPostsId = (props) => {
    const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (isEmpty) return (<div>データは空です。</div>);
    return (
        <div>
            <ol>
                {data.map((comment) => {
                    return (<li key={comment.id}><Link href={`/comments/${comment.id}`}><a>{comment.body}</a></Link></li>)
                })}
            </ol>
        </div>
    )
};