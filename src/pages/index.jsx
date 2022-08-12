import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from "../components/Header"
import { useCallback, useEffect } from 'react'


export default function Home() {
  const foo = 123;

  const handleClick = useCallback(() => {
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Link href="/about"><a><button onClick={handleClick}>ボタン</button></a></Link>
      <Header />
      <Main page="index"/>
      <Footer />
    </div>
  )
}
