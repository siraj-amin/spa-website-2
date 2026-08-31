import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = { title: 'Karachi Best Escorts', description: 'Private, discreet companionship across Karachi.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-paper"><body><SiteHeader />{children}<SiteFooter /></body></html>
}
