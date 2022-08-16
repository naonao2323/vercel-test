import Head from "next/head";
import { Header } from 'src/components/Header'
import { Comments as CommentsComponent } from 'src/components/Commnets'

const Comments = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Header />
            <CommentsComponent />
        </div>
    )
}

export default Comments;