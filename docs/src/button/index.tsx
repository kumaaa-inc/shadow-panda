import * as React from 'react'
import {
  button,
  type ButtonVariantProps,
} from '@shadow-panda/styled-system/recipes'

export interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode
}

export const Button = ({ variant, size, children }: ButtonProps) => {
  return (
    <button
      className={button({
        variant,
        size,
      })}
    >
      {children}
    </button>
  )
}
