'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { styled } from '@shadow-panda/styled-system/jsx'
import { toggle } from '@shadow-panda/styled-system/recipes'

export const Toggle = styled(TogglePrimitive.Root, toggle)
