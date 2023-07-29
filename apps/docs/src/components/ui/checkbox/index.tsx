'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cx, css } from '@shadow-panda/styled-system/css'
import {
  checkbox,
  checkboxIndicator,
} from '@shadow-panda/styled-system/recipes'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cx('peer', checkbox(), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cx(checkboxIndicator())}>
      <Check
        className={css({
          h: '4',
          w: '4',
        })}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
