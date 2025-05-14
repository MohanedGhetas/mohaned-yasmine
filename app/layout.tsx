// layout.tsx (Server-side component)
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohaned & Yasmine | مهند وياسمين | Wedding Invitation | دعوة زفاف",
  description: "Join us to celebrate the wedding of Mohaned & Yasmine | انضموا إلينا للاحتفال بزفاف مهند وياسمين",
  openGraph: {
    url: 'https://mohaned-yasmine.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://mohaned-yasmine.vercel.app/background-collage.jpeg',
      },
    ],
    title: "Mohaned & Yasmine | مهند وياسمين | Wedding Invitation | دعوة زفاف",
    description: "Join us to celebrate the wedding of Mohaned & Yasmine | انضموا إلينا للاحتفال بزفاف مهند وياسمين",
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
        {/* <link rel="preload" href="https://mohaned-yasmine.vercel.app/audio/compressed_audio.mp3" as="media" type="audio/mpeg" /> */}
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <meta property="og:image" content="https://mohaned-yasmine.vercel.app/background-collage.jpeg" />
        <meta property="og:image:alt" content="Mohaned & Yasmine Wedding Invitation | دعوة زفاف مهند وياسمين" />
        <meta property="og:title" content="Mohaned & Yasmine | مهند وياسمين | Wedding Invitation | دعوة زفاف" />
        <meta property="og:description" content="Join us to celebrate the wedding of Mohaned & Yasmine | انضموا إلينا للاحتفال بزفاف مهند وياسمين" />
        <meta property="og:site_name" content="Mohaned & Yasmine | مهند وياسمين" />
        <meta property="og:url" content="https://mohaned-yasmine.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="YOUR_APP_ID" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Mohaned & Yasmine | مهند وياسمين | Wedding Invitation | دعوة زفاف" />
        <meta property="twitter:description" content="Join us to celebrate the wedding of Mohaned & Yasmine | انضموا إلينا للاحتفال بزفاف مهند وياسمين" />
        <meta property="twitter:image" content="https://mohaned-yasmine.vercel.app/background-collage.jpeg" />
        <meta property="twitter:image:alt" content="Mohaned & Yasmine Wedding Invitation | دعوة زفاف مهند وياسمين" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"
export const runtime = "edge"
