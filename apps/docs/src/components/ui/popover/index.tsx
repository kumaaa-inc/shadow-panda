'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { popover } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(popover)

const Portal = withContext(styled(PopoverPrimitive.Portal), 'portal')

const Content = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ align = 'center', sideOffset = 4, ...props }, ref) => (
  <Portal>
    <PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} {...props} />
  </Portal>
))
Content.displayName = PopoverPrimitive.Content.displayName

export const Popover = withProvider(styled(PopoverPrimitive.Root), 'root')
export const PopoverTrigger = withContext(styled(PopoverPrimitive.Trigger), 'trigger')
export const PopoverContent = withContext(styled(Content), 'content')
