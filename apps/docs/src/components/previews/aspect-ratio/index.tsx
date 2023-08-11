import Image from 'next/image'
import { css } from '@shadow-panda/styled-system/css'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Example() {
  return (
    <AspectRatio ratio={16 / 9} className={css({ bg: 'muted' })}>
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className={css({ rounded: 'md', objectFit: 'cover' })}
      />
    </AspectRatio>
  )
}
