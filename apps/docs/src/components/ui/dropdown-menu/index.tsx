'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { css, cx } from '@shadow-panda/styled-system/css'
import { dropdownMenu, icon } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(dropdownMenu)

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  >
    {children}
    <ChevronRight className={icon({ left: 'auto' })} />
  </DropdownMenuPrimitive.SubTrigger>
))
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const Content = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} {...props} />
  </DropdownMenuPrimitive.Portal>
))
Content.displayName = DropdownMenuPrimitive.Content.displayName

const Item = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
Item.displayName = DropdownMenuPrimitive.Item.displayName

const ItemIndicator = withContext(styled(DropdownMenuPrimitive.ItemIndicator), 'itemIndicator')

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} {...props}>
    <ItemIndicator>
      <Check className={icon()} />
    </ItemIndicator>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const RadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem ref={ref} {...props}>
    <ItemIndicator>
      <Circle className={icon({ size: 'xs', fillCurrent: true })} />
    </ItemIndicator>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const Label = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
Label.displayName = DropdownMenuPrimitive.Label.displayName

export const DropdownMenu = withProvider(styled(DropdownMenuPrimitive.Root), 'root')
export const DropdownMenuTrigger = withContext(styled(DropdownMenuPrimitive.Trigger), 'trigger')
export const DropdownMenuGroup = withContext(styled(DropdownMenuPrimitive.Group), 'group')
export const DropdownMenuPortal = withContext(styled(DropdownMenuPrimitive.Portal), 'portal')
export const DropdownMenuSub = withContext(styled(DropdownMenuPrimitive.Sub), 'sub')
export const DropdownMenuRadioGroup = withContext(
  styled(DropdownMenuPrimitive.RadioGroup),
  'radioGroup',
)
export const DropdownMenuSubTrigger = withContext(styled(SubTrigger), 'subTrigger')
export const DropdownMenuSubContent = withContext(
  styled(DropdownMenuPrimitive.SubContent),
  'subContent',
)
export const DropdownMenuContent = withContext(styled(Content), 'content')
export const DropdownMenuItem = withContext(styled(Item), 'item')
export const DropdownMenuCheckboxItem = withContext(styled(CheckboxItem), 'checkboxItem')
export const DropdownMenuRadioItem = withContext(styled(RadioItem), 'radioItem')
export const DropdownMenuLabel = withContext(styled(Label), 'label')
export const DropdownMenuSeparator = withContext(
  styled(DropdownMenuPrimitive.Separator),
  'separator',
)
export const DropdownMenuShortcut = withContext(styled('span'), 'shortcut')
