import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useArrayFetch";

export const CommentsByPostsId = (props) => {
    const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (isEmpty) return (<div>データは空です。</div>);
    return (
        <div>
            <ul className={"space-y-2"}>
                {data.map((comment) => {
                    return (
                        <li key={comment.id} className={"border-b my-4"}>
                            <Link href={`/comments/${comment.id}`}>
                                <a className={"block hover:text-blue-500"}>{comment.body}</a>
                            </Link>
                        </li>)
                })}
            </ul>
        </div>
    )
};