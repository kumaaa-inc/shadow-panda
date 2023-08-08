'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cx } from '@shadow-panda/styled-system/css'
import { label, type LabelVariant } from '@shadow-panda/styled-system/recipes'

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelVariant
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cx(label(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
