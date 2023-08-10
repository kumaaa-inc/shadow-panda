'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { sheet } from '@shadow-panda/styled-system/recipes'
import { styled } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'

const { withProvider, withContext } = createStyleContext(sheet)

const Sheet = withProvider(styled(SheetPrimitive.Root), 'root')
const SheetTrigger = withContext(styled(SheetPrimitive.Trigger), 'trigger')
const SheetClose = withContext(styled(SheetPrimitive.Close), 'close')
const SheetPortal = withContext(styled(SheetPrimitive.Portal), 'portal')
const SheetOverlay = withContext(styled(SheetPrimitive.Overlay), 'overlay')

const BaseSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={className} {...props}>
      {children}
      <SheetClose>
        <X className={css({ h: '4', w: '4' })} />
        <span className={css({ srOnly: true })}>Close</span>
      </SheetClose>
    </SheetPrimitive.Content>
  </SheetPortal>
))
BaseSheetContent.displayName = SheetPrimitive.Content.displayName

const SheetContent = withContext(styled(BaseSheetContent), 'content')
const SheetHeader = withContext(styled('div'), 'header')
const SheetFooter = withContext(styled('div'), 'footer')
const SheetTitle = withContext(styled(SheetPrimitive.Title), 'title')
const SheetDescription = withContext(
  styled(SheetPrimitive.Description),
  'description',
)

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
