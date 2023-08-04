import * as React from 'react'
import { cx } from '@shadow-panda/styled-system/css'
import { textarea } from '@shadow-panda/styled-system/recipes'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cx(textarea(), className)} ref={ref} {...props} />
    )
  },
)

Textarea.displayName = 'Textarea'

export { Textarea }
