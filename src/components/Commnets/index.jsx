import Link from "next/link";
import { useComments } from "src/hooks/useComments"

export const Comments = () => {
    const { comments, error, isLoading, isEmpty } = useComments();

    if (isLoading) return (
        <div>
            <p>ローディング中</p>
        </div>
    )
    if (error) {
        return (
            <p>{error.message}</p>
        )
    }
    if (isEmpty) {
        return (
            <p>データは空です</p>
        )
    }
    return (
        <div>
            <ol>
                {comments.map((comment) => {
                    return (<li key={comment.id}><Link href={`/comments/${comment.id}`}><a>{comment.body}</a></Link></li>)
                })}
            </ol>
        </div>
    )
}