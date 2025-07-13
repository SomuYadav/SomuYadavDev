import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Somu Yadav - iOS Engineer",
  description:
    "Senior iOS Engineer with 7+ years of experience building scalable mobile applications. Passionate about Swift, SwiftUI, and clean architecture.",
  keywords: ["iOS Developer", "Swift", "SwiftUI", "Mobile App Development", "Somu Yadav", "iOS Engineer"],
  authors: [{ name: "Somu Yadav" }],
  creator: "Somu Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://somuyadav.github.io",
    title: "Somu Yadav - iOS Engineer",
    description: "Senior iOS Engineer with 7+ years of experience building scalable mobile applications.",
    siteName: "Somu Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somu Yadav - iOS Engineer",
    description: "Senior iOS Engineer with 7+ years of experience building scalable mobile applications.",
    creator: "@Somendra_Dev",
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/img/index/favicon.png" />
        <link rel="apple-touch-icon" href="/img/index/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
