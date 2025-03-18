"use client"

import { useState, useEffect } from "react"
import { Bug } from "lucide-react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleClick = () => {
      setClicked(!clicked)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleClick)
    window.addEventListener("mouseup", handleClick)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleClick)
      window.removeEventListener("mouseup", handleClick)
    }
  }, [clicked])

  // Don't render anything on the server or before mounting
  if (!isMounted) return null
  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100"
      style={{
        left: `${position.x + 10}px`,
        top: `${position.y + 10}px`,
        transform: clicked ? "scale(0.8)" : "scale(1)",
      }}
    >
      <Bug className={`h-6 w-6 ${clicked ? "text-primary" : "text-muted-foreground"}`} />
    </div>
  )
}

