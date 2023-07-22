import * as React from 'react'
import { css } from '@shadow-panda/styled-system/css'

export const Preview = ({
  height = '350px',
  children,
}: {
  height?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={css({
        width: 'full',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1',
        borderColor: 'input',
        borderRadius: 'md',
        p: '10',
      })}
      style={{ minHeight: height }}
    >
      {children}
    </div>
  )
}
