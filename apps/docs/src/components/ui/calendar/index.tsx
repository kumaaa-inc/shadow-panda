'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cx, css } from '@shadow-panda/styled-system/css'
import {
  button,
  calendar,
  calendarMonths,
  calendarMonth,
  calendarCaption,
  calendarCaptionLabel,
  calendarNav,
  calendarNavButton,
  calendarNavButtonPrevious,
  calendarNavButtonNext,
  calendarTable,
  calendarHeadRow,
  calendarHeadCell,
  calendarRow,
  calendarCell,
  calendarDay,
  calendarDaySelected,
  calendarDayToday,
  calendarDayOutside,
  calendarDayDisabled,
  calendarDayRangeMiddle,
  calendarDayHidden,
} from '@shadow-panda/styled-system/recipes'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cx(calendar(), className)}
      classNames={{
        months: calendarMonths(),
        month: calendarMonth(),
        caption: calendarCaption(),
        caption_label: calendarCaptionLabel(),
        nav: calendarNav(),
        nav_button: cx(button({ variant: 'outline' }), calendarNavButton()),
        nav_button_previous: calendarNavButtonPrevious(),
        nav_button_next: calendarNavButtonNext(),
        table: calendarTable(),
        head_row: calendarHeadRow(),
        head_cell: calendarHeadCell(),
        row: calendarRow(),
        cell: calendarCell(),
        day: cx(button({ variant: 'ghost' }), calendarDay()),
        day_selected: calendarDaySelected(),
        day_today: calendarDayToday(),
        day_outside: calendarDayOutside(),
        day_disabled: calendarDayDisabled(),
        day_range_middle: calendarDayRangeMiddle(),
        day_hidden: calendarDayHidden(),
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

export { Calendar }
