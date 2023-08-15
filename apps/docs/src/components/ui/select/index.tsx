'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { select, icon } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(select)

const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={icon({ dimmed: true })} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
Trigger.displayName = SelectPrimitive.Trigger.displayName

const Viewport = withContext(SelectPrimitive.Viewport, 'viewport')

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content ref={ref} position={position} data-position={position} {...props}>
      <Viewport data-position={position}>{children}</Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
Content.displayName = SelectPrimitive.Content.displayName

const ItemIndicator = withContext(styled(SelectPrimitive.ItemIndicator), 'itemIndicator')

const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} {...props}>
    <ItemIndicator>
      <Check className={icon()} />
    </ItemIndicator>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
Item.displayName = SelectPrimitive.Item.displayName

export const Select = withProvider(styled(SelectPrimitive.Root), 'root')
export const SelectGroup = withContext(styled(SelectPrimitive.Group), 'group')
export const SelectValue = withContext(styled(SelectPrimitive.Value), 'value')
export const SelectTrigger = withContext(styled(Trigger), 'trigger')
export const SelectContent = withContext(styled(Content), 'content')
export const SelectLabel = withContext(styled(SelectPrimitive.Label), 'label')
export const SelectItem = withContext(styled(Item), 'item')
export const SelectSeparator = withContext(styled(SelectPrimitive.Separator), 'separator')
