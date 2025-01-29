"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const skills = [
  { name: "ReactJs", logo: "./react.svg" },
  { name: "Node.js", logo: "./nodejs.svg" },
  { name: "Docker", logo: "./docker.svg" },
  { name: "Jenkins", logo: "./jenkn.svg" },
  { name: "Figma", logo: "./figma.svg" },
  { name: "TypeScript", logo: "./ts.svg" },
  { name: "NextJs", logo: "./next.svg" },
]

export default function SkillsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let intervalId: NodeJS.Timeout

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        carousel.scrollLeft += 1
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0 // Reset scroll to loop
        }
      }, 20)
    }

    startAutoScroll()

    // Stop auto-scroll on mouse over and restart on mouse leave
    const stopAutoScroll = () => clearInterval(intervalId)
    carousel.addEventListener("mouseenter", stopAutoScroll)
    carousel.addEventListener("mouseleave", startAutoScroll)

    return () => {
      clearInterval(intervalId)
      carousel.removeEventListener("mouseenter", stopAutoScroll)
      carousel.removeEventListener("mouseleave", startAutoScroll)
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current
    if (!carousel) return

    setIsDragging(true)
    setStartX(e.pageX - carousel.offsetLeft)
    setScrollLeft(carousel.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const carousel = carouselRef.current
    if (!carousel) return

    const x = e.pageX - carousel.offsetLeft
    const walk = (x - startX) * 2 // Speed multiplier
    carousel.scrollLeft = scrollLeft - walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)" }}
    >
      <div
        ref={carouselRef}
        className="flex space-x-8 py-4 select-none"
        style={{ width: "max-content", display: "flex" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex-none w-40 h-40">
            <div className="bg-gray-800 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-indigo-600 h-full flex flex-col justify-center items-center">
              <Image src={skill.logo || "/placeholder.svg"} alt={skill.name} width={64} height={64} className="mb-2" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
