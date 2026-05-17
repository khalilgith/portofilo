import type { Metadata } from "next"
import Providers from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Khalil Yahyaoui | Software Engineer",
    template: "%s | Khalil Yahyaoui",
  },
  description:
    "Computer Science student and developer building modern web applications. Passionate about React, Next.js, and clean code.",
  keywords: ["developer", "portfolio", "react", "next.js", "typescript", "python"],
  authors: [{ name: "Khalil Yahyaoui" }],
  openGraph: {
    title: "Khalil Yahyaoui | Software Engineer",
    description: "Computer Science student and developer building modern web applications.",
    url: "https://portofilo.vercel.app",
    siteName: "Khalil Yahyaoui Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalil Yahyaoui | Software Engineer",
    description: "Computer Science student and developer building modern web applications.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
