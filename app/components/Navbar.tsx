"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-800 bg-opacity-90 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white tracking-widest" style={{ fontFamily: "Avante Garde, Bold" }}>
              Chhavi
            </Link>
          </div>

          {/* Right side - Navigation & Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/work">My Work</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <SocialIcon href="https://github.com/chhavx1618" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/chhavi-arora-b2483127a/" icon={<FaLinkedin />} />
            <SocialIcon href="https://x.com/Chhax1618" icon={<FaTwitter />} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (when open) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-2/3 bg-gray-900 shadow-lg py-4 px-6">
          <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="/work" onClick={() => setIsOpen(false)}>My Work</NavLink>
          <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <div className="flex mt-4 space-x-4">
            <SocialIcon href="https://github.com/chhavx1618" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/chhavi-arora-b2483127a/" icon={<FaLinkedin />} />
            <SocialIcon href="https://x.com/Chhax1618" icon={<FaTwitter />} />
          </div>
        </div>
      )}
    </motion.nav>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
  >
    {children}
  </Link>
)

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white ml-3">
    {React.cloneElement(icon as React.ReactElement, { size: 24 })}
  </a>
)

export default Navbar
