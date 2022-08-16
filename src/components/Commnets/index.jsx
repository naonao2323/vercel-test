import { useComments } from "src/hooks/useComments"

export const Comments = () => {
    const { comments, error, isLoading } = useComments();

    if (isLoading) return (
        <div>
            <p>ローディング中</p>
        </div>
    )
    if (error) {
        return (
            <p>{error}</p>
        )
    }

    return (
        <div>
            <ol>
                {comments.map((comment) => {
                    return (<li key={comment.id}>{comment.body}</li>)
                })}
            </ol>
        </div>
    )
}