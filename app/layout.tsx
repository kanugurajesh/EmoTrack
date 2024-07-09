import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emotrack',
  description: 'An application to monitor mental health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased bg-white p-10 pb-4',
            fontSans.variable
          )}
        >
          <div className='pt-4 rounded-xl h-full w-full bg-yellow-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
