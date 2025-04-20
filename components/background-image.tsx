"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function BackgroundImage() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Simple approach - just set loaded to true after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Fixed background overlay */}
      <div className="fixed inset-0 bg-background/85 -z-10"></div>

      {/* Background image */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/background-collage.jpeg"
          alt="Background"
          fill
          priority
          quality={90}
          className={`object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          sizes="100vw"
        />
      </div>
    </>
  )
}
