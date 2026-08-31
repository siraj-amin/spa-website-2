import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karachi Best Escorts',
  description: 'Private, discreet companionship experiences in Karachi.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
