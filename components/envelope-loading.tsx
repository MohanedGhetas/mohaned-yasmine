"use client"

import { useState, useEffect } from "react"

interface EnvelopeLoadingProps {
  language: "en" | "ar"
  onComplete: () => void
}

export default function EnvelopeLoading({ language, onComplete }: EnvelopeLoadingProps) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [letterVisible, setLetterVisible] = useState(false)

  useEffect(() => {
    // Show envelope immediately
    const timer = setTimeout(() => {
      setEnvelopeOpen(true)

      const letterTimer = setTimeout(() => {
        setLetterVisible(true)

        const contentTimer = setTimeout(() => {
          onComplete()
        }, 1500) // Reduced time before completing

        return () => clearTimeout(contentTimer)
      }, 800) // Reduced time before showing letter

      return () => clearTimeout(letterTimer)
    }, 800) // Reduced time before opening envelope

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="envelope-container">
        <div className={`envelope ${envelopeOpen ? "open" : ""}`}>
          <div className="envelope-front">
            <div className="envelope-initials">
            {language === "en" ? "M & Y" : "م و ي"}
              </div>
          </div>
          <div className="envelope-back">
            <div className={`envelope-letter ${letterVisible ? "visible" : ""}`}>
              <h1 className="english-title text-4xl text-primary mb-4">
                {language === "en" ? "You're Invited" : "أنت مدعو"}
              </h1>
              <p className={language === "ar" ? "arabic" : ""}>
                {language === "en"
                  ? "Join us to celebrate the wedding of Mohaned & Yasmine"
                  : "انضموا إلينا للاحتفال بزفاف مهند وياسمين"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
