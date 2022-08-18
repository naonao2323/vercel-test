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
            <ul className={"space-y-2"}>
                {data.map((comment) => {
                    return (
                        <li key={comment.id} className={"border-b py-2"}>
                            <Link href={`/comments/${comment.id}`}>
                                <a className={"block hover:text-blue-500"}>{comment.body}</a>
                            </Link>
                        </li>)
                })}
            </ul>
        </div>
    )
}