'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { css, cx } from '@shadow-panda/styled-system/css'
import { menubar, icon } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(menubar)

const ItemIndicator = withContext(MenubarPrimitive.ItemIndicator, 'itemIndicator')

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  >
    {children}
    <ChevronRight className={icon({ left: 'auto' })} />
  </MenubarPrimitive.SubTrigger>
))
SubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const Content = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
Content.displayName = MenubarPrimitive.Content.displayName

const Item = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
Item.displayName = MenubarPrimitive.Item.displayName

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem ref={ref} checked={checked} {...props}>
    <ItemIndicator>
      <Check className={icon()} />
    </ItemIndicator>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
CheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const RadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem ref={ref} {...props}>
    <ItemIndicator>
      <Circle className={icon({ size: 'xs', fillCurrent: true })} />
    </ItemIndicator>
    {children}
  </MenubarPrimitive.RadioItem>
))
RadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const Label = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    insetLeft?: boolean
  }
>(({ className, insetLeft, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cx(insetLeft && css({ pl: '8' }), className)}
    {...props}
  />
))
Label.displayName = MenubarPrimitive.Label.displayName

export const Menubar = withProvider(styled(MenubarPrimitive.Root), 'root')
export const MenubarMenu = withContext(styled(MenubarPrimitive.Menu), 'menu')
export const MenubarGroup = withContext(styled(MenubarPrimitive.Group), 'group')
export const MenubarPortal = withContext(styled(MenubarPrimitive.Portal), 'portal')
export const MenubarSub = withContext(styled(MenubarPrimitive.Sub), 'sub')
export const MenubarRadioGroup = withContext(styled(MenubarPrimitive.RadioGroup), 'radioGroup')
export const MenubarTrigger = withContext(styled(MenubarPrimitive.Trigger), 'trigger')
export const MenubarContent = withContext(styled(Content), 'content')
export const MenubarSubTrigger = withContext(styled(SubTrigger), 'subTrigger')
export const MenubarSubContent = withContext(styled(MenubarPrimitive.SubContent), 'subContent')
export const MenubarItem = withContext(styled(Item), 'item')
export const MenubarCheckboxItem = withContext(styled(CheckboxItem), 'checkboxItem')
export const MenubarRadioItem = withContext(styled(RadioItem), 'radioItem')
export const MenubarLabel = withContext(styled(Label), 'label')
export const MenubarSeparator = withContext(styled(MenubarPrimitive.Separator), 'separator')
export const MenubarShortcut = withContext(styled('span'), 'shortcut')
