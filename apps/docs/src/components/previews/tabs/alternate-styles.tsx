import { css } from '@shadow-panda/styled-system/css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const triggerStyle = css({
  position: 'relative',
  h: '9',
  rounded: '0',
  borderBottom: '2px solid transparent',
  bg: 'transparent',
  px: '4',
  pb: '3',
  pt: '2',
  fontWeight: 'semibold',
  color: 'muted.foreground',
  shadow: 'none',
  transition: 'none',
  cursor: 'pointer',

  '&[data-state=active]': {
    borderBottomColor: 'primary',
    color: 'foreground',
    shadow: 'none',
  },
})

export default function Example() {
  return (
    <Tabs defaultValue="tab1" w="full" position="relative">
      <TabsList
        w="full"
        justifyContent="flex-start"
        rounded="0"
        borderBottom="base"
        bg="transparent"
        p="0"
      >
        <TabsTrigger className={triggerStyle} value="tab1">
          Tab1
        </TabsTrigger>
        <TabsTrigger className={triggerStyle} value="tab2">
          Tab2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}
