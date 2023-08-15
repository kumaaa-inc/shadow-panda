import { Mail } from 'lucide-react'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button>
      <Mail className={icon()} />
      Login with Email
    </Button>
  )
}
