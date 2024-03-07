import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'

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
      <body className={cn("min-h-screen font-sans antialiased grainy")}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
