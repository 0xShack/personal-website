'use client'

import { useEffect, useState } from 'react'

export function BitcoinSymbol() {
  const [rotation, setRotation] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const baseSpeed = 50
    const interval = setInterval(() => {
      setRotation(prev => prev + (isHovered ? 10 : 1))
    }, baseSpeed) // Base speed is 50ms

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <a
      href="https://arch.network"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-normal text-orange-500 text-3xl scale-[2] cursor-pointer hover:text-orange-400 transition-colors"
      style={{ 
        transform: `rotate(${rotation}deg) scale(2)`,
        transformOrigin: 'center',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'transform 0.05s linear'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ₿
    </a>
  )
} 