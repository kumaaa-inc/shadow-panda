'use client'

import * as React from 'react'
import Link from 'next/link'
import { Flex } from '@shadow-panda/styled-system/jsx'
import { css, cx } from '@shadow-panda/styled-system/css'
import { icon } from '@shadow-panda/styled-system/recipes'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Icons } from '@/components/docs/icons'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll Area',
    href: '/docs/components/scroll-area',
    description: 'Augments native scroll functionality for custom, cross-browser styling..',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content - known as tab panels - that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export default function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={css({
                display: 'grid',
                gap: '3',
                p: '6',
                md: {
                  w: '400px',
                },
                lg: {
                  w: '500px',
                  gridTemplateColumns: '.75fr 1fr',
                },
              })}
            >
              <li className={css({ gridRow: '3' })}>
                <NavigationMenuLink asChild>
                  <a
                    className={css({
                      display: 'flex',
                      h: 'full',
                      w: 'full',
                      userSelect: 'none',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      rounded: 'md',
                      bgGradient: 'to-b',
                      gradientFromAlpha: 'muted/50',
                      gradientToAlpha: 'muted',
                      p: '4',
                      textDecoration: 'none',
                      outline: 'none',

                      _focus: {
                        shadow: 'md',
                      },
                    })}
                    href="/"
                  >
                    <Flex direction="column" alignItems="center" justifyContent="center">
                      <Icons.logo className={icon({ size: 'xl' })} />
                      <div
                        className={css({
                          mb: '2',
                          mt: '4',
                          textStyle: 'sm',
                          fontWeight: 'medium',
                        })}
                      >
                        Shadow Panda
                      </div>
                    </Flex>

                    <p
                      className={css({
                        textStyle: 'sm',
                        leading: 'tight',
                        color: 'muted.foreground',
                      })}
                    >
                      Accessible and customizable components built with Panda CSS & Radix.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Panda CSS.
              </ListItem>
              <ListItem href="/docs/overview/getting-started" title="Getting Started">
                Guide to get started with Shadow Panda
              </ListItem>
              <ListItem href="/docs/overview/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={css({
                display: 'grid',
                w: '400px',
                gap: '3',
                p: '4',

                md: {
                  w: '500px',
                  gridTemplateColumns: '2',
                },

                lg: {
                  w: '600px',
                },
              })}
            >
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/docs">Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cx(
              'focus:bg-accent focus:text-accent-foreground',
              css({
                display: 'block',
                userSelect: 'none',
                spaceY: '1',
                rounded: 'md',
                p: '3',
                leading: 'none',
                textDecoration: 'none',
                outline: 'none',
                transition: 'colors',
                _hover: {
                  bg: 'accent',
                  color: 'accent.foreground',
                },
                _focus: {
                  bg: 'accent',
                  color: 'accent.foreground',
                },
              }),
              className,
            )}
            {...props}
          >
            <div
              className={css({
                textStyle: 'sm',
                fontWeight: 'medium',
                leading: 'none',
              })}
            >
              {title}
            </div>
            <p
              className={css({
                lineClamp: '2',
                textStyle: 'sm',
                leading: 'snug',
                color: 'muted.foreground',
              })}
            >
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
