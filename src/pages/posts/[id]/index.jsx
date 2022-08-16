import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { usePost } from 'src/hooks/usePost';
import { Post } from 'src/components/Post';

const Posts = () => {
    const { post, user, error, isLoading } = usePost();
    console.log({ post, user, error, isLoading });


    if (isLoading) return (<div>loading中です</div>);
    if (error) return (<div>{error.message}</div>);

    return (
        <div className={styles.container}>
            <Header />
            <Post />
        </div>
    )
}

export default Posts;
