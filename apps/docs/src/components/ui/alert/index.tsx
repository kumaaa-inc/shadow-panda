import * as React from 'react'
import { styled } from '@shadow-panda/styled-system/jsx'
import { alert, alertTitle, alertDescription } from '@shadow-panda/styled-system/recipes'

const BaseAlert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <div ref={ref} {...props} role="alert" />,
)

export const Alert = styled(BaseAlert, alert)
export const AlertTitle = styled('h5', alertTitle)
export const AlertDescription = styled('div', alertDescription)
