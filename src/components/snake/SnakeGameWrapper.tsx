'use client'

import { useState } from 'react'
import { SnakeGame } from './SnakeGame'

export function SnakeGameWrapper() {
  const [showSnakeGame, setShowSnakeGame] = useState(false)

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowSnakeGame(false)
    }
  }

  return (
    <>
      {showSnakeGame && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/20 dark:bg-white/10"
          onClick={handleOverlayClick}
        >
          <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] p-4 rounded-lg border-2 border-black dark:border-white">
            <SnakeGame />
          </div>
        </div>
      )}
      <button
        onClick={() => setShowSnakeGame(!showSnakeGame)}
        className="text-2xl cursor-pointer hover:scale-110 transition-transform"
        aria-label="Toggle Snake Game"
      >
        🍎
      </button>
    </>
  )
} 