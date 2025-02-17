import Link from 'next/link'
import Image from 'next/image'
import { InvestmentsList } from '@/components/investments-list'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex gap-12 max-w-5xl mx-auto pt-32 pr-8">
        {/* Profile Picture */}
        <div className="w-48 h-64 relative flex-shrink-0 ml-8">
          <Image
            src="/pfp.jpeg"
            alt="Caleb A. Shack"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-2xl">
          {/* Header */}
          <h1 className="text-4xl font-bold">Caleb A. Shack</h1>
          
          {/* Bio */}
          <p className="text-lg text-muted-foreground">
            Angel and VC | Prev Big Brain Holdings & Penn | Helping Founders Build
          </p>

          {/* Social Links */}
          <div className="flex gap-2 items-center">
            find me on
            <Link 
              href="https://twitter.com/firstc0in" 
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              X
            </Link>
            {' '}and{' '}
            <Link 
              href="https://t.me/Shack0x" 
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              telegram
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            read my
            <Link 
              href="https://curiousandcritical.com" 
              className="text-blue-500 hover:underline"
            >
              blog
            </Link>
          </div>

          {/* Private Investments */}
          <InvestmentsList />
        </div>
      </div>
    </main>
  )
}
