'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { alertDialog, button } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(alertDialog)

const AlertDialogPortal = withContext(styled(AlertDialogPrimitive.Portal), 'portal')
const AlertDialogOverlay = withContext(styled(AlertDialogPrimitive.Overlay), 'overlay')

const Content = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content ref={ref} className={className} {...props} />
  </AlertDialogPortal>
))
Content.displayName = AlertDialogPrimitive.Content.displayName

const Cancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cx(button({ variant: 'outline' }), className)}
    {...props}
  />
))
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName

export const AlertDialog = withProvider(styled(AlertDialogPrimitive.Root), 'root')
export const AlertDialogTrigger = withContext(styled(AlertDialogPrimitive.Trigger), 'trigger')
export const AlertDialogContent = withContext(styled(Content), 'content')
export const AlertDialogHeader = withContext(styled('div'), 'header')
export const AlertDialogFooter = withContext(styled('div'), 'footer')
export const AlertDialogTitle = withContext(styled(AlertDialogPrimitive.Title), 'title')
export const AlertDialogDescription = withContext(
  styled(AlertDialogPrimitive.Description),
  'description',
)
export const AlertDialogAction = withContext(styled(AlertDialogPrimitive.Action, button), 'action')
export const AlertDialogCancel = withContext(styled(Cancel), 'cancel')
