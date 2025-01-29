"use client"

import { useEffect, useRef } from "react"
import { useBubbles } from "../contexts/BubbleContext"

const BubbleEffectClient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { bubblesEnabled } = useBubbles()
  const bubblesRef = useRef<{ x: number; y: number; radius: number; speed: number }[]>([])

  useEffect(() => {
    if (!bubblesEnabled) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const createBubble = (x: number, y: number) => {
      bubblesRef.current.push({
        x,
        y,
        radius: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current.forEach((bubble, index) => {
        bubble.y -= bubble.speed
        bubble.x += Math.sin(bubble.y * 0.05) * 0.5

        if (bubble.y + bubble.radius < 0) {
          bubblesRef.current.splice(index, 1)
        }

        const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius)
        gradient.addColorStop(0, "rgba(173, 216, 230, 0.8)")
        gradient.addColorStop(0.8, "rgba(173, 216, 230, 0.3)")
        gradient.addColorStop(1, "rgba(173, 216, 230, 0)")

        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.strokeStyle = "rgba(173, 216, 230, 0.8)"
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(bubble.x - bubble.radius * 0.3, bubble.y - bubble.radius * 0.3, bubble.radius * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) {
        createBubble(e.clientX, e.clientY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [bubblesEnabled])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}

export default BubbleEffectClient

