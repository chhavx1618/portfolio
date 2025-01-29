"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type BubbleContextType = {
  bubblesEnabled: boolean
  toggleBubbles: () => void
}

const BubbleContext = createContext<BubbleContextType | undefined>(undefined)

export const BubbleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bubblesEnabled, setBubblesEnabled] = useState(false) // Set to false by default

  const toggleBubbles = () => {
    setBubblesEnabled(!bubblesEnabled)
  }

  return <BubbleContext.Provider value={{ bubblesEnabled, toggleBubbles }}>{children}</BubbleContext.Provider>
}

export const useBubbles = () => {
  const context = useContext(BubbleContext)
  if (context === undefined) {
    throw new Error("useBubbles must be used within a BubbleProvider")
  }
  return context
}

