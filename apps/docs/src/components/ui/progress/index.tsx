'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { styled } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { progress } from '@shadow-panda/styled-system/recipes'

const BaseProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const styles = progress()

  return (
    <ProgressPrimitive.Root ref={ref} className={cx(styles.root, className)} {...props}>
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
BaseProgress.displayName = ProgressPrimitive.Root.displayName

export const Progress = styled(BaseProgress)
