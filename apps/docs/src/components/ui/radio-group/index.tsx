'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { radioGroup } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(radioGroup)

const Indicator = withContext(RadioGroupPrimitive.Indicator, 'indicator')
const Icon = withContext(Circle, 'icon')

const Item = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children: _children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} {...props}>
      <Indicator>
        <Icon />
      </Indicator>
    </RadioGroupPrimitive.Item>
  )
})
Item.displayName = RadioGroupPrimitive.Item.displayName

export const RadioGroup = withProvider(styled(RadioGroupPrimitive.Root), 'root')
export const RadioGroupItem = withContext(styled(Item), 'item')
