import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { css, cx } from '@shadow-panda/styled-system/css'
import {
  allComponents,
  allGuides,
  allOverviews,
  type DocumentTypes,
} from 'contentlayer/generated'
import { Button } from '@/components/ui/button'

const orderedPages = [...allOverviews, ...allGuides, ...allComponents]

const getPagerForDocs = (doc: DocumentTypes) => {
  const index = orderedPages.findIndex((d) => d.url === doc.url)
  const prev = orderedPages[index - 1]
  const next = orderedPages[index + 1]
  return {
    prev,
    next,
  }
}

export interface PagerProps {
  className?: string
  doc: DocumentTypes
}

export const Pager = ({ className, doc }: PagerProps) => {
  const pager = getPagerForDocs(doc)

  return (
    <div
      className={cx(
        css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }),
        className,
      )}
    >
      {pager?.prev?.url && (
        <Button variant="outline" asChild>
          <Link href={pager.prev.url}>
            <ChevronLeftIcon
              className={css({
                mr: '2',
                h: '4',
                w: '4',
              })}
            />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next?.url && (
        <Button variant="outline" className={css({ ml: 'auto' })} asChild>
          <Link href={pager.next.url}>
            {pager.next.title}
            <ChevronRightIcon
              className={css({
                ml: '2',
                h: '4',
                w: '4',
              })}
            />
          </Link>
        </Button>
      )}
    </div>
  )
}
