'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import investments from '@/data/investments.json'

export function InvestmentsList() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleTriggerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full"
      value={(isHovered || isOpen) ? "investments" : undefined}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AccordionItem value="investments" className="border-0">
        <AccordionTrigger 
          onMouseEnter={() => setIsHovered(true)}
          onClick={handleTriggerClick}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors [&[data-state=open]>svg]:hidden [&>svg]:hidden text-base font-light py-0 -ml-[2px] group flex items-center"
        >
          <span className="flex items-center gap-1.5">
            portfolio
            <span className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xs">
              →
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent onMouseEnter={() => setIsHovered(true)}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {investments.investments.map((investment, index) => (
              <li key={index} className="group">
                <Link
                  href={investment.website}
                  className="flex items-center gap-2 text-sm p-2 rounded-md transition-colors
                    bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/30 dark:hover:bg-gray-900/50"
                  target="_blank"
                >
                  <span className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    *
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {investment.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} 