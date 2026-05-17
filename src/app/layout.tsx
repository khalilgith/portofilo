import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Providers from "./providers"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Khalil Yahyaoui | VibeCoder",
    template: "%s | Khalil Yahyaoui",
  },
  description:
    "Computer Science student and VibeCoder building modern web applications with React, Next.js, and TypeScript. View my portfolio and get in touch.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Khalil Yahyaoui" }],
  openGraph: {
    title: "Khalil Yahyaoui | VibeCoder",
    description:
      "Computer Science student and VibeCoder building modern web applications with React, Next.js, and TypeScript.",
    url: "https://portofilo.vercel.app",
    siteName: "Khalil Yahyaoui Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalil Yahyaoui | VibeCoder",
    description:
      "Computer Science student and VibeCoder building modern web applications with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
