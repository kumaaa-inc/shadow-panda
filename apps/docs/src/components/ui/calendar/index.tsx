'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cx, css } from '@shadow-panda/styled-system/css'
import { button } from '@shadow-panda/styled-system/recipes'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cx(css({ p: '3' }), className)}
      classNames={{
        months: css({
          display: 'flex',
          flexDirection: 'column',
          spaceY: '4',

          sm: {
            flexDirection: 'row',
            spaceX: '4',
            spaceY: '0',
          },
        }),
        month: css({
          spaceY: '4',
        }),
        caption: css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: '1',
          position: 'relative',
        }),
        caption_label: css({
          fontSize: 'sm',
          fontWeight: 'medium',
        }),
        nav: css({
          display: 'flex',
          spaceX: '1',
          alignItems: 'center',
        }),
        nav_button: cx(
          button({ variant: 'outline' }),
          css({
            height: '7',
            width: '7',
            bg: 'transparent',
            p: '0',
            opacity: '0.5',

            '&:hover': {
              opacity: '1',
            },
          }),
        ),
        nav_button_previous: css({
          position: 'absolute',
          left: '1',
        }),
        nav_button_next: css({
          position: 'absolute',
          right: '1',
        }),
        table: css({
          width: 'full',
          borderCollapse: 'collapse',
          spaceY: '1',
        }),
        head_row: css({
          display: 'flex',
        }),
        head_cell: css({
          color: 'muted.foreground',
          rounded: 'md',
          width: '9',
          fontWeight: 'normal',
          fontSize: '0.8rem',
        }),
        row: css({
          display: 'flex',
          width: 'full',
          mt: '2',
        }),
        cell: css({
          textAlign: 'center',
          fontSize: 'sm',
          p: '0',
          position: 'relative',

          '&:has([aria-selected])': {
            bg: 'accent',
          },

          _first: {
            '&:has([aria-selected])': {
              roundedLeft: 'md',
            },
          },

          _last: {
            '&:has([aria-selected])': {
              roundedRight: 'md',
            },
          },

          _focusWithin: {
            position: 'relative',
            zIndex: '20',
          },
        }),
        day: cx(
          button({ variant: 'ghost' }),
          css({
            height: '9',
            width: '9',
            p: '0',
            fontWeight: 'normal',

            '&[aria-selected="true"]': {
              opacity: '1',
            },
          }),
        ),
        day_selected: css({
          bg: 'primary',
          color: 'primary.foreground',

          _hover: {
            bg: 'primary',
            color: 'primary.foreground',
          },

          _focus: {
            bg: 'primary',
            color: 'primary.foreground',
          },
        }),
        day_today: css({
          bg: 'accent',
          color: 'accent.foreground',
        }),
        day_outside: css({
          color: 'muted.foreground',
          opacity: '0.5',
        }),
        day_disabled: css({
          color: 'muted.foreground',
          opacity: '0.5',
        }),
        day_range_middle: css({
          '&[aria-selected="true"]': {
            bg: 'accent',
            color: 'accent.foreground',
          },
        }),
        day_hidden: css({
          visibility: 'hidden',
        }),
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => (
          <ChevronLeft
            className={css({
              height: '4',
              width: '4',
            })}
          />
        ),
        IconRight: ({ ..._props }) => (
          <ChevronRight
            className={css({
              height: '4',
              width: '4',
            })}
          />
        ),
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'
