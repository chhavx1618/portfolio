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
              alt="Chhavi Arora"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 bg-gray-300"
            />
            <h1 className="text-4xl font-bold mb-2">Chhavi Arora</h1>
            <p className="text-xl text-indigo-400">
            Crafting elegant solutions at the intersection of code and creativity.
            </p>
          </div>

          <Section title="About Me">
            <p>
            I'm a passionate individual, interested in learning and challenging myself continously. I am currently working in full stack development, devops, and IoT applications. More recently, I have been dabbling in AR/VR technologies. I have created serveral projects and have worked in these fields extensively, and continue doing so. 
            </p>
          </Section>

          <Section title="Achievments & Experience">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                [UX/UI Designer] at [Fit4Sure], where I [Designed a mobile app and redesigned a web app using Figma and related tools].
              </li>
              <li>Certification in Docker, Fundamentals of DevOps from KodeKloud.</li>
              <li>Current IRP Lead of the E-Cell, IIITV and previous member of the SSIP Cell, IIITV</li>
              <li>Winner at HackIIITV 2024 in Open Innovation</li>
              <li>Top 10 teams at HackThisFall 4.0</li>
            </ul>
          </Section>

          <Section title="Skills">
            <ul className="list-disc pl-5 space-y-2">
              <li>[Full Stack Development - ReactJS/NextJs, NodeJS, MongoDB]</li>
              <li>[Docker, Jenkins, CI/CD tools, Github & Git]</li>
              <li>[Figma, Canva, and similar designing tools]</li>
              <li>[Shopify Ecommerce Development]</li>
            </ul>
          </Section>

          <Section title ="Education">
            <li>Indian Institute of Information Technology, Vadodara - B.Tech in Computer Science Engineering (CPI - 8.03)</li>
            <li>Carmel Convent Senior Secondary School, Bhopal</li>
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

