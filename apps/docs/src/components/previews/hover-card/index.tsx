import { CalendarDays } from 'lucide-react'
import { Flex } from '@shadow-panda/styled-system/jsx'
import { css, cx } from '@shadow-panda/styled-system/css'
import { icon, muted } from '@shadow-panda/styled-system/recipes'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export default function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent w="80">
        <Flex justify="space-between" gap="4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Flex flexDir="column" gap="1">
            <h4 className={css({ textStyle: 'sm', fontWeight: 'semibold' })}>@nextjs</h4>
            <p className={css({ textStyle: 'sm' })}>
              The React Framework – created and maintained by @vercel.
            </p>
            <Flex align="center" pt="2" gap="2">
              <CalendarDays className={cx(icon(), css({ opacity: '0.7' }))} />{' '}
              <span className={muted()}>Joined December 2021</span>
            </Flex>
          </Flex>
        </Flex>
      </HoverCardContent>
    </HoverCard>
  )
}
