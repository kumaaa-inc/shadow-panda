'use client'

import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={css({ w: '350px', spaceY: '2' })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          spaceX: '4',
          px: '4',
        })}
      >
        <h4 className={css({ textStyle: 'sm', fontWeight: 'semibold' })}>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={css({
              w: '9',
              p: '0',
            })}
          >
            <ChevronsUpDown className={css({ h: '4', w: '4' })} />
            <span className={css({ srOnly: true })}>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div
        className={css({
          rounded: 'md',
          border: 'base',
          px: '4',
          py: '3',
          fontFamily: 'mono',
          textStyle: 'sm',
        })}
      >
        @radix-ui/primitives
      </div>
      <CollapsibleContent className={css({ spaceY: '2' })}>
        <div
          className={css({
            rounded: 'md',
            border: 'base',
            px: '4',
            py: '3',
            fontFamily: 'mono',
            textStyle: 'sm',
          })}
        >
          @radix-ui/colors
        </div>
        <div
          className={css({
            rounded: 'md',
            border: 'base',
            px: '4',
            py: '3',
            fontFamily: 'mono',
            textStyle: 'sm',
          })}
        >
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
