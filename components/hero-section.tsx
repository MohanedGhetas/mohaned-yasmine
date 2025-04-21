"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CountdownTimer from "@/components/countdown-timer"

interface HeroSectionProps {
  language: "en" | "ar"
}

export default function HeroSection({ language }: HeroSectionProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn("text-6xl md:text-8xl mb-6 text-primary", language === "ar" ? "arabic" : "english-title")}
        >
          {language === "en" ? "Mohaned & Yasmine" : "مهند و ياسمين"}
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <p className={cn("text-xl md:text-2xl mb-2", language === "ar" ? "arabic" : "english-body")}>
            {language === "en" ? "Request the pleasure of your company" : "يتشرفان بدعوتكم لحضور حفل زفافهما"}
          </p>
          <p className={cn("text-xl md:text-2xl", language === "ar" ? "arabic" : "english-body")}>
            {language === "en" ? "to celebrate their wedding" : "للاحتفال بزفافهما"}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={heroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-xl">
            <Calendar className="text-primary" />
            <span className={language === "ar" ? "arabic" : ""}>
              {language === "en" ? "May 23, 2025" : "٢٣ مايو ٢٠٢٥"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <MapPin className="text-primary" />
            <span className={language === "ar" ? "arabic" : ""}>
              {language === "en" ? "El-Mosheer Tantawy Mosque" : "مسجد المشير طنطاوي"}
            </span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10"
        >
          <h3 className={cn("text-2xl mb-2", language === "ar" ? "arabic" : "english-title")}>
            {language === "en" ? "Countdown to Our Special Day" : "العد التنازلي ليومنا المميز"}
          </h3>
          <CountdownTimer targetDate={new Date("2025-05-23T18:00:00")} language={language} />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="gradient-border inline-block">
            <Button
              variant="outline"
              className="bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-6 py-6 h-auto"
              onClick={() => window.open("https://maps.app.goo.gl/ZDxsFueaotgYBx4m9", "_blank")}
            >
              {language === "en" ? "View Map Location" : "عرض الموقع على الخريطة"}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
