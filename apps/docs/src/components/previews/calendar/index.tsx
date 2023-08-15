'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return <Calendar mode="single" selected={date} onSelect={setDate} border="base" rounded="md" />
}
