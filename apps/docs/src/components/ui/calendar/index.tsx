'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { styled, type HTMLStyledProps } from '@shadow-panda/styled-system/jsx'
import { cx } from '@shadow-panda/styled-system/css'
import { button, icon, calendar } from '@shadow-panda/styled-system/recipes'

function BaseCalendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
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

// NOTE: union-style conditional props are not yet supported in `styled()`
type CalendarComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentProps<typeof DayPicker>> &
    HTMLStyledProps<typeof DayPicker> &
    React.RefAttributes<React.ElementRef<typeof DayPicker>>
>

export const Calendar = styled(BaseCalendar) as CalendarComponent
export type CalendarProps = React.ComponentProps<typeof Calendar>
