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
    url: 'https://mohaned-yasmine.vercel.app/', // URL of the page
    type: 'website', // Type of content (can also be 'article' if it's a blog post)
    images: [
      {
        url: 'https://mohaned-yasmine.vercel.app/background-collage-large.jpeg', // Ensure the image is accessible and large enough
        width: 1800,  // Larger width for better display
        height: 960,  // Larger height to maintain aspect ratio
        alt: 'Mohaned & Yasmine Wedding Invitation | دعوة زفاف محند وياسمين', // Include both languages in the alt text
        type: 'image/jpeg',
      },
    ],
    title: "Mohaned & Yasmine | Wedding Invitation", // English title
    description: "Join us to celebrate the wedding of Mohaned & Yasmine", // English description
    siteName: "Mohaned & Yasmine | موحد وياسمين", // Mixed site name
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
        <link rel="preload" href="https://mohaned-yasmine.vercel.app/audio/compressed_audio.mp3" as="audio" type="audio/mpeg" />
        <meta property="og:image" content="https://mohaned-yasmine.vercel.app/background-collage-large.jpeg" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:alt" content="Mohaned & Yasmine Wedding Invitation | دعوة زفاف محند وياسمين" />
        <meta property="og:title" content="Mohaned & Yasmine | Wedding Invitation" />
        <meta property="og:description" content="Join us to celebrate the wedding of Mohaned & Yasmine" />
        <meta property="og:site_name" content="Mohaned & Yasmine | موحد وياسمين" />
        <meta property="og:url" content="https://mohaned-yasmine.vercel.app/" /> {/* Add og:url */}
        <meta property="og:type" content="website" /> {/* Add og:type */}
        <meta property="fb:app_id" content="YOUR_APP_ID" /> {/* Add fb:app_id, replace with your actual Facebook App ID */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
