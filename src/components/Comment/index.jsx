import { PostByCommentId } from "src/components/Post/PostByPostId";
import { useComment } from "src/hooks/useComment"

export const Comment = () => {
    const { data, error, isLoading, isEmpty } = useComment();

    if (error) {
        return (
            <p>{error.message}</p>
        )
    }
    if (isLoading) {
        return (
            <p>loading中</p>
        )
    }
    if (isEmpty) {
        return (
            <p>データは空です</p>
        )
    }
    return (
        <div>
            <h1>{data.name}</h1>
            <ul>
                <li>{data.email}</li>
                <li>{data.body}</li>
            </ul>
            <h2>元の記事</h2>
            <PostByCommentId postId={data.postId} />
        </div>
    )
}