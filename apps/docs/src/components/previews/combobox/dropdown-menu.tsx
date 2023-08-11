'use client'

import * as React from 'react'
import { Calendar, MoreHorizontal, Tags, Trash, User } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { small } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const labels = [
  'feature',
  'bug',
  'enhancement',
  'documentation',
  'design',
  'question',
  'maintenance',
]

const iconStyle = css({
  mr: '2',
  w: '4',
  h: '4',
})

export default function Example() {
  const [label, setLabel] = React.useState('feature')
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        rounded: 'md',
        border: 'base',
        px: '4',
        py: '3',
        sm: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      })}
    >
      <p className={small()}>
        <span
          className={css({
            mr: '2',
            rounded: 'lg',
            bg: 'primary',
            px: '2',
            py: '1',
            textStyle: 'xs',
            color: 'primary.foreground',
          })}
        >
          {label}
        </span>
        <span className={css({ color: 'muted.foreground' })}>
          Create a new project
        </span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={css({ w: '200px' })}>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className={iconStyle} />
              Assign to...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className={iconStyle} />
              Set due date...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Tags className={iconStyle} />
                Apply label
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className={css({ p: '0' })}>
                <Command>
                  <CommandInput
                    placeholder="Filter label..."
                    autoFocus={true}
                  />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                        >
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={css({ color: 'red.600' })}>
              <Trash className={iconStyle} />
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
