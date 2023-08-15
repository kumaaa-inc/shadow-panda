'use client'

import * as React from 'react'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { muted, icon } from '@shadow-panda/styled-system/recipes'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export default function Example() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'z' && e.metaKey) {
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <p className={muted()}>
        Press{' '}
        <kbd
          className={css({
            pointerEvents: 'none',
            display: 'inline-flex',
            h: '5',
            userSelect: 'none',
            alignItems: 'center',
            gap: '1',
            rounded: 'sm',
            border: 'base',
            bg: 'muted',
            px: '1.5',
            fontFamily: 'mono',
            fontSize: '10px',
            fontWeight: 'medium',
            color: 'muted.foreground',
            opacity: '1',
          })}
        >
          <span className={css({ textStyle: 'sm' })}>⌘</span>Z
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className={icon()} />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className={icon()} />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className={icon()} />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className={icon()} />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className={icon()} />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className={icon()} />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
