import { styled } from '@shadow-panda/styled-system/jsx'
import * as BaseTabs from '@/components/ui/tabs'

export const Tabs = styled(BaseTabs.Tabs, {
  base: {
    position: 'relative',
    mt: '6',
    w: 'full',
  },
})

export const TabsList = styled(BaseTabs.TabsList, {
  base: {
    w: 'full',
    justifyContent: 'flex-start',
    rounded: 'none',
    borderBottom: 'base',
    bg: 'transparent',
    p: '0',
  },
})

export const TabsTrigger = styled(BaseTabs.TabsTrigger, {
  base: {
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
  },
})

export const TabsContent = styled(BaseTabs.TabsContent, {
  base: {
    position: 'relative',

    '& h3.font-heading': {
      fontFamily: 'base',
      fontWeight: 'semibold',
    },
  },
})
