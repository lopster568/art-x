import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ART-x',
  description: 'ART-x allows you to have peer to peer transactions with anyone. Simply make an account and start transaction right away.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased grainy", inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
