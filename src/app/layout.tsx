import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Patrick Uzodimma AGWU - Library Technology Specialist",
  description:
    "Head of Technical Infrastructure & Internet Services at Kenneth Dike Library, University of Ibadan. Expert in library automation, digital repositories, and IT infrastructure.",
  keywords:
    "library technology, digital library, ILMS, DSpace, library automation, IT infrastructure, database administration, Linux administration",
  authors: [{ name: "Patrick Uzodimma AGWU" }],
  creator: "Patrick Uzodimma AGWU",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://patrickagwu.com",
    title: "Patrick Uzodimma AGWU - Library Technology Specialist",
    description: "Expert in library automation, digital repositories, and IT infrastructure management.",
    siteName: "Patrick Uzodimma AGWU Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Uzodimma AGWU - Library Technology Specialist",
    description: "Expert in library automation, digital repositories, and IT infrastructure management.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-background">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

            {/* Main Content */}
            <div className="relative">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
