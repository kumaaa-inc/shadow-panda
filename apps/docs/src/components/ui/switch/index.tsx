'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { switchRecipe } from '@shadow-panda/styled-system/recipes'

const BaseSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => {
  const styles = switchRecipe()

  return (
    <SwitchPrimitive.Root className={cx('peer', styles.root, className)} {...props} ref={ref}>
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  )
})
BaseSwitch.displayName = SwitchPrimitive.Root.displayName

export const Switch = styled(BaseSwitch)
