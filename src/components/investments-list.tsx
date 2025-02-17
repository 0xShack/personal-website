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
    <Accordion type="single" collapsible className="w-full -mt-1">
      <AccordionItem value="investments" className="border-0">
        <AccordionTrigger className="hover:underline [&[data-state=open]>svg]:hidden [&>svg]:hidden text-base font-normal py-0">
          portfolio
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {investments.investments.map((investment, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                <Link
                  href={investment.website}
                  className="text-blue-500 hover:underline"
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