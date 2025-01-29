import dynamic from "next/dynamic"

const BubbleEffectClient = dynamic(() => import("./BubbleEffectClient"), { ssr: false })

const BubbleEffect = () => {
  return <BubbleEffectClient />
}

export default BubbleEffect

