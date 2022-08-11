import styles from '../styles/Home.module.css'

export function HeadLine(props) {
    return (
        <div>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/{props.page}</code>
            </p>
        </div>
    )
}