'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cx } from '@shadow-panda/styled-system/css'
import { switchRecipe, switchThumb } from '@shadow-panda/styled-system/recipes'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cx('peer', switchRecipe(), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cx(switchThumb())} />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
