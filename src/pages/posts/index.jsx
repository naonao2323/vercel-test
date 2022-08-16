import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Posts } from 'src/components/Posts';

const Post = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Posts />
    </div>
  )
}

export default Post;
