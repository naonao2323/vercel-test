import Head from 'next/head'
import { Main } from 'src/components/Main'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import styles from 'src/styles/Home.module.css'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightblue } from 'src/hooks/useBgLightblue'

export default function About() {
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
      <Main page="about" />
      <Footer />
    </div>
  )
}
