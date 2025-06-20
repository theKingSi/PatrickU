"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-lg sm:text-xl font-semibold hover:opacity-80 transition-opacity">
            Patrick U. AGWU
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex md:items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(true)}
              className="h-9 w-9 p-0"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-lg">
            <div className="flex h-16 items-center justify-between px-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="h-9 w-9 p-0"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="px-4 py-6">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
