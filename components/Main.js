import classes from './Main.module.css'
import { HeadLine }  from '../components/Headline'
import { Links }  from '../components/Links'

export function Main(props) {
    return (
        <main className={classes.main}>
        <HeadLine title="About Page" page={props.page}> 
          <code className={classes.code}>pages/{props.page}.js</code>
        </HeadLine>     
        <Links />
      </main>
    );
}