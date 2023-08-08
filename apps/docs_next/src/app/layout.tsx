import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Shadow Panda',
    template: '%s | Shadow Panda',
  },
  description:
    'Shadow Panda is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
  keywords: ['Panda CSS', 'Ark UI', 'Components', 'React', 'Solid', 'Vue'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shadow-panda.vercel.app',
    description:
      'Shadow Panda is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
  },
  // manifest: '/site.webmanifest',
  twitter: {
    creator: '@nanopx',
  },
}

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>{props.children}</body>
    </html>
  )
}

export default RootLayout
