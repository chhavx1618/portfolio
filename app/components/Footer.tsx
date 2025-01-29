import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="ml-5">
            <h3 className="text-xl font-semibold ml-20 mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-indigo-400 ml-20 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-indigo-400 ml-20 transition-colors">
                About
              </Link>
              <Link href="/work" className="hover:text-indigo-400 ml-20 transition-colors">
                Work
              </Link>
              <Link href="/contact" className="hover:text-indigo-400 ml-20 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
            <p className="mb-4">Have a project in mind? I'd love to hear about it!</p>
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-4 py-2 mt-5 rounded-full hover:bg-indigo-700 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>

          <div className="ml-5">
            <h3 className="text-xl font-semibold ml-40 mb-4">Connect</h3>
            <div className="flex ml-40 space-x-4">
              <a
                href="https://github.com/Chhavx1618"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/chhavi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/chhavi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Chhavi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

