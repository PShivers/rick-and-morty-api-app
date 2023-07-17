import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rickipedia',
  description: 'A UI for the rick and morty API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-screen`}>
        <div>
        <Link className='w-full flex justify-center py-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white' href={`/`}>Rickipedia</Link>

        </div>

        {children}
        </body>
    </html>
  )
}
