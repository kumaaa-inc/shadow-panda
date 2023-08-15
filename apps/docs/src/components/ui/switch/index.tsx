'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { styled } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { switchRecipe } from '@shadow-panda/styled-system/recipes'

const BaseSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const styles = switchRecipe()

  return (
    <SwitchPrimitives.Root className={cx('peer', styles.root, className)} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={styles.thumb} />
    </SwitchPrimitives.Root>
  )
})
BaseSwitch.displayName = SwitchPrimitives.Root.displayName

export const Switch = styled(BaseSwitch)
