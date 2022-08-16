import styles from 'src/styles/Home.module.css'
import { useRouter } from 'next/router';

const Posts = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {router.query.id}
        </div>
    )
}

export default Posts;
