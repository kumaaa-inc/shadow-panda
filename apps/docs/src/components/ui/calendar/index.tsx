'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  DayPicker,
  type DayPickerDefaultProps,
  type DayPickerSingleProps,
  type DayPickerMultipleProps,
  type DayPickerRangeProps,
} from 'react-day-picker'
import { styled } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { button, icon, calendar } from '@shadow-panda/styled-system/recipes'

type DayPickerProps =
  | DayPickerDefaultProps
  | DayPickerSingleProps
  | DayPickerMultipleProps
  | DayPickerRangeProps

function BaseCalendar({ className, classNames, showOutsideDays = true, ...props }: DayPickerProps) {
  const { root, nav_button: navButton, day, ...rest } = calendar()

  return (
    <DayPicker
      className={cx(root, className)}
      classNames={{
        ...rest,
        nav_button: cx(button({ variant: 'outline' }), navButton),
        day: cx(button({ variant: 'ghost' }), day),
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className={icon()} />,
        IconRight: () => <ChevronRight className={icon()} />,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}
BaseCalendar.displayName = 'Calendar'

export const Calendar = styled(BaseCalendar)
export type CalendarProps = React.ComponentProps<typeof Calendar>
