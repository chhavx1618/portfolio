import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import { BubbleProvider } from "./contexts/BubbleContext"
import Footer from "./components/Footer"
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ["latin"] })

const AnimatedBackground = dynamic(() => import("./components/AnimatedBackground"), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <BubbleProvider>
          <AnimatedBackground isAnimating={true} />
          <Navbar />
          {children}
          <Footer />
        </BubbleProvider>
      </body>
    </html>
  )
}

