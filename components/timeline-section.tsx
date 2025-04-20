"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import TimelineItem from "@/components/timeline-item"

interface TimelineSectionProps {
  language: "en" | "ar"
}

export default function TimelineSection({ language }: TimelineSectionProps) {
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Timeline steps
  const timelineSteps = [
    {
      id: 1,
      title: language === "en" ? "Erayet El Fatiha" : "قراءة الفاتحة",
      date: language === "en" ? "July 26, 2024" : "٢٦ يوليو ٢٠٢٤",
      description:
        language === "en"
          ? "We officially began our journey together with the blessing of our families."
          : "بدأنا رحلتنا معًا رسميًا ببركة عائلاتنا.",
      image: "/couple-image-1.jpg",
    },
    {
      id: 2,
      title: language === "en" ? "Engagement" : "الخطوبة",
      date: language === "en" ? "October 24, 2024" : "٢٤ أكتوبر ٢٠٢٤",
      description:
        language === "en"
          ? "We celebrated our engagement surrounded by our loved ones."
          : "احتفلنا بخطوبتنا محاطين بأحبائنا.",
      image: "/couple-image-2.jpg",
    },
    {
      id: 3,
      title: language === "en" ? "Wedding" : "حفل الزفاف",
      date: language === "en" ? "May 23, 2025" : "٢٣ مايو ٢٠٢٥",
      description:
        language === "en"
          ? "Join us as we celebrate our special day and begin our new life together."
          : "انضموا إلينا للاحتفال بيومنا المميز وبداية حياتنا الجديدة معًا.",
      image: "/couple-image-3.jpg",
      soon: true,
    },
  ]

  return (
    <motion.section
      ref={timelineRef}
      initial={{ opacity: 0 }}
      animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={cn(
            "text-5xl md:text-6xl text-center mb-16 text-primary",
            language === "ar" ? "arabic" : "english-title",
          )}
        >
          {language === "en" ? "Our Journey" : "مسارنا"}
        </h2>

        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <TimelineItem
              key={step.id}
              id={step.id}
              title={step.title}
              date={step.date}
              description={step.description}
              image={step.image}
              position={index % 2 === 0 ? "left" : "right"}
              language={language}
              soon={step.soon}
              inView={timelineInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
