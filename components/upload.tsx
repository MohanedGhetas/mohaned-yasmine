"use client"

import React, { useEffect, useState } from "react"

export default function Upload({ language, onComplete }: { language: "en" | "ar", onComplete?: () => void }) {
  const showThanks = true // Set this to false when you're done testing
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    if (showThanks) {
      setFadeIn(true)

      const redirectTimer = setTimeout(() => {
        // Full page reload without any query params
        window.location.href = "/"
      }, 3000) // Adjust delay as needed

      return () => clearTimeout(redirectTimer)
    }
  }, [showThanks])

  if (showThanks) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white text-black">
        <h1
          className={`text-3xl font-bold opacity-0 transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : ""
          }`}
        >
          Hello, thank you for visiting. This is a test. Arya will be ready soon.
        </h1>
      </div>
    )
  }

  // Fallback UI (not used while showThanks is true)
  return (
    <div className="flex flex-col h-screen w-screen bg-white text-black relative">
      {/* Home Button */}
      <button
        onClick={() => window.location.href = "/"}
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700 transition"
      >
        {language === "ar" ? "الرئيسية" : "Home"}
      </button>

      {/* Top Half */}
      <div className="flex-1 flex items-center justify-center border-b border-gray-300">
        <button
          className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl shadow hover:bg-blue-600 transition"
          onClick={onComplete}
        >
          {language === "ar" ? "زر التحميل العلوي" : "Top Upload Button"}
        </button>
      </div>

      {/* Bottom Half */}
      <div className="flex flex-1">
        <div className="flex-1 flex items-center justify-center border-r border-gray-300">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-600 transition"
          >
            Instagram
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition">
            {language === "ar" ? "زر جانبي" : "Side Button"}
          </button>
        </div>
      </div>
    </div>
  )
}
