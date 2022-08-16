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
            <ol>
                {data.map((user) => {
                    return (
                        <li key={user.id}><Link href={`users/${user.id}`}><a>{user.name}({user.email})</a></Link></li>
                    )
                })}
            </ol>
        </div>
    )
}