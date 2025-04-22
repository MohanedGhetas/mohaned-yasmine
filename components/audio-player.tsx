"use client"

import { useState, useRef } from "react"
import { Volume2, VolumeX, AlertCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (error) {
      // Try to reload the audio if there was an error
      if (audioRef.current) {
        audioRef.current.load()
        setError(null)
      }
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.error("Audio playback failed:", err)

            if (err.name === "NotAllowedError") {
              setError("Audio playback requires user interaction first")
            } else {
              setError(`Playback error: ${err.message}`)
            }
          })
      }
    }
  }

  // Handle audio errors
  const handleError = () => {
    if (!audioRef.current || !audioRef.current.error) return

    const errorCode = audioRef.current.error.code
    let errorMessage = "Unknown audio error"

    switch (errorCode) {
      case 1:
        errorMessage = "Audio fetching aborted"
        break
      case 2:
        errorMessage = "Network error while loading audio"
        break
      case 3:
        errorMessage = "Audio decoding failed"
        break
      case 4:
        errorMessage = "Audio format not supported by your browser"
        break
    }

    console.error(`Audio error: ${errorMessage} (code: ${errorCode})`)
    setError(errorMessage)
    setIsPlaying(false)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`audio-player ${error ? "bg-red-400 hover:bg-red-500" : ""}`}
            onClick={toggleAudio}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {error ? (
              <AlertCircle size={24} color="white" />
            ) : isPlaying ? (
              <Volume2 size={24} color="white" />
            ) : (
              <VolumeX size={24} color="white" />
            )}

            {/* Use direct HTML5 audio element with multiple sources */}
            <audio ref={audioRef} loop preload="auto" onError={handleError} style={{ display: "none" }}>
              {/* Try multiple formats for better browser compatibility */}
              <source src="/audio/compressed_audio.mp3" type="audio/mpeg" />
              {/* Fallback message */}
              Your browser does not support the audio element.
            </audio>
          </div>
        </TooltipTrigger>
        {error && (
          <TooltipContent side="top">
            <p>{error}</p>
            <p className="text-xs mt-1">Click to try again</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}
