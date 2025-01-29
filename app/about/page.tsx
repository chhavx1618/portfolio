"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="bg-black bg-opacity-5 rounded-lg p-8 backdrop-filter backdrop-blur-sm">
          <div className="text-center mb-12">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Chhavi"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 bg-gray-300"
            />
            <h1 className="text-4xl font-bold mb-2">Chhavi</h1>
            <p className="text-xl text-indigo-400">
              A passionate and driven individual with a keen interest in leveraging technology to create positive
              change. Always seeking new challenges and opportunities to learn and grow.
            </p>
          </div>

          <Section title="About Me">
            <p>
              I'm a highly motivated and results-oriented individual with a proven track record in [mention specific
              field/industry]. My skills encompass [list key skills, e.g., project management, problem-solving,
              communication]. I'm adept at collaborating effectively within teams and consistently exceeding
              expectations. I'm eager to contribute my expertise to a dynamic and challenging environment.
            </p>
          </Section>

          <Section title="Experience">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                [Previous Role 1] at [Company 1], where I [briefly describe accomplishments and responsibilities].
              </li>
              <li>[Previous Role 2] at [Company 2], focusing on [key responsibilities and achievements].</li>
              <li>[Previous Role 3 or relevant project] demonstrating skills in [relevant skills].</li>
              <li>[Another relevant experience or achievement].</li>
            </ul>
          </Section>

          <Section title="Skills">
            <ul className="list-disc pl-5 space-y-2">
              <li>[List key skills - tailor to Chhavi's profile]</li>
              <li>[List key skills - tailor to Chhavi's profile]</li>
              <li>[List key skills - tailor to Chhavi's profile]</li>
              <li>[List key skills - tailor to Chhavi's profile]</li>
              <li>[List key skills - tailor to Chhavi's profile]</li>
            </ul>
          </Section>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </motion.section>
)

export default AboutPage

