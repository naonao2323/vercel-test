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
            <h1 className={"font-bold text-3xl mb-2"}>{data.name}</h1>
            <h2 className={"font-bold text-xl mb-4 border-b text-center"}>詳細</h2>
            <ul className={"list-inside list-disc text-lg"}>
                <li>メール:{data.email}</li>
                <li>アカウント名:{data.username}</li>
                <li>住所:{data.address.city}</li>
                <li>電話番号:{data.phone}</li>
                <li>サイト:{data.website}</li>
                <li>会社名:{data.company.name}</li>
            </ul>
            <h2 className={"font-bold text-xl mb-4 border-b text-center"}>投稿</h2>
            <PostsByUserId userId={data.id} />
        </div >
    )
}