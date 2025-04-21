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

  // Set language based on the user's device language (on initial load)
  useEffect(() => {
    const userLanguage = navigator.language || navigator.languages[0] // e.g., 'en-US', 'ar-EG'
    
    if (userLanguage.includes("ar")) {
      setLanguage("ar")  // Set to Arabic if the language is Arabic
    } else {
      setLanguage("en")  // Otherwise, set to English
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // Reduced loading time for demo

    return () => clearTimeout(timer)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  if (isLoading) {
    return <EnvelopeLoading language={language} onComplete={() => setIsLoading(false)} />
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <BackgroundImage />

      {/* Floating hearts background */}
      <div className="floating-hearts"></div>

      {/* Language toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-2 shadow-md hover:bg-secondary transition-colors"
      >
        <Globe size={20} />
      </button>

      {/* Audio player */}
      <AudioPlayer />

      {/* Hero Section */}
      <HeroSection language={language} />

      {/* Timeline Section */}
      <TimelineSection language={language} />

      {/* Enhanced Footer */}
      <EnhancedFooter language={language} />
    </main>
  )
}
