import * as React from 'react'
import { styled } from '@shadow-panda/styled-system/jsx'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export default function Example() {
  return (
    <ScrollArea h="72" w="48" rounded="md" border="base">
      <styled.div p="4">
        <styled.h4 mb="4" textStyle="sm" fontWeight="medium" leading="none">
          Tags
        </styled.h4>
        {tags.map((tag) => (
          <React.Fragment>
            <styled.div key={tag} textStyle="sm">
              {tag}
            </styled.div>
            <Separator my="2" />
          </React.Fragment>
        ))}
      </styled.div>
    </ScrollArea>
  )
}
