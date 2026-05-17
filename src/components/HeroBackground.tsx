"use client"

import { useEffect, useState, useCallback } from "react"

export default function HeroBackground() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [handleMouse])

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/4 size-80 rounded-full bg-blue-500/5 blur-[100px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="absolute size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-[left,top] duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.5) 0%, rgba(244,114,182,0.3) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl transition-[left,top] duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, rgba(96,165,250,0.4) 0%, rgba(52,211,153,0.2) 40%, transparent 70%)",
        }}
      />
    </div>
  )
}
