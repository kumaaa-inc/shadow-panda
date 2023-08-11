'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { css } from '@shadow-panda/styled-system/css'
import { components } from './components'

interface MdxProps {
  code: string
}

export function MdxComponent({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div
      className={css({
        // Add code block title styles
        '& [data-rehype-pretty-code-title]': {
          roundedTop: 'lg',
          bg: 'secondary',
          color: 'secondary.foreground',
          mt: '6',
          textStyle: 'xs',
          px: '4',
          py: '2',

          '& + div > pre': {
            roundedTop: '0',
            mt: '0',
          },
        },
      })}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Component components={components as any} />
    </div>
  )
}
