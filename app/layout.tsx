import { Footer, Nav } from '@components'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '400'] })

export const metadata: Metadata = {
  title: 'Building Constructions',
  description: 'A building construction website',
  keywords:['building', 'Nigeria', 'Enugu', 'engineers', 'drawing', 'agents', 'realtor']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='gradient'/>
        <main className='app'>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 fill-transparent">
          Let's get you up to speed with the Best available options
          
          <Link className=" black_btn z-2" href="/Login">
                LOGIN
          </Link>
        </p>          
      </div> 
          <Nav/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  )
}
