import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from "../components/Header"
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightblue } from 'src/hooks/useBgLightblue'

export default function Home() {
  const {count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAdd } = useInputArray();
  useBgLightblue();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div className={styles.countSpace}>
        {isShow ? <p>{count}</p>: null}
        <button onClick={handleClick}>ボタン</button>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleDisplay}>{isShow ?　"非表示" : "表示"}</button>
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
      <Main page="index"/>
      <Footer />
    </div>
  )
}
