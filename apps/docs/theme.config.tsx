import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { css } from '@shadow-panda/styled-system/css'

const config: DocsThemeConfig = {
  logo: <span>Shadow Panda</span>,
  project: { link: 'https://github.com/kumaaa-inc/shadow-panda' },
  docsRepositoryBase:
    'https://github.com/kumaaa-inc/shadow-panda/blob/main/apps/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    const baseConfig = {
      description:
        'Shadow Panda is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
      siteName: 'Shadow Panda',
      images: [
        // {
        //   url: 'https://www.example.ie/og-image-01.jpg',
        //   width: 800,
        //   height: 600,
        //   alt: 'Og Image Alt',
        //   type: 'image/jpeg',
        // },
      ],
    }

    if (asPath !== '/') {
      return {
        ...baseConfig,
        titleTemplate: '%s – Shadow Panda',
      }
    }

    return {
      ...baseConfig,
      titleTemplate: 'Shadow Panda',
    }
  },
  navigation: true,
  nextThemes: {
    defaultTheme: 'system',
    storageKey: 'theme',
  },
  sidebar: {
    toggleButton: true,
  },
  darkMode: true,
  primaryHue: 290,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  footer: {
    text: (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          gap: '4',
          width: '100%',
          textStyle: 'sm',
        })}
      >
        <span>Copyright © {new Date().getFullYear()}</span>
        Shadow Panda
      </div>
    ),
  },
}

export default config
