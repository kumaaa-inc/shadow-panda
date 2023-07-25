import * as React from 'react'
import { cx } from '@shadow-panda/styled-system/css'
import {
  alert,
  alertTitle,
  alertDescription,
  type AlertVariantProps,
} from '@shadow-panda/styled-system/recipes'

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertVariantProps
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cx(alert({ variant }), className)}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cx(alertTitle(), className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(alertDescription(), className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
