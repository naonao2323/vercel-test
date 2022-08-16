import Head from 'next/head'
import { Header } from 'src/components/Header'
import { User as UserComponent } from 'src/components/User';

const User = () => {

    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Header />
            <UserComponent />
        </div>
    )
}

export default User;