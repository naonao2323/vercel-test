import Link from 'next/link'
import { useUsers } from 'src/hooks/useArrayFetch'

export const Users = () => {
    const { data, error, isLoading, isEmpty } = useUsers();

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
            <ul className={"grid grid-cols-2 gap-6"}>
                {data.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link href={`users/${user.id}`}>
                                <a className={"block whitespace-pre-wrap p-4 shadow rounded hover:bg-gray-100"}>
                                    <h1 className={"font-bold text-3xl"}>{user.name}</h1>
                                    <div className={"text-lg truncate"}>{user.email}</div>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}