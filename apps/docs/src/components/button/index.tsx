import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cx } from '@shadow-panda/styled-system/css'
import {
  button,
  type ButtonVariantProps,
} from '@shadow-panda/styled-system/recipes'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cx(button({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
