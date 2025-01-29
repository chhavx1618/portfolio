"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description: "An intelligent coding companion using GPT-4 to assist developers.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "This project integrates OpenAI's GPT-4 into a VS Code extension, providing real-time code suggestions, bug detection, and natural language to code conversion. It significantly boosts developer productivity and code quality.",
    link: "https://github.com/chhavi/ai-code-assistant",
  },
  {
    id: 2,
    title: "Neural Network Visualizer",
    description: "An interactive web app for visualizing and explaining neural networks.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "Built with React and D3.js, this tool allows users to construct, train, and visualize neural networks in real-time. It's designed to make complex AI concepts more accessible to beginners and experts alike.",
    link: "https://github.com/chhavi/neural-net-viz",
  },
  {
    id: 3,
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis of social media trends using AI.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "This full-stack application uses natural language processing to analyze sentiment across various social media platforms. Built with Node.js, React, and TensorFlow.js, it provides valuable insights for businesses and researchers.",
    link: "https://github.com/chhavi/sentiment-dashboard",
  },
  {
    id: 4,
    title: "AI-Driven Personal Finance Manager",
    description: "An intelligent financial planning and analysis tool.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "Leveraging machine learning algorithms, this application provides personalized financial advice, predicts future expenses, and helps users optimize their budgets. It integrates with various banking APIs and uses React Native for a seamless mobile experience.",
    link: "https://github.com/chhavi/ai-finance-manager",
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

