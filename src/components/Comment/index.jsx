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
            <h1 className={"font-xl font-bold mb-4"}>Created by {data.name}({data.email})</h1>
            <div className={"text-3xl font-bold mb-4"}>{data.body}</div>
            <h2 className={"font-bold text-2xl text-center border-b mb-4"}>元の記事</h2>
            <PostByCommentId postId={data.postId} />
        </div>
    )
}