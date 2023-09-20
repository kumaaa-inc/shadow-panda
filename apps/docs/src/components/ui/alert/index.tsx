import * as React from 'react'
import { styled } from '@shadow-panda/styled-system/jsx'
import { alert, alertTitle, alertDescription } from '@shadow-panda/styled-system/recipes'

const BaseAlert = (
  props: React.HTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => <div ref={ref} {...props} role="alert" />

export const Alert = styled(
  React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(BaseAlert),
  alert,
)
export const AlertTitle = styled('h5', alertTitle)
export const AlertDescription = styled('div', alertDescription)
