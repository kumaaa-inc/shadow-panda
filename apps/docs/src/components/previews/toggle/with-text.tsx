import { Italic } from 'lucide-react'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Toggle } from '@/components/ui/toggle'

export default function Example() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className={icon()} />
      Italic
    </Toggle>
  )
}
