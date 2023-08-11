import { Loader2 } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button disabled>
      <Loader2
        className={css({
          mr: '2',
          height: '4',
          width: '4',
          animation: 'spin',
        })}
      />
      Please wait
    </Button>
  )
}
