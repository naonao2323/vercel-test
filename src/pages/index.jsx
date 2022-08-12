import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from "../components/Header"
import { useCallback } from 'react'


export default function Home() {
  const foo = 123;

  const handleClick = useCallback(() => {
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <a href="/about"><button onClick={handleClick}>ボタン</button></a>
      <Header />
      <Main page="index"/>
      <Footer />
    </div>
  )
}
