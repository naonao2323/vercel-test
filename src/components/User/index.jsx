import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
    const { data, error, isLoading, isEmpty } = useUser();

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
            <h2>詳細</h2>
            <ul>
                <li>{data.email}</li>
                <li>{data.username}</li>
                <li>{data.address.city}</li>
                <li>{data.phone}</li>
                <li>{data.website}</li>
                <li>{data.company.name}</li>
            </ul>
            <h2>投稿</h2>
            <PostsByUserId userId={data.id} />
            <h2>コメント</h2>
        </div>
    )
}