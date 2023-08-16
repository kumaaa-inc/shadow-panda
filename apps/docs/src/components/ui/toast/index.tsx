import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { toast, toastViewport, icon } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(toast)

const Close = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>((props, ref) => (
  <ToastPrimitives.Close ref={ref} toast-close="" {...props}>
    <X className={icon()} />
  </ToastPrimitives.Close>
))
Close.displayName = ToastPrimitives.Close.displayName

export const ToastProvider = ToastPrimitives.Provider
export const ToastViewport = styled(ToastPrimitives.Viewport, toastViewport)
export const Toast = withProvider(styled(ToastPrimitives.Root), 'root', { className: 'group' })
export const ToastAction = withContext(styled(ToastPrimitives.Action), 'action')
export const ToastClose = withContext(styled(Close), 'close')
export const ToastTitle = withContext(styled(ToastPrimitives.Title), 'title')
export const ToastDescription = withContext(styled(ToastPrimitives.Description), 'description')

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = React.ReactElement<typeof ToastAction>
