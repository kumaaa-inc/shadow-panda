'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { DialogProps } from '@radix-ui/react-alert-dialog'
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { allOverviews, allGuides, allComponents } from 'contentlayer/generated'

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={css({
          position: 'relative',
          w: 'full',
          justifyContent: 'flex-start',
          textStyle: 'sm',
          color: 'muted.foreground',
          sm: {
            pr: '12',
          },
          md: {
            w: '40',
          },
          lg: {
            w: '64',
          },
        })}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span
          className={css({
            display: 'none',
            lg: {
              display: 'inline-flex',
            },
          })}
        >
          Search documentation...
        </span>
        <span
          className={css({
            display: 'inline-flex',
            lg: {
              display: 'none',
            },
          })}
        >
          Search...
        </span>
        <kbd
          className={css({
            pointerEvents: 'none',
            position: 'absolute',
            right: '2',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'none',
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
            opacity: '1',
            sm: {
              display: 'flex',
            },
          })}
        >
          <span className={css({ textStyle: 'xs' })}>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem
              value="Documentation"
              onSelect={() => {
                runCommand(() => router.push('/docs'))
              }}
            >
              <FileIcon className={css({ mr: '2', h: '4', w: '4' })} />
              Documentation
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Overview">
            {allOverviews.map((doc) => (
              <CommandItem
                key={doc.url}
                value={doc.title}
                onSelect={() => {
                  runCommand(() => router.push(doc.url as string))
                }}
              >
                <div
                  className={css({
                    mr: '2',
                    display: 'flex',
                    h: '4',
                    w: '4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  })}
                >
                  <CircleIcon className={css({ h: '3', w: '3' })} />
                </div>
                {doc.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Guides">
            {allGuides.map((doc) => (
              <CommandItem
                key={doc.url}
                value={doc.title}
                onSelect={() => {
                  runCommand(() => router.push(doc.url as string))
                }}
              >
                <div
                  className={css({
                    mr: '2',
                    display: 'flex',
                    h: '4',
                    w: '4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  })}
                >
                  <CircleIcon className={css({ h: '3', w: '3' })} />
                </div>
                {doc.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Components">
            {allComponents.map((doc) => (
              <CommandItem
                key={doc.url}
                value={doc.title}
                onSelect={() => {
                  runCommand(() => router.push(doc.url as string))
                }}
              >
                <div
                  className={css({
                    mr: '2',
                    display: 'flex',
                    h: '4',
                    w: '4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  })}
                >
                  <CircleIcon className={css({ h: '3', w: '3' })} />
                </div>
                {doc.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <SunIcon className={css({ mr: '2', h: '4', w: '4' })} />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <MoonIcon className={css({ mr: '2', h: '4', w: '4' })} />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <LaptopIcon className={css({ mr: '2', h: '4', w: '4' })} />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
