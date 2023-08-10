import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import { HeaderNav } from '@/components/docs/header-nav'
import { CommandMenu } from '@/components/docs/command-menu'
import { ModeToggle } from '@/components/docs/mode-toggle'
import { Icons } from '@/components/docs/icons'
import { MobileHeaderNav } from '../mobile-header-nav'

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
            pl: '2',
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
            <Button
              className={css({ w: '9', h: '9', px: '0' })}
              variant="ghost"
              asChild
            >
              <Link
                href="https://github.com/kumaaa-inc/shadow-panda"
                target="_blank"
              >
                <Icons.gitHub className={css({ w: '4', h: '4' })} />
                <span className={css({ srOnly: true })}>GitHub</span>
              </Link>
            </Button>

            <ModeToggle />

            {/* TODO: MENU */}
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
          </nav>
        </div>
      </div>
    </header>
  )
}
