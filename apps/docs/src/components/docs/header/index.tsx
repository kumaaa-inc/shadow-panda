import Link from 'next/link'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import { HeaderNav } from '@/components/docs/header-nav'
import { MobileHeaderNav } from '@/components/docs/mobile-header-nav'
import { CommandMenu } from '@/components/docs/command-menu'
import { ModeToggle } from '@/components/docs/mode-toggle'
import { Icons } from '@/components/docs/icons'
import { MobileSidebarToggle } from '@/components/docs/mobile-sidebar-toggle'

export const Header = () => {
  return (
    <header
      className={css({
        position: 'sticky',
        top: '0',
        zIndex: 50,
        w: 'full',
        borderBottom: 'base',
        bga: 'background/80',
        backdropBlur: 'md',
      })}
    >
      <div
        className={css({
          maxW: '7xl',
          display: 'flex',
          alignItems: 'center',
          h: '14',
          mx: 'auto',
          pl: '4',
          pr: '2',

          md: {
            pr: '4',
          },
        })}
      >
        <MobileHeaderNav />
        <HeaderNav />
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            spaceX: '2',
            flex: '1',
            md: {
              flex: 'auto',
              justifyContent: 'flex-end',
            },
          })}
        >
          <div
            className={css({
              w: 'full',
              flex: '1',
              md: {
                w: 'auto',
                flex: 'none',
              },
            })}
          >
            <CommandMenu />
          </div>
          <nav
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '1',
            })}
          >
            <Button variant="ghost" w="9" h="9" px="0" asChild>
              <Link href="https://github.com/kumaaa-inc/shadow-panda" target="_blank">
                <Icons.gitHub className={css({ w: '4', h: '4' })} />
                <span className={css({ srOnly: true })}>GitHub</span>
              </Link>
            </Button>

            <ModeToggle />

            <MobileSidebarToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
