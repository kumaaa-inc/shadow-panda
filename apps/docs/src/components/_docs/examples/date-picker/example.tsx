'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Example() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={css({
            w: '280px',
            justifyContent: 'flex-start',
            textAlign: 'left',
            fontWeight: 'normal',
            color: !date ? 'muted.foreground' : undefined,
          })}
        >
          <CalendarIcon className={css({ mr: '2', h: '4', w: '4' })} />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={css({ w: 'auto', p: '0' })}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
