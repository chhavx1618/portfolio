"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const skills = [
  { name: "ReactJs", logo: "/react.png" },
  { name: "Node.js", logo: "/nodejs.png" },
  { name: "Docker", logo: "/docker.png" },
  { name: "Jenkins", logo: "/jenkn.png" },
  { name: "Figma", logo: "/figma.png" },
  { name: "TypeScript", logo: "/ts.png" },
  { name: "NextJs", logo: "/next.png" },
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
      }, 15)
    }

    startAutoScroll()

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
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUpOrLeave = () => setIsDragging(false)

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex space-x-6 py-4 select-none overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex-none w-28 md:w-36 lg:w-40">
            <div className="bg-gray-800 p-4 rounded-lg text-center hover:scale-105 hover:bg-indigo-600 transition-all duration-300 h-full flex flex-col justify-center items-center">
              <Image src={skill.logo} alt={skill.name} width={64} height={64} className="mb-2" />
              <span className="text-sm md:text-lg font-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
