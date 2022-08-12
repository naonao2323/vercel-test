import classes from './Main.module.css'
import { HeadLine }  from './Headline'
import { Links }  from './Links'

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