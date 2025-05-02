"use client"

import { useState, useEffect } from "react"

interface EnvelopeLoadingProps {
  language: "en" | "ar"
  onComplete: () => void
}

export default function EnvelopeLoading({ language, onComplete }: EnvelopeLoadingProps) {
  const [stage, setStage] = useState<"closed" | "opened" | "completed">("closed")
  const [typingStarted, setTypingStarted] = useState(false)
  const [titleText, setTitleText] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [descIndex, setDescIndex] = useState(0)
  const [showStamp, setShowStamp] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true)
    }, 500) // show arrow after 500ms or adjust as needed
    return () => clearTimeout(loadTimeout)
  }, [])
  
  const fullTitle = language === "en" ? "You're Invited" : "أنت مدعو"


  const handleClick = () => {
    if (stage === "closed") {
      setStage("opened")
    } else if (stage === "opened") {
      setStage("completed")
      onComplete()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick()
    }
  }

  const isEnvelopeOpen = stage !== "closed"

  useEffect(() => {
    if (stage === "opened") {
      const delayTimeout = setTimeout(() => {
        setTypingStarted(true)
      }, 1000)
      return () => clearTimeout(delayTimeout)
    }
  }, [stage])

  useEffect(() => {
    if (typingStarted) {
      if (titleIndex < fullTitle.length) {
        const timeout = setTimeout(() => {
          setTitleText(prev => prev + fullTitle[titleIndex])
          setTitleIndex(prev => prev + 1)
        }, 100)
        return () => clearTimeout(timeout)
      } else if (titleIndex === fullTitle.length && !showStamp) {
        const stampTimeout = setTimeout(() => {
          setShowStamp(true)
        }, 300)
        return () => clearTimeout(stampTimeout)
      }
    }
  }, [typingStarted, titleIndex, descIndex, fullTitle, showStamp])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f9f6f1] relative overflow-hidden">
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`relative bg-black w-[300px] sm:w-[350px] aspect-video flex items-center justify-center cursor-pointer transition-all duration-700 ${isEnvelopeOpen ? 'open' : ''}`}
      >
        {/* Content inside envelope */}
        <div
          className={`absolute flex flex-col items-center py-5 justify-start paper-style w-full h-full transition-all duration-700 ${isEnvelopeOpen ? '-translate-y-16 delay-800 animate-paperRise' : ''}`}
        >
          <p className="text-xl sm:text-2xl font-semibold text-gradient font-serif ">
            {titleText}
          </p>
          {/* <p className={`px-10 text-[10px] sm:text-[12px] text-gray-700 ${language === "ar" ? "arabic" : ""}`}>
            {descText}
          </p> */}

          <p className={`font-sans text-[10px] text-gray-700 pt-5 mt-5 transition-all duration-700 ${showStamp ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            {language === "en" ? "M & Y" : "م و ي"}
          </p>
        </div>

        {/* Seal */}
        <button
          className={`seal aspect-square rounded-full z-40 flex items-center justify-center [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0_70%,_0_35%,_20%_10%)] transition-all duration-100 ${
            isEnvelopeOpen ? 'opacity-0 scale-0 rotate-180' : ''
          }`}
        >
          {language === "en" ? "M & Y" : "م و ي"}
        </button>

        {/* Flaps */}
        <div
          className={`tp bg-[#c9a875] absolute w-full h-full transition-all duration-1000 ${
            isEnvelopeOpen
              ? '[clip-path:polygon(50%_0%,_100%_0,_0_0)]'
              : '[clip-path:polygon(50%_50%,_100%_0,_0_0)]'
          }`}
        ></div>
        <div className="lft bg-[#d8b98c] absolute w-full h-full transition-all duration-700 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
        <div className="rgt bg-[#d8b98c] absolute w-full h-full transition-all duration-700 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
        <div className="btm bg-[#e0cba8] absolute w-full h-full transition-all duration-700 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        {stage === "closed" && (
            <div className="absolute bottom-5 text-xs text-[#795548] animate-bounce">
              {language === "en" ? "Click Me 💌" : "💌اضغط عليّ"}
            </div>
        )}

        {/* Click Me Text */}
        {stage === "closed" && isLoaded && (
          <div className="absolute -top-[120px] sm:-top-[120]">
            <div className="graph__wrapper">
              <svg width="72" height="100" viewBox="0 0 69 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path className="path" id="Path-1" fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" strokeMiterlimit="10"
                    d="M64.8638 1C69.3638 13 53.5877 10.8262 41.8637 16.5C19.8841 27.1369 10.5471 49.001 41.8637 44.5C73.1803 39.999 27.0716 15.3893 9.86379 28.5C-11.1363 44.5 23.3638 64 16.8637 80" />
                  <polyline id="arrow" points="-6,-9 12,0 -6,9 -1,0" transform="rotate(-15)" fill="black">
                    <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="2" fill="freeze">
                      <mpath xlinkHref="#Path-1" />
                    </animateMotion>
                  </polyline>
                </g>
              </svg>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
