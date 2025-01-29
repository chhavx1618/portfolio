"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "ZenZone",
    description: "A Virtual Reality based Exercise and Physiotherapy System",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "A VR system for exercise and physiotherapy with live data sharing and report generation, along with real-time suggestions and feedback.",
    link: "https://github.com/ZenZone-Rehab",
  },
  {
    id: 2,
    title: "Cli-Client",
    description: "A command-line interface for an API testing tool",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "Written in Js, and distributed as an NPM package, this is a simple tool for testing your projects API right from the command line.",
    link: "https://www.npmjs.com/package/cli-client-chhx",
  },
  {
    id: 3,
    title: "Zocker",
    description: "A simple implementation of Docker in Golang for learning purposes",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "A basic implementation of Docker written in Golang to teach and understand the concepts of containerization and isolation",
    link: "https://github.com/chhavx1618/zocker",
  },
  {
    id: 4,
    title: "Crochet Treasures",
    description: "An functioning ecommerce shop designed and built with Shopify as per the requirements of the client. The shop is specialized for crochet and handmade products",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "A Shopify website designed and built for ecommerce application, fully complete with payment support, customer notifications, domain configuration, DNS management, custom email, marketing, and various other features.",
    link: "https://crochettreasures.in/",
  },
  {
    id: 5,
    title: "JanRakshak",
    description: "An Advanced Drone, IoT and 5G based Disaster Monitoring System",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "Using Drone monitoring, sensor data and 5G networking to monitor and deliver live updates of possible disasters (earthquakes, fires and floods) through a single user interface for prompt action",

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
        <h1 className="text-4xl pd-10 font-bold mb-12 mt-10 text-center">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
          ))}
        </div>
        {projects.length > 3 && (
          <div className="mt-16">
            <FullWidthProjectCard project={projects[3]} onClick={() => setSelectedProject(projects[3].id)} />
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
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
              className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find((p) => p.id === selectedProject) && (
                <>
                  <h2 className="text-2xl font-bold mb-4">{projects.find((p) => p.id === selectedProject)!.title}</h2>
                  <p className="mb-4">{projects.find((p) => p.id === selectedProject)!.details}</p>
                  <a
                    href={projects.find((p) => p.id === selectedProject)!.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
                  >
                    View Project
                  </a>
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
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
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
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
    onClick={onClick}
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={600}
      height={300}
      className="w-full md:w-1/2 h-48 md:h-auto object-cover"
    />
    <div className="p-6 md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-400 mb-2">{project.description}</p>
      <p className="text-gray-300 text-sm">{project.details}</p>
    </div>
  </motion.div>
)

export default WorkPage

