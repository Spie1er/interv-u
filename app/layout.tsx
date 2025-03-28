import type { Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Interv-U',
  description: 'AI-powered interview simulator'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${monaSans.className} antialiased pattern`}
        data-gramm='false'
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
