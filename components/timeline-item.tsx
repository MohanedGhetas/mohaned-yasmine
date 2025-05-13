"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  id: number
  title: string
  date: string
  description: string
  image: string
  position: "left" | "right"
  language: "en" | "ar"
  soon?: boolean
  inView: boolean
  index: number
}

export default function TimelineItem({
  id,
  title,
  date,
  description,
  image,
  position,
  language,
  soon,
  inView,
  index,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: position === "left" ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      className={`timeline-container ${position}`}
    >
      <div className="timeline-content">
        <h3 className={cn("text-2xl font-bold text-primary mb-1", language === "ar" ? "arabic" : "")}>{title}</h3>
        <p className={cn("text-muted-foreground mb-3", language === "ar" ? "arabic" : "")}>{date}</p>

        <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <p className={cn("mb-2", language === "ar" ? "arabic" : "")}>{description}</p>

          <p className="text-primary underline">
            {isExpanded
              ? language === "en"
                ? "Show less"
                : "عرض أقل"
              : language === "en"
                ? "Show more"
                : "عرض المزيد"}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="timeline-image-container">
                  <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain bg-black/10"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {soon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {language === "en" ? "Coming Soon" : "قريبًا"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
