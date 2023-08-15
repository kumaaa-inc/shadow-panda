'use client'

import * as React from 'react'
import { css, cx } from '@shadow-panda/styled-system/css'
import { getSlugs, type Toc as TocType } from '@/lib/toc'

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -90% 0%', threshold: 1 },
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: TocType
  level?: number
  activeItem?: string
}

const Tree = ({ tree, level = 1, activeItem }: TreeProps) => {
  return tree?.length ? (
    <ul
      className={css({
        m: '0',
        listStyle: 'none',
        pl: level !== 1 ? '4' : '0',
      })}
    >
      {tree.map((item, index) => {
        return (
          <li key={index} className={css({ mt: '0', pt: '2' })}>
            <a
              href={`#${item.slug}`}
              className={cx(
                css({
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'colors',
                  _hover: {
                    color: 'foreground',
                  },
                }),

                item.slug === activeItem
                  ? css({
                      fontWeight: 'medium',
                      color: 'foreground',
                    })
                  : css({
                      color: 'muted.foreground',
                    }),
              )}
            >
              {item.text}
            </a>
            {item?.children ? (
              <Tree tree={item.children} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}

export interface TocProps {
  toc: TocType
}

export const Toc = ({ toc }: TocProps) => {
  const ids = React.useMemo(() => getSlugs(toc), [toc])
  const activeHeading = useActiveItem(ids)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!toc?.length || !mounted) {
    return null
  }

  return (
    <div className={css({ spaceY: '2' })}>
      <p className={css({ fontWeight: 'medium' })}>On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}
