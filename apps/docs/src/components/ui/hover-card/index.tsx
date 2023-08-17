'use client'

import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { hoverCard } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(hoverCard)

export const HoverCard = withProvider(styled(HoverCardPrimitive.Root), 'root')
export const HoverCardTrigger = withContext(styled(HoverCardPrimitive.Trigger), 'trigger')
export const HoverCardContent = withContext(styled(HoverCardPrimitive.Content), 'content', {
  align: 'center',
  sideOffset: 4,
})
