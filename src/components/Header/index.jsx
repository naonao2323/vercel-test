import Link from 'next/link'

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/comments", label: "Commnets" },
  { href: "/users", label: "Users" },
]

export const Header = () => {
  return (
    <header className={"flex items-center justify-center border-b w-full h-24"}>
      {NAV_ITEMS.map((item, x) => {
        return (
          <Link key={x} href={item.href}><a className={"inline-block py-1 px-3 text-lg hover:text-blue-500 focus:text-blue-500 active:text-blue-500"}>{item.label}</a></Link>
        )
      })}
    </header>
  )
}