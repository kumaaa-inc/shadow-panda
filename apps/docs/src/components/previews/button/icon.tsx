import { ChevronRight } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight
        className={css({
          height: '4',
          width: '4',
        })}
      />
    </Button>
  )
}
