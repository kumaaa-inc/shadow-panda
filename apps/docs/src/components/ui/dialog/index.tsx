'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'
import { dialog, icon } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(dialog)

const DialogPortal = withContext(styled(DialogPrimitive.Portal), 'portal')
const DialogOverlay = withContext(styled(DialogPrimitive.Overlay), 'overlay')
const DialogClose = withContext(styled(DialogPrimitive.Close), 'close')

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} {...props}>
      {children}
      <DialogClose>
        <X className={icon()} />
        <span className={css({ srOnly: true })}>Close</span>
      </DialogClose>
    </DialogPrimitive.Content>
  </DialogPortal>
))
Content.displayName = DialogPrimitive.Content.displayName

export const Dialog = withProvider(styled(DialogPrimitive.Root), 'root')
export const DialogTrigger = withContext(styled(DialogPrimitive.Trigger), 'trigger')
export const DialogContent = withContext(styled(Content), 'content')
export const DialogHeader = withContext(styled('div'), 'header')
export const DialogFooter = withContext(styled('div'), 'footer')
export const DialogTitle = withContext(styled(DialogPrimitive.Title), 'title')
export const DialogDescription = withContext(styled(DialogPrimitive.Description), 'description')
