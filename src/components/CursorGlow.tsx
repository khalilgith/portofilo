"use client"

import { useEffect, useState, useCallback } from "react"

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [handleMouse])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-[left,top] duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.6) 0%, rgba(244,114,182,0.4) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl transition-[left,top] duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, rgba(96,165,250,0.5) 0%, rgba(52,211,153,0.3) 40%, transparent 70%)",
        }}
      />
    </div>
  )
}
