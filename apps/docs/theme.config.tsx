import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { css } from '@shadow-panda/styled-system/css'

const config: DocsThemeConfig = {
  logo: <span>Shadow Panda</span>,
  project: { link: 'https://github.com/kumaaa-inc/shadow-panda' },
  docsRepositoryBase:
    'https://github.com/kumaaa-inc/shadow-panda/blob/main/apps/docs/src/pages',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Shadow Panda',
      }
    }

    return {
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
  footer: {
    text: (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          gap: '4',
          width: '100%',
          fontSize: 'sm',
        })}
      >
        <span>Copyright © {new Date().getFullYear()}</span>
        Shadow Panda
      </div>
    ),
  },
}

export default config
