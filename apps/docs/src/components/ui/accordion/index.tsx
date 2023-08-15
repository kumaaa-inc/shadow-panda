'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled, type HTMLStyledProps } from '@shadow-panda/styled-system/jsx'
import { accordion } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(accordion)

const Header = withContext(styled(AccordionPrimitive.Header), 'header')

const Trigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <Header>
    <AccordionPrimitive.Trigger ref={ref} {...props}>
      {children}
      <ChevronDown />
    </AccordionPrimitive.Trigger>
  </Header>
))
Trigger.displayName = AccordionPrimitive.Trigger.displayName

const Content = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} {...props}>
    <div>{children}</div>
  </AccordionPrimitive.Content>
))
Content.displayName = AccordionPrimitive.Content.displayName

// NOTE: union-style conditional props are not yet supported in `styled()`
// @see https://github.com/chakra-ui/panda/issues/1220
type AccordionComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentProps<typeof AccordionPrimitive.Root>> &
    HTMLStyledProps<typeof AccordionPrimitive.Root> &
    React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Root>>
>

export const Accordion = withProvider(styled(AccordionPrimitive.Root), 'root') as AccordionComponent
export const AccordionItem = withContext(styled(AccordionPrimitive.Item), 'item')
export const AccordionTrigger = withContext(styled(Trigger), 'trigger')
export const AccordionContent = withContext(styled(Content), 'content')
