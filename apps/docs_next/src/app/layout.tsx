import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { css } from '@shadow-panda/styled-system/css'
import { Header } from '@/components/docs/header'
import { Footer } from '@/components/docs/footer'
import '../styles/global.css'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Shadow Panda',
    template: '%s | Shadow Panda',
  },
  description:
    'Shadow Panda is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
  keywords: [
    'Shadow Panda',
    'Panda CSS',
    'shadcn/ui',
    'Radix UI',
    'Components',
    'React',
  ],
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shadow-panda.vercel.app',
    description:
      'Shadow Panda is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
  },
  twitter: {
    creator: '@nanopx',
  },
}

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              minH: 'screen',
            })}
          >
            <Header />
            <div className={css({ flex: '1' })}>{props.children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
