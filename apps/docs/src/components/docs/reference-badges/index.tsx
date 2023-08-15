import Link from 'next/link'
import { css } from '@shadow-panda/styled-system/css'
import { badge } from '@shadow-panda/styled-system/recipes'
import { Icons } from '../icons'

export interface ReferenceBadgesProps {
  shadcnUiLink?: string
  radix?: {
    link?: string
    api?: string
  }
}

export function ReferenceBadges({ shadcnUiLink, radix }: ReferenceBadgesProps) {
  if (!shadcnUiLink && !radix) return null

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        spaceX: '2',
        py: '4',
      })}
    >
      {shadcnUiLink && (
        <Link
          href={shadcnUiLink}
          target="_blank"
          rel="noreferrer"
          className={badge({ variant: 'secondary' })}
        >
          <Icons.shadcnUi className={css({ mr: '1', height: '3', width: '3' })} />
          shadcn/ui
        </Link>
      )}
      {radix?.link && (
        <Link
          href={radix.link}
          target="_blank"
          rel="noreferrer"
          className={badge({ variant: 'secondary' })}
        >
          <Icons.radix className={css({ mr: '1', height: '3', width: '3' })} />
          Radix UI
        </Link>
      )}
      {radix?.api && (
        <Link
          href={radix.api}
          target="_blank"
          rel="noreferrer"
          className={badge({ variant: 'secondary' })}
        >
          <Icons.radix className={css({ mr: '1', height: '3', width: '3' })} />
          API Reference
        </Link>
      )}
    </div>
  )
}
