import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from "../components/Header"
import { useEffect, useState, useCallback } from 'react'


export default function Home() {
  const [count, setCount] = useState(1);
  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount(count =>(count+1));
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div className={styles.countSpace}>
        <p>{count}</p>
        <button onClick={handleClick}>ボタン</button>
      </div>
      <Main page="index"/>
      <Footer />
    </div>
  )
}
