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
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
