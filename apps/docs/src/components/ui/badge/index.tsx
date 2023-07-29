import * as React from 'react'
import { cx } from '@shadow-panda/styled-system/css'
import {
  badge,
  type BadgeVariantProps,
} from '@shadow-panda/styled-system/recipes'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BadgeVariantProps {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cx(badge({ variant }), className)} {...props} />
}

export { Badge }
