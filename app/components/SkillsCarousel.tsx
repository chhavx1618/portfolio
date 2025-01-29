"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const skills = [
  { name: "ReactJs", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Docker", logo: "/logos/python.svg" },
  { name: "Jenkins", logo: "/logos/ml.svg" },
  { name: "Figma", logo: "/logos/docker.svg" },
  { name: "TypeScript", logo: "/logos/graphql.svg" },
  { name: "NextJs", logo: "/logos/typescript.svg" },
]

export default function SkillsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollSpeed = 1  // Adjust for faster/slower scrolling
    let intervalId: NodeJS.Timeout

    const startScrolling = () => {
      intervalId = setInterval(() => {
        carousel.scrollLeft += scrollSpeed
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0  // Reset scroll to loop
        }
      }, 20) // Adjust speed by modifying interval time
    }

    startScrolling()

    // Stop scrolling when user interacts and restart after a delay
    const stopScrolling = () => {
      clearInterval(intervalId)
      setTimeout(startScrolling, 2000) // Restart after 2s
    }

    carousel.addEventListener("mouseover", stopScrolling)
    carousel.addEventListener("mouseleave", startScrolling)

    return () => {
      clearInterval(intervalId)
      carousel.removeEventListener("mouseover", stopScrolling)
      carousel.removeEventListener("mouseleave", startScrolling)
    }
  }, [])

  return (
    <div
      className="overflow-hidden"
      style={{ mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)" }}
    >
      <div ref={carouselRef} className="flex space-x-8 py-4" style={{ width: "max-content", display: "flex" }}>
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
