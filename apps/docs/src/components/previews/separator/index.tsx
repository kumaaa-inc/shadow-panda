import { Flex } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'
import { muted } from '@shadow-panda/styled-system/recipes'
import { Separator } from '@/components/ui/separator'

export default function Example() {
  return (
    <div>
      <Flex flexDirection="column" gap="1">
        <h4
          className={css({
            textStyle: 'sm',
            fontWeight: 'medium',
            leading: 'none',
          })}
        >
          Radix Primitives
        </h4>
        <p className={muted()}>An open-source UI component library.</p>
      </Flex>
      <Separator my="4" />
      <Flex h="5" alignItems="center" spaceX="4" textStyle="sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </Flex>
    </div>
  )
}
