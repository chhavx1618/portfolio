"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import type React from "react" // Added import for React

const AnimatedBackground = dynamic(() => import("../components/AnimatedBackground"), { ssr: false })

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to an API)
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 relative"
    >
      <AnimatedBackground isAnimating={true} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg mt-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white"
            ></textarea>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default ContactPage

