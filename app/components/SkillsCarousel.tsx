"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const skills = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Machine Learning", logo: "/logos/ml.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "GraphQL", logo: "/logos/graphql.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
]

export default function SkillsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollSpeed = 0.5
    let animationFrameId: number

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += scrollSpeed
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div
      className="overflow-hidden"
      style={{ mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)" }}
    >
      <div ref={carouselRef} className="flex space-x-8 py-4" style={{ width: "max-content" }}>
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

