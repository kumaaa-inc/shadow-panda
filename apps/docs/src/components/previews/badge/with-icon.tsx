import { Check } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Badge } from '@/components/ui/badge'

export default function Example() {
  return (
    <Badge>
      <Check
        className={css({
          mr: '2',
          height: '4',
          width: '4',
        })}
      />
      Verified
    </Badge>
  )
}
