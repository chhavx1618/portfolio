"use client"

import { useEffect, useRef } from "react"
import type React from "react" // Added import for React

interface AnimatedBackgroundClientProps {
  isAnimating: boolean
}

const AnimatedBackgroundClient: React.FC<AnimatedBackgroundClientProps> = ({ isAnimating }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fireflies: {
      x: number
      y: number
      radius: number
      alpha: number
      dx: number
      dy: number
      trail: { x: number; y: number }[]
    }[] = []

    for (let i = 0; i < 50; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.3,
        dx: Math.random() * 1 - 0.5,
        dy: Math.random() * 1 - 0.5,
        trail: [],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      fireflies.forEach((firefly) => {
        if (isAnimating) {
          firefly.x += firefly.dx
          firefly.y += firefly.dy
          firefly.alpha += Math.random() * 0.02 - 0.01

          if (firefly.alpha > 0.9) firefly.alpha = 0.9
          if (firefly.alpha < 0.3) firefly.alpha = 0.3

          // Bounce off edges
          if (firefly.x < 0 || firefly.x > canvas.width) firefly.dx *= -1
          if (firefly.y < 0 || firefly.y > canvas.height) firefly.dy *= -1

          firefly.trail.push({ x: firefly.x, y: firefly.y })
          if (firefly.trail.length > 5) {
            firefly.trail.shift()
          }
        }

        // Draw trail
        if (firefly.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(firefly.trail[0].x, firefly.trail[0].y)
          firefly.trail.forEach((point) => {
            ctx.lineTo(point.x, point.y)
          })
          ctx.strokeStyle = `rgba(255, 255, 150, ${firefly.alpha * 0.3})`
          ctx.stroke()
        }

        // Draw firefly with glow
        const gradient = ctx.createRadialGradient(firefly.x, firefly.y, 0, firefly.x, firefly.y, firefly.radius * 3)
        gradient.addColorStop(0, `rgba(255, 255, 150, ${firefly.alpha})`)
        gradient.addColorStop(1, "rgba(255, 255, 150, 0)")

        ctx.beginPath()
        ctx.arc(firefly.x, firefly.y, firefly.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isAnimating])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1, height: "100%" }} />
}

export default AnimatedBackgroundClient

