import Head from 'next/head'
import { Header } from 'src/components/Header'

const Index = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPLACEHOLDERを色々叩いてみる</p>
    </div>
  )
}

export default Index;
