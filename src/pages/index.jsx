import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Posts } from 'src/components/Posts';

const Home = () => {

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

export default Home;
