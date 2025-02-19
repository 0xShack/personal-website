'use client'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import investments from '@/data/investments.json'

export function InvestmentsList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="investments" className="border-0">
        <AccordionTrigger className="hover:underline [&[data-state=open]>svg]:hidden [&>svg]:hidden text-sm font-light py-0 -ml-[2px]">
          portfolio
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2.5 mt-2">
            {investments.investments.map((investment, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="mr-2 text-muted-foreground">•</span>
                <Link
                  href={investment.website}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-light"
                  target="_blank"
                >
                  {investment.name}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} 