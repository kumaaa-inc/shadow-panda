'use client'

import * as React from 'react'
import { css } from '@shadow-panda/styled-system/css'
import { Calendar } from '@/components/ui/calendar'

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={css({
        border: 'base',
        rounded: 'md',
      })}
    />
  )
}
