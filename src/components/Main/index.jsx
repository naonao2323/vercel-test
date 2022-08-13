import classes from "src/components/Main/Main.module.css";
import { HeadLine } from "src/components/Headline";
import { Links } from "src/components/Links";
import { useCallback, useState } from 'react';

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    desc: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    desc: "Learn about Next.js in an interactive course with quizzes",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples →",
    desc: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    desc: "Instantly deploy your Next.js site to a public URL with Vercel.",
  }
]

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length-1);
    })
  }, []);

    return (
        <main className={classes.main}>
        <HeadLine title="About Page" page={props.page} itemsCounter={items.length}> 
          <code className={classes.code}>pages/{props.page}.js</code>
        </HeadLine>     
        <Links items={items} handleReduce={handleReduce} />
      </main>
    );
}