'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { components } from './components'

interface MdxProps {
  code: string
}

export function MdxComponent({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Component components={components as any} />
    </div>
  )
}
