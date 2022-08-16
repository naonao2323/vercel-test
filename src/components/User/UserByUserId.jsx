import { useUserByUseId } from "src/hooks/useArrayFetch";

export const UserByUserId = (props) => {
    const { data, error, isLoading, isEmpty } = useUserByUseId(props.userId);

    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);
    if (isEmpty) return (<div>データは空です。</div>);
    return (
        <div>Created by {data?.name}</div>
    )
};