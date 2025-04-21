// layout.tsx (Server-side component)
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Server-side context (no 'use client' directive here)
export const metadata: Metadata = {
  title: "Mohaned & Yasmine | Wedding Invitation",
  description: "Join us to celebrate the wedding of Mohaned & Yasmine",
  openGraph: {
    url: 'https://mohaned-yasmine.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://mohaned-yasmine.vercel.app/background-collage-large.jpeg',
        width: 1800,
        height: 960,
        alt: 'Mohaned & Yasmine Wedding Invitation | دعوة زفاف مهند وياسمين',
        type: 'image/jpeg',
      },
    ],
    title: "Mohaned & Yasmine | Wedding Invitation",
    description: "Join us to celebrate the wedding of Mohaned & Yasmine",
    siteName: "Mohaned & Yasmine | مهند وياسمين",
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
        <link rel="preload" href="https://mohaned-yasmine.vercel.app/audio/compressed_audio.mp3" as="media" type="audio/mpeg" />
        
        <link rel="icon" href="https://mohaned-yasmine.vercel.app/small-icon.png" type="image/x-icon" />

        <meta property="og:image" content="https://mohaned-yasmine.vercel.app/background-collage-large.jpeg" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:alt" content="Mohaned & Yasmine Wedding Invitation | دعوة زفاف مهند وياسمين" />
        <meta property="og:title" content="Mohaned & Yasmine | Wedding Invitation" />
        <meta property="og:description" content="Join us to celebrate the wedding of Mohaned & Yasmine" />
        <meta property="og:site_name" content="Mohaned & Yasmine | مهند وياسمين" />
        <meta property="og:url" content="https://mohaned-yasmine.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="YOUR_APP_ID" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// Keep the dynamic directive for server-side rendering
export const dynamic = "force-dynamic"
export const revalidate = 0 // Disable static generation for this page
export const fetchCache = "force-no-store" // Disable caching for this page
export const runtime = "edge" // Use edge runtime for better performance
