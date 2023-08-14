'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { contextMenu, icon } from '@shadow-panda/styled-system/recipes'
import { styled } from '@shadow-panda/styled-system/jsx'
import { css, cx } from '@shadow-panda/styled-system/css'

const { withProvider, withContext } = createStyleContext(contextMenu)

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  >
    {children}
    <ChevronRight className={icon({ left: 'auto' })} />
  </ContextMenuPrimitive.SubTrigger>
))
SubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const Item = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
Item.displayName = ContextMenuPrimitive.Item.displayName

const ItemIndicator = withContext(styled(ContextMenuPrimitive.ItemIndicator), 'itemIndicator')

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem ref={ref} className={className} checked={checked} {...props}>
    <ItemIndicator>
      <Check className={icon()} />
    </ItemIndicator>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
CheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const RadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem ref={ref} className={className} {...props}>
    <ItemIndicator>
      <Circle className={icon({ size: 'xs', fillCurrent: true })} />
    </ItemIndicator>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
RadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const Label = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
Label.displayName = ContextMenuPrimitive.Label.displayName

export const ContextMenu = withProvider(styled(ContextMenuPrimitive.Root), 'root')
export const ContextMenuTrigger = withContext(styled(ContextMenuPrimitive.Trigger), 'trigger')
export const ContextMenuGroup = withContext(styled(ContextMenuPrimitive.Group), 'group')
export const ContextMenuPortal = withContext(styled(ContextMenuPrimitive.Portal), 'portal')
export const ContextMenuSub = withContext(styled(ContextMenuPrimitive.Sub), 'sub')
export const ContextMenuRadioGroup = withContext(
  styled(ContextMenuPrimitive.RadioGroup),
  'radioGroup',
)
export const ContextMenuSubTrigger = withContext(styled(SubTrigger), 'subTrigger')
export const ContextMenuSubContent = withContext(
  styled(ContextMenuPrimitive.SubContent),
  'subContent',
)
export const ContextMenuContent = withContext(styled(ContextMenuPrimitive.Content), 'content')
export const ContextMenuItem = withContext(styled(Item), 'item')
export const ContextMenuCheckboxItem = withContext(styled(CheckboxItem), 'checkboxItem')
export const ContextMenuRadioItem = withContext(styled(RadioItem), 'radioItem')
export const ContextMenuLabel = withContext(styled(Label), 'label')
export const ContextMenuSeparator = withContext(styled(ContextMenuPrimitive.Separator), 'separator')
export const ContextMenuShortcut = withContext(styled('span'), 'shortcut')
