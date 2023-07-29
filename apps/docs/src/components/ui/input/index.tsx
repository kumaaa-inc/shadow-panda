import * as React from 'react'
import { cx } from '@shadow-panda/styled-system/css'
import { input } from '@shadow-panda/styled-system/recipes'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cx(input(), className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export { Input }
