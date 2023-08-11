import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button asChild>
      <Link href="#">Login</Link>
    </Button>
  )
}
