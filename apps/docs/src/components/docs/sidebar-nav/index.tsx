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
import { sortDocs } from '@/lib/sort-docs'

export interface SidebarNavProps {
  onNavigate?: (url: string) => void
}

const sortedOverviews = sortDocs(allOverviews)
const sortedGuides = sortDocs(allGuides)
const sortedComponents = sortDocs(allComponents)

export const SidebarNav = ({ onNavigate }: SidebarNavProps) => {
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

  const subMenuStyle = css({
    mt: '2',
    pl: '2',
    ml: '4',
    borderLeft: 'base',
    spaceY: '1',
  })

  return (
    <Accordion type="multiple" w="full" defaultValue={['overview', 'guides', 'components']} asChild>
      <ul>
        <AccordionItem value="overview" borderBottom="none" asChild>
          <li>
            <AccordionTrigger className={triggerStyle}>Overview</AccordionTrigger>
            <AccordionContent>
              <ul className={subMenuStyle}>
                {sortedOverviews.map((doc) => (
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
                      onClick={() => {
                        onNavigate?.(doc.url)
                      }}
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </li>
        </AccordionItem>
        <AccordionItem value="guides" borderBottom="none" asChild>
          <li>
            <AccordionTrigger className={triggerStyle}>Guides</AccordionTrigger>
            <AccordionContent>
              <ul className={subMenuStyle}>
                {sortedGuides.map((doc) => (
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
                      onClick={() => {
                        onNavigate?.(doc.url)
                      }}
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </li>
        </AccordionItem>
        <AccordionItem value="components" borderBottom="none" asChild>
          <li>
            <AccordionTrigger className={triggerStyle}>Components</AccordionTrigger>
            <AccordionContent>
              <ul className={subMenuStyle}>
                {sortedComponents.map((doc) => (
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
                      onClick={() => {
                        onNavigate?.(doc.url)
                      }}
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
