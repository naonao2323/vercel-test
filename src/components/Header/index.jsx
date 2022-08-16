import Link from 'next/link'
import classes from 'src/components/Header/Header.module.css'

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/comments", label: "Commnets" },
  { href: "/users", label: "Users" },
]

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item, x) => {
        return (
          <Link key={x} href={item.href}><a className={classes.anchor}>{item.label}</a></Link>
        )
      })}
    </header>
  )
}