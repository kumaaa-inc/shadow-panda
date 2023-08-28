import { Italic } from 'lucide-react'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Toggle } from '@/components/ui/toggle'

export default function Example() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic className={icon()} />
    </Toggle>
  )
}
