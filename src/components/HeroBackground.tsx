"use client"

import { useEffect, useRef } from "react"

const RINGS = [
  { size: 300, duration: 80, direction: 1, opacity: 0.04 },
  { size: 500, duration: 120, direction: -1, opacity: 0.06 },
  { size: 700, duration: 160, direction: 1, opacity: 0.08 },
  { size: 900, duration: 200, direction: -1, opacity: 0.10 },
]

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const canvas = canvasRef.current
    if (!canvas || isMobile) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let mouseX = -1000
    let mouseY = -1000

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }
    window.addEventListener("mousemove", onMouse)

    const cvs = canvas
    const COUNT = 60
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * cvs.width,
      y: Math.random() * cvs.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1.5 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.4,
    }))

    function draw() {
      if (!ctx || !cvs) return
      if (document.visibilityState !== "visible") {
        animId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, cvs.width, cvs.height)

      for (let i = 0; i < COUNT; i++) {
        const p = particles[i]

        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) * 0.03
          const angle = Math.atan2(dy, dx)
          p.vx += Math.cos(angle) * force
          p.vy += Math.sin(angle) * force
        }

        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = cvs.width
        if (p.x > cvs.width) p.x = 0
        if (p.y < 0) p.y = cvs.height
        if (p.y > cvs.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(97, 218, 251, ${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = "rgba(97, 218, 251, 0.08)"
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center scale-[0.6] sm:scale-100">
        <svg
          viewBox="-500 -500 1000 1000"
          className="absolute"
          style={{ width: 1000, height: 1000, maxWidth: "100vw", maxHeight: "100vh" }}
        >
          {RINGS.map((ring) => (
            <circle
              key={ring.size}
              cx={0}
              cy={0}
              r={ring.size / 2}
              fill="none"
              stroke="white"
              strokeWidth={1}
              opacity={ring.opacity}
              style={{
                transformOrigin: "center",
                animation: `orbit-spin ${ring.duration}s linear infinite`,
                animationDirection: ring.direction === 1 ? "normal" : "reverse",
              }}
            />
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  )
}
