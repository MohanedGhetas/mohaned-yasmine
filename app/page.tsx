"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import EnvelopeLoading from "@/components/envelope-loading"
import HeroSection from "@/components/hero-section"
import TimelineSection from "@/components/timeline-section"
import EnhancedFooter from "@/components/enhanced-footer"
import BackgroundImage from "@/components/background-image"
import AudioPlayer from "@/components/audio-player"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState<"en" | "ar">("en")

  useEffect(() => {
    const userLanguage = navigator.language || navigator.languages[0]
    if (userLanguage.includes("ar")) {
      setLanguage("ar")
    } else {
      setLanguage("en")
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {isLoading ? (
        <EnvelopeLoading language={language} onComplete={() => setIsLoading(false)} />
      ) : (
        <>
        <BackgroundImage />
          <div className="floating-hearts"></div>
  
          <button
            onClick={toggleLanguage}
            className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-2 shadow-md hover:bg-secondary transition-colors"
          >
            <Globe size={20} />
          </button>
          <AudioPlayer />
          <HeroSection language={language} />
          <TimelineSection language={language} />
          <EnhancedFooter language={language} />
        </>
      )}
    </main>
  )
  
}

