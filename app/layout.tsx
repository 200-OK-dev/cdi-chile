import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FooterSection } from "@/components/footer-section"
import { NavFullWidth } from "@/components/Nav"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fundacion Next.js",
  description: "A Landing page Template",
    generator: '2000k.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        
          <NavFullWidth />
          {children}
          <FooterSection />
        </ThemeProvider>
        
      </body>
    </html>
  )
}
