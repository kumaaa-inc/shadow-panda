'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MenuIcon } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Icons } from '@/components/docs/icons'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarNav } from '@/components/docs/sidebar-nav'

export const MobileSidebarToggle = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className={css({
            w: '9',
            h: '9',
            px: '0',
            display: 'flex',
            md: {
              display: 'none',
            },
          })}
          variant="ghost"
        >
          <MenuIcon className={css({ w: '4', h: '4' })} />
        </Button>
      </SheetTrigger>
      <SheetContent className={css({ w: '64', px: '4', py: '6' })}>
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              onClick={() => {
                router.push('/')
                setOpen(false)
              }}
            >
              <Icons.logoWithText className={css({ h: '6' })} />
              <span className={css({ srOnly: true })}>Shadow Panda</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea
          className={css({
            h: 'full',
            py: '8',
            pr: '2.5',
          })}
        >
          <div>
            <SidebarNav
              onNavigate={(url) => {
                router.push(url)
                setOpen(false)
              }}
            />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
