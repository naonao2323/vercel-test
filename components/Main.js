import styles from '../styles/Home.module.css'
import { HeadLine }  from '../components/Headline'
import { Links }  from '../components/Links'

export function Main(props) {
    return (
        <main className={styles.main}>
        <HeadLine title="About Page" page={props.page}> 
          <code className={styles.code}>pages/{props.page}.js</code>
        </HeadLine>     
        <Links />
      </main>
    );
}