import { useUsers } from "src/hooks/useUsers"

export const Users = () => {
    const { users, error, isLoading } = useUsers();

    if (isLoading) return (
        <div>
            <p>ローディング中z</p>
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
                {users.map((user, x) => {
                    return (<li key={x}>{user.name}</li>)
                })}
            </ol>
        </div>
    )
}