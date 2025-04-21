import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohaned & Yasmine | Wedding Invitation",
  description: "Join us to celebrate the wedding of Mohaned & Yasmine",
  openGraph: {
    images: [
      {
        url: '/public/background-collage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mohaned & Yasmine Wedding Invitation',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/audio/compressed_audio.mp3" as="audio" type="audio/mpeg" />
        <meta property="og:image" content="/public/background-collage.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mohaned & Yasmine Wedding Invitation" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
