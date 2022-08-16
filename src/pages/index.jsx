import Head from 'next/head'
import { Header } from 'src/components/Header'
import styles from 'src/styles/Home.module.css'

const Index = (props) => {
  const { doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPLACEHOLDERを色々叩いてみる
      </p>
    </div>
  )
}

export default Index;
