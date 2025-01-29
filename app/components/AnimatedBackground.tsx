import dynamic from "next/dynamic"

const AnimatedBackgroundClient = dynamic(() => import("./AnimatedBackgroundClient"), { ssr: false })

interface AnimatedBackgroundProps {
  isAnimating: boolean
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isAnimating }) => {
  return <AnimatedBackgroundClient isAnimating={isAnimating} />
}

export default AnimatedBackground

