'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={css({ w: '9', h: '9', px: '0' })}>
          <SunIcon
            className={css({
              h: '1.2rem',
              w: '1.2rem',
              transform: 'rotate(0deg) scale(1)',

              transition: 'all',
              _dark: {
                transform: 'rotate(-90deg) scale(0)',
              },
            })}
          />
          <MoonIcon
            className={css({
              position: 'absolute',
              h: '1.2rem',
              w: '1.2rem',
              transform: 'rotate(90deg) scale(0)',
              transition: 'all',
              _dark: {
                transform: 'rotate(0deg) scale(1)',
              },
            })}
          />
          <span className={css({ srOnly: true })}>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
