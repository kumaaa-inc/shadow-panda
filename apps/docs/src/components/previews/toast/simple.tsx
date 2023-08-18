'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'

export default function Example() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: 'Your message has been sent.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
