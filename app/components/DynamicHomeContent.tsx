"use client"

import { useBubbles } from "../contexts/BubbleContext"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import SkillsCarousel from "./SkillsCarousel"
import { useRef, useEffect, useState } from "react"

const BubbleEffect = dynamic(() => import("./BubbleEffect"), { ssr: false })

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
        <section className="flex-grow flex flex-col md:flex-row items-center justify-center p-8 mb-20">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="rounded-full overflow-hidden border-4 border-indigo-500 w-64 h-64 md:w-80 md:h-80 transition-transform duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg"
                alt="Chhavi"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:pr-16">
            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-4">Hi!</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">I'm Chhavi</h1>
            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-4">Full Stack Developer & AI Enthusiast</h2>
            <p className="text-lg mb-8">
              Crafting elegant solutions at the intersection of code and creativity. Always exploring the frontiers of
              technology and pushing the boundaries of what's possible.
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

        <section className="bg-gray-800 py-16 relative z-10 mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <WorkCard
                title="AI-Powered Code Assistant"
                description="An intelligent coding companion using GPT-4 to assist developers."
              />
              <WorkCard
                title="Neural Network Visualizer"
                description="An interactive web app for visualizing and explaining neural networks."
              />
              <WorkCard
                title="Sentiment Analysis Dashboard"
                description="Real-time sentiment analysis of social media trends using AI."
              />
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
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
            <SkillsCarousel />
          </div>
        </section>
      </div>
    </>
  )
}

function WorkCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

