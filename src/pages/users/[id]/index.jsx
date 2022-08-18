import { Header } from 'src/components/Header'
import { User as UserComponent } from 'src/components/User';
import { SWRConfig } from 'swr';

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    const user = await fetch(USER_API_URL);
    const userData = await user.json();

    const POST_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
    const post = await fetch(POST_API_URL);
    const postData = await post.json();

    return {
        props: {
            fallback: {
                [USER_API_URL]: userData,
                [POST_API_URL]: postData,
            }
        }
    }
}

const User = (props) => {
    const { fallback } = props;

    return (
        <div>
            <SWRConfig value={{ fallback }} >
                <Header />
                <UserComponent />
            </SWRConfig>
        </div>
    )
}

export default User;