"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/todos", label: "Todos" },
    { href: "/users", label: "Users" },
  ]

  return (
    <header
      style={{
        backgroundColor: '#1e293b',
        color: '#f8fafc',           
        padding: '15px 20px',
        fontSize: '1.2rem',
        fontWeight: '600',
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {links.map(link => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)

        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: isActive ? "#facc15" : "#f8fafc", 
              textDecoration: isActive ? "underline" : "none",
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </Link>
        )
      })}
    </header>
  )
}

export default Header
