import classes from 'src/components/Links/Links.module.css'

export const  Links = ({items, handleReduce}) => {
    return (
        <div className={classes.grid}>
          <button onClick={handleReduce}>減らす</button>
          {items.map(item => {
            return (
              <a key={item.href} href={item.href} className={classes.card}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </a>
            );
          })}
      </div>
    )
}