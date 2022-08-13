import classes from 'src/components/Headline/Headline.module.css'

export function HeadLine(props) {
    return (
        <div>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.description}>
                Get started by editing{' '}
                {props.children}
            </p>
            <div className={classes.itemsCounter}><h3>アイテム数は{props.itemsCounter}です！</h3></div>
        </div>
    )
}