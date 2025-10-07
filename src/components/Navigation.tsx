"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Sobre mí" },
    { href: "/gallery", label: "Galería" },
    { href: "/commissions", label: "Comisiones" },
    { href: "/rules", label: "Términos y Condiciones" },
  ]

  return (
    <nav className="navbar-bg py-4 text-center border-b border-gray-300 sticky top-0 z-50">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`mx-4 no-underline font-bold transition-colors duration-200 hover:text-[#6c63ff] ${
            pathname === item.href ? "text-[#6c63ff]" : "text-[#444]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
