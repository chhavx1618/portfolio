import { Suspense } from "react"
import dynamic from "next/dynamic"

const DynamicHomeContent = dynamic(() => import("./components/DynamicHomeContent"), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicHomeContent />
      </Suspense>
    </main>
  )
}

