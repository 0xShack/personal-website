import Link from 'next/link'
import Image from 'next/image'
import { InvestmentsList } from '@/components/investments-list'
import { BitcoinSymbol } from '@/components/bitcoin-symbol'
import { SnakeGameWrapper } from '@/components/snake/SnakeGameWrapper'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-24 bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5] dark:from-[#0A0A0A] dark:to-[#111111]">
      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pt-32 px-8">
          {/* Profile Picture Container */}
          <div className="relative w-48 h-64 lg:w-[340px] lg:h-[460px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg -rotate-2"></div>
            <Image
              src="/pfp.jpeg"
              alt="Caleb A. Shack"
              fill
              className="object-cover rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                Caleb A. Shack
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Head of Ecosystem at Arch | Prev Big Brain Holdings & Penn | Helping Founders Build
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3 text-base font-light">
              <div className="flex items-center gap-6">
                <span className="text-muted-foreground">find me on</span>
                <div className="flex gap-4">
                  <Link 
                    href="https://twitter.com/firstc0in" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    𝕏
                  </Link>
                  <Link 
                    href="https://t.me/Shack0x" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    telegram
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-muted-foreground">read my</span>
                <Link 
                  href="https://curiousandcritical.com" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  blog
                </Link>
              </div>
            </div>

            {/* Investments Section */}
            <div className="pt-4">
              <InvestmentsList />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative mt-20 mb-12 md:fixed md:bottom-0 md:left-0 md:right-0 md:pb-12">
          {/* Snake Game - Hidden in plain sight */}
          <div className="absolute right-8 bottom-16 opacity-30 hover:opacity-100 transition-opacity duration-300">
            <SnakeGameWrapper />
          </div>
          {/* Bitcoin symbol with enhanced styling */}
          <div className="flex justify-center">
            <BitcoinSymbol />
          </div>
        </div>
      </div>
    </main>
  )
}
