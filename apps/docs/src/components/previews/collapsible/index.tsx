'use client'

import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { Box, Flex } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} w="350px" spaceY="2">
      <Flex alignItems="center" justifyContent="space-between" spaceX="4" px="4">
        <h4 className={css({ textStyle: 'sm', fontWeight: 'semibold' })}>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" w="9" p="0">
            <ChevronsUpDown className={icon()} />
            <span className={css({ srOnly: true })}>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </Flex>
      <Box rounded="md" border="base" px="4" py="3" fontFamily="mono" textStyle="sm">
        @radix-ui/primitives
      </Box>
      <CollapsibleContent spaceY="2">
        <Box rounded="md" border="base" px="4" py="3" fontFamily="mono" textStyle="sm">
          @radix-ui/colors
        </Box>
        <Box rounded="md" border="base" px="4" py="3" fontFamily="mono" textStyle="sm">
          @stitches/react
        </Box>
      </CollapsibleContent>
    </Collapsible>
  )
}
