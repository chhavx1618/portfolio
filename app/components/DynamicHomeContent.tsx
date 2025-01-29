"use client"

import { useBubbles } from "../contexts/BubbleContext"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import SkillsCarousel from "./SkillsCarousel"
import { useRef, useEffect, useState } from "react"

const BubbleEffect = dynamic(() => import("./BubbleEffect"), { ssr: false })

const projects = [
  {
    id: 1,
    title: "ZenZone",
    description: "A Virtual Reality based Exercise and Physiotherapy System",
    image: "./vr.svg",
    details:
      "A VR system for exercise and physiotherapy with live data sharing and report generation, along with real-time suggestions and feedback.",
    link: "https://github.com/ZenZone-Rehab",
  },
  {
    id: 2,
    title: "Cli-Client",
    description: "A command-line interface for an API testing tool",
    image: "./code2.svg",
    details:
      "Written in Js, and distributed as an NPM package, this is a simple tool for testing your projects API right from the command line.",
    link: "https://www.npmjs.com/package/cli-client-chhx",
  },
  {
    id: 3,
    title: "Zocker",
    description: "A simple implementation of Docker in Golang for learning purposes",
    image: "./code1.svg",
    details:
      "A basic implementation of Docker written in Golang to teach and understand the concepts of containerization and isolation",
    link: "https://github.com/chhavx1618/zocker",
  },
]

export default function DynamicHomeContent() {
  const { bubblesEnabled, toggleBubbles } = useBubbles()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading spinner
  }

  return (
    <>
      <BubbleEffect />
      <div className="min-h-screen flex flex-col relative z-10">
        <section className="flex-grow flex flex-col md:flex-row items-center justify-center p-8 mb-20 mt-20">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="rounded-full overflow-hidden border-4 border-indigo-500 w-96 h-96 ml-10 md:w-[500px] md:h-[500px] transition-transform duration-300 hover:scale-105">
            <Image
              src="./me.svg"
              alt="Chhavi"
              width={600} // Increase the width
              height={600} // Increase the height
              className="object-cover w-full h-full"
            />
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:pr-16">
            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-4">Hi!</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">I'm Chhavi</h1>
            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-4">Full Stack Development & DevOps</h2>
            <p className="text-lg mb-8">
              Crafting elegant solutions at the intersection of code and creativity.
            </p>
            <div className="flex items-center mb-4">
              <span className="mr-4">Slide for bubbles:</span>
              <button
                onClick={toggleBubbles}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${
                  bubblesEnabled ? "bg-indigo-600" : "bg-gray-400"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                    bubblesEnabled ? "transform translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-16 relative z-10 mt-20 mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/work"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 relative z-10 mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-20 mt-20 text-center">Skills & Expertise</h2>
            <SkillsCarousel />
          </div>
        </section>
      </div>
    </>
  )
}

function WorkCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300">{project.description}</p>
      {project.link && (
        <div className="mt-4">
          <Link
            href={project.link}
            className="text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </Link>
        </div>
      )}
    </div>
  )
}
