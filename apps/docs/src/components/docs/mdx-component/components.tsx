import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HashIcon } from 'lucide-react'
import { cx, css } from '@shadow-panda/styled-system/css'
import {
  h1,
  h2,
  h3,
  h4,
  link,
  p,
  list,
  blockquote,
  tableContainer,
  table,
  inlineCode,
} from '@shadow-panda/styled-system/recipes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Tabs, Tab } from '@/components/docs/tabs'
import { Callout, type CalloutProps } from '@/components/docs/callout'
import { ComponentPreview } from '@/components/docs/component-preview'
import { ComponentSource } from '@/components/docs/component-source'
import { TypographyPreview } from '@/components/docs/typography-preview'
import { CopyButton } from '@/components/docs/copy-button'
import { Preview, type PreviewProps } from '@/components/docs/preview'
import { Steps } from '@/components/docs/steps'

const HeadingAnchor = ({ id, level }: { id?: string; level: 1 | 2 | 3 | 4 }) => {
  if (!id) return null

  return (
    <Link
      aria-label="Link to section"
      href={`#${id}`}
      className={css({
        display: 'inline-block',
        rounded: 'md',
        mx: level > 2 ? '1' : '2',
        focusRingOffsetColor: 'background',
        color: 'muted.foreground',
        opacity: '0',
        transition: 'opacity',

        _focus: {
          outline: '2px solid transparent',
          outlineOffset: '2px',
          focusRingWidth: '2',
          focusRingColor: 'ring',
          focusRingOffsetWidth: '2',
        },
      })}
    >
      <HashIcon
        className={css({
          h: level === 1 ? '9' : level === 2 ? '7' : level === 3 ? '6' : '5',
          w: level === 1 ? '9' : level === 2 ? '7' : level === 3 ? '6' : '5',
        })}
      />
    </Link>
  )
}

export const components = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  AspectRatio,
  Button,
  Callout: ({ className, ...props }: CalloutProps) => (
    <Callout
      className={cx(
        css({
          mt: '6',
        }),
        className,
      )}
      {...props}
    />
  ),
  Image,
  Tabs,
  Tab,
  ComponentPreview,
  ComponentSource,
  TypographyPreview,
  Preview: ({ className, ...props }: PreviewProps) => (
    <Preview
      className={cx(
        css({
          mt: '6',
          mb: '4',
        }),
        className,
      )}
      {...props}
    />
  ),
  Steps,
  h1: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cx(
        h1(),
        css({
          alignItems: 'center',
          _hover: {
            '& a': {
              opacity: 1,
            },
          },
        }),
        className,
      )}
      {...props}
    >
      {children}
      <HeadingAnchor id={props.id} level={1} />
    </h1>
  ),
  h2: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cx(
        h2(),
        css({
          mt: '10',
          alignItems: 'center',
          _hover: {
            '& a': {
              opacity: 1,
            },
          },
        }),
        className,
      )}
      {...props}
    >
      {children}
      <HeadingAnchor id={props.id} level={2} />
    </h2>
  ),
  h3: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cx(
        h3(),
        css({
          mt: '8',
          alignItems: 'center',
          _hover: {
            '& a': {
              opacity: 1,
            },
          },
        }),
        className,
      )}
      {...props}
    >
      {children}
      <HeadingAnchor id={props.id} level={3} />
    </h3>
  ),
  h4: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cx(
        h4(),
        css({
          mt: '8',
          alignItems: 'center',
          _hover: {
            '& a': {
              opacity: 1,
            },
          },
        }),
        className,
      )}
      {...props}
    >
      {children}
      <HeadingAnchor id={props.id} level={4} />
    </h4>
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cx(
        css({
          mt: '8',
          scrollMargin: '20',
          textStyle: 'lg',
          fontWeight: 'semibold',
          tracking: 'tight',
          _hover: {
            '& a': {
              opacity: 1,
            },
          },
        }),
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cx(
        css({
          mt: '8',
          scrollMargin: '20',
          fontWeight: 'semibold',
          tracking: 'tight',
          _hover: {
            '& a': {
              opacity: 1,
            },
          },
        }),
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
      <Link
        className={cx(link(), className)}
        href={href ?? ''}
        target={href?.startsWith('http') ? '_blank' : ''}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : ''}
        {...props}
      />
    )
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cx(p(), className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cx(list(), className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cx(list(), css({ listStyleType: 'decimal' }), className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={className} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cx(blockquote(), className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={cx(css({ rounded: 'md' }), className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={css({
        borderColor: 'border',
        my: '4',
        md: {
          my: '8',
        },
      })}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className={tableContainer()}>
      <table className={cx(table(), className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={className} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className={className} {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={className} {...props} />
  ),
  pre: ({
    className,
    __code__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __code__: string
  }) => {
    return (
      <div className={css({ position: 'relative' })}>
        <pre
          className={cx(
            css({
              mb: '4',
              mt: '6',
              py: '4',
              maxHeight: '650px',
              overflowX: 'auto',
              rounded: 'lg',

              '& code': {
                display: 'grid',
                bg: 'transparent',
                p: '0',
                minW: '100%',
                overflowWrap: 'break-word',
                borderRadius: 'none',
                borderWidth: '0',
                counterReset: 'line',
                boxDecorationBreak: 'clone',
              },

              '& code > [data-line]': {
                display: 'inline-block',
                minHeight: '1rem',
                width: 'full',
                padding: '0.125rem 1rem',
              },

              '& code > [data-highlighted-line]': {
                bga: 'white/10',
              },

              '& code[data-line-numbers] > [data-line]': {
                _before: {
                  counterIncrement: 'line',
                  content: 'counter(line)',
                  display: 'inline-block',
                  width: '1rem',
                  mr: '3',
                  textAlign: 'right',
                  color: 'gray.600',
                },
              },

              '& code[data-line-numbers-max-digits="2"] > [data-line]': {
                _before: {
                  width: '1.5rem',
                },
              },

              '& code[data-line-numbers-max-digits="3"] > [data-line]': {
                _before: {
                  width: '2rem',
                },
              },
            }),
            className,
          )}
          {...props}
        />
        {__code__ && (
          <CopyButton
            className={css({
              position: 'absolute',
              top: '4',
              right: '4',
            })}
            value={__code__}
          />
        )}
      </div>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cx(inlineCode(), css({ fontSize: 'inherit', mx: '0.5' }), className)}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cx(link(), className)} {...props} />
  ),
} as const
