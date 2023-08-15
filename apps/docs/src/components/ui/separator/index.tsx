'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { styled } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { separator } from '@shadow-panda/styled-system/recipes'

const BaseSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cx(separator({ orientation }), className)}
    {...props}
  />
))
BaseSeparator.displayName = SeparatorPrimitive.Root.displayName

export const Separator = styled(BaseSeparator)
