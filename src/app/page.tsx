import Link from 'next/link'
import Image from 'next/image'
import { InvestmentsList } from '@/components/investments-list'
import { BitcoinSymbol } from '@/components/bitcoin-symbol'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="flex flex-col min-h-screen">
        <div className="flex gap-16 max-w-4xl mx-auto pt-24 px-8">
          {/* Profile Picture */}
          <div className="w-48 h-64 relative flex-shrink-0">
            <Image
              src="/pfp.jpeg"
              alt="Caleb A. Shack"
              fill
              className="object-contain rounded-sm"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            {/* Header */}
            <h1 className="text-5xl font-semibold tracking-tight">
              Caleb A. Shack
            </h1>
            
            {/* Bio */}
            <p className="text-lg text-muted-foreground font-light">
              Angel and VC | Prev Big Brain Holdings & Penn | Helping Founders Build
            </p>

            {/* Social Links */}
            <div className="space-y-2 text-sm font-light">
              <div className="flex gap-2 items-center">
                find me on
                <Link 
                  href="https://twitter.com/firstc0in" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                >
                  𝕏
                </Link>
                {' '}and{' '}
                <Link 
                  href="https://t.me/Shack0x" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                >
                  telegram
                </Link>
              </div>

              <div className="flex gap-2 items-center">
                read my
                <Link 
                  href="https://curiousandcritical.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  blog
                </Link>
              </div>
            </div>

            {/* Private Investments */}
            <InvestmentsList />
          </div>
        </div>

        {/* Bitcoin Symbol Footer */}
        <div className="mt-auto flex justify-center pb-12 pt-16">
          <BitcoinSymbol />
        </div>
      </div>
    </main>
  )
}
