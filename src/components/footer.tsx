import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Patrick U. AGWU. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:john@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
