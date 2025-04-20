"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CountdownTimerProps {
  targetDate: Date
  language: "en" | "ar"
}

export default function CountdownTimer({ targetDate, language }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
  }

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-value">{formatNumber(timeLeft.days)}</div>
        <div className={cn("countdown-label", language === "ar" ? "arabic" : "")}>
          {language === "en" ? "Days" : "أيام"}
        </div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{formatNumber(timeLeft.hours)}</div>
        <div className={cn("countdown-label", language === "ar" ? "arabic" : "")}>
          {language === "en" ? "Hours" : "ساعات"}
        </div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{formatNumber(timeLeft.minutes)}</div>
        <div className={cn("countdown-label", language === "ar" ? "arabic" : "")}>
          {language === "en" ? "Minutes" : "دقائق"}
        </div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{formatNumber(timeLeft.seconds)}</div>
        <div className={cn("countdown-label", language === "ar" ? "arabic" : "")}>
          {language === "en" ? "Seconds" : "ثواني"}
        </div>
      </div>
    </div>
  )
}
