import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Post } from 'src/components/Post'

const Posts = () => {

    return (
        <div className={styles.container}>
            <Header />
            <Post />
        </div>
    )
}

export default Posts;
