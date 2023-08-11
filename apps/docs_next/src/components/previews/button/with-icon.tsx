import { Mail } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button>
      <Mail
        className={css({
          mr: '2',
          height: '4',
          width: '4',
        })}
      />
      Login with Email
    </Button>
  )
}
