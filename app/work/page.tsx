"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

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
    image: "./code1.svg",
    details:
      "Written in Javascript, and distributed as an NPM package, this is a simple tool for testing your projects API right from the command line.",
    link: "https://www.npmjs.com/package/cli-client-chhx",
  },
  {
    id: 3,
    title: "Zocker",
    description: "A simple implementation of Docker in Golang",
    image: "./code2.svg",
    details:
      "A basic implementation of Docker written in Golang to teach and understand the concepts of containerization.",
    link: "https://github.com/chhavx1618/zocker",
  },
  {
    id: 4,
    title: "Crochet Treasures",
    description: "A functioning E-Commerce shop built with Shopify",
    image: "./crochet.svg",
    details:
      "A Shopify website designed and built for eCommerce, fully complete with payment support, notifications, and marketing features.",
    link: "https://crochettreasures.in/",
  },
  {
    id: 5,
    title: "JanRakshak",
    description: "An Advanced Drone, IoT and 5G based Disaster Monitoring System",
    image: "./drone.svg",
    details:
      "Using Drone monitoring, sensor data, and 5G networking to monitor and deliver live updates of possible disasters.",
  },
  {
    id: 6,
    title: "Agro-Assist",
    description: "A simple agriculture assistant with a user interface to monitor soil moisture, humidity and other conditions to optimize plant growth and improve profits",
    image: "./agro.png",
    details:
      "Conceptualization of the use of IoT and automation for improving yield and plant growth by optimizing the humidity, soil condition, nutrients, and controlling pests for the best performance.",
  },
]

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-32 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 mt-10 text-center">My Work</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            index % 4 === 3 ? (
              // Full-width project (every 4th project)
              <FullWidthProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
            ) : (
              // Normal 3-in-a-row project
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
            )
          ))}
        </div>
      </motion.div>

      {/* Modal for Selected Project */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find((p) => p.id === selectedProject) && (
                <>
                  <Image
                    src={projects.find((p) => p.id === selectedProject)!.image || "/placeholder.svg"}
                    alt={projects.find((p) => p.id === selectedProject)!.title}
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-4">{projects.find((p) => p.id === selectedProject)!.title}</h2>
                  <p className="mb-4">{projects.find((p) => p.id === selectedProject)!.details}</p>
                  {projects.find((p) => p.id === selectedProject)!.link && (
                    <a
                      href={projects.find((p) => p.id === selectedProject)!.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
                    >
                      View Project
                    </a>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ProjectCard = ({ project, onClick }: { project: (typeof projects)[0]; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-400">{project.description}</p>
    </div>
  </motion.div>
)
const FullWidthProjectCard = ({ project, onClick }: { project: (typeof projects)[0]; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row md:col-span-3 mb-10 mt-10 cursor-pointer h-52"
    onClick={onClick}
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={600}
      height={100}
      className="w-full md:w-1/3 h-52 object-cover"
    />
    <div className="p-4 flex-1 flex flex-col justify-center">
      <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
      <p className="text-gray-400 text-sm">{project.description}</p>
    </div>
  </motion.div>
)

export default WorkPage
