import * as React from 'react'
import { css, cx } from '@shadow-panda/styled-system/css'

export interface PreviewProps {
  className?: string
  height?: string
  children: React.ReactNode
}

export const Preview = ({ className, height = '350px', children }: PreviewProps) => {
  return (
    <div
      className={cx(
        css({
          width: 'full',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'input',
          borderRadius: 'md',
          p: '10',
        }),
        className,
      )}
      style={{ minHeight: height }}
    >
      {children}
    </div>
  )
}
