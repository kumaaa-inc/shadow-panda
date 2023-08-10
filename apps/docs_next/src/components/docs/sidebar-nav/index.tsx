'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { css } from '@shadow-panda/styled-system/css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { allOverviews, allGuides, allComponents } from 'contentlayer/generated'

export const SidebarNav = () => {
  const pathname = usePathname()

  const triggerStyle = css({
    textStyle: 'sm',
    fontWeight: 'medium',
    cursor: 'pointer',
    py: '1.5',
    px: '3',
    rounded: 'md',
    _hover: { textDecoration: 'none', bg: 'muted' },

    '& > svg': {
      transform: 'rotate(-90deg)',
    },

    '&[data-state=open] > svg': {
      transform: 'rotate(0deg)',
    },
  })

  return (
    <Accordion
      type="multiple"
      className={css({ width: 'full' })}
      defaultValue={['overview', 'guides', 'components']}
      asChild
    >
      <ul>
        <AccordionItem
          value="overview"
          className={css({ borderBottom: 'none' })}
          asChild
        >
          <li>
            <AccordionTrigger className={triggerStyle}>
              Overview
            </AccordionTrigger>
            <AccordionContent>
              <ul
                className={css({
                  ml: '4',
                  px: '2',
                  mt: '2',
                  borderLeft: 'base',
                  spaceY: '1',
                })}
              >
                {allOverviews.map((doc) => (
                  <li key={doc.slug}>
                    <Link
                      className={css({
                        display: 'flex',
                        w: 'full',
                        textStyle: 'sm',
                        fontWeight: 'medium',
                        py: '1.5',
                        px: '3',
                        rounded: 'md',
                        cursor: 'pointer',
                        bg: pathname === doc.url ? 'muted' : 'transparent',
                        _hover: { bg: 'muted' },
                      })}
                      href={doc.url}
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </li>
        </AccordionItem>
        <AccordionItem
          value="guides"
          className={css({ borderBottom: 'none' })}
          asChild
        >
          <li>
            <AccordionTrigger className={triggerStyle}>Guides</AccordionTrigger>
            <AccordionContent>
              <ul
                className={css({
                  ml: '4',
                  px: '2',
                  mt: '2',
                  borderLeft: 'base',
                  spaceY: '1',
                })}
              >
                {allGuides.map((doc) => (
                  <li key={doc.slug}>
                    <Link
                      className={css({
                        display: 'flex',
                        w: 'full',
                        textStyle: 'sm',
                        fontWeight: 'medium',
                        py: '1.5',
                        px: '3',
                        rounded: 'md',
                        cursor: 'pointer',
                        bg: pathname === doc.url ? 'muted' : 'transparent',
                        _hover: { bg: 'muted' },
                      })}
                      href={doc.url}
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </li>
        </AccordionItem>
        <AccordionItem
          value="components"
          className={css({ borderBottom: 'none' })}
          asChild
        >
          <li>
            <AccordionTrigger className={triggerStyle}>
              Components
            </AccordionTrigger>
            <AccordionContent>
              <ul
                className={css({
                  ml: '4',
                  pl: '4',
                  mt: '2',
                  borderLeft: 'base',
                  spaceY: '1',
                })}
              >
                {allComponents.map((doc) => (
                  <li key={doc.slug}>
                    <Link
                      className={css({
                        display: 'flex',
                        w: 'full',
                        textStyle: 'sm',
                        fontWeight: 'medium',
                        py: '1.5',
                        px: '3',
                        rounded: 'md',
                        cursor: 'pointer',
                        bg: pathname === doc.url ? 'muted' : 'transparent',
                        _hover: { bg: 'muted' },
                      })}
                      href={doc.url}
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </li>
        </AccordionItem>
      </ul>
    </Accordion>
  )
}
