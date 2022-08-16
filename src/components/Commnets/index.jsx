import Link from "next/link";
import { useComments } from "src/hooks/useArrayFetch";

export const Comments = () => {
    const { data, error, isLoading, isEmpty } = useComments();

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
                {data.map((comment) => {
                    return (<li key={comment.id}><Link href={`/comments/${comment.id}`}><a>{comment.body}</a></Link></li>)
                })}
            </ol>
        </div>
    )
}