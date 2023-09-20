import * as React from 'react'
import { css } from '@shadow-panda/styled-system/css'
import * as WrappedTabs from './wrapper'

type TabProps = React.ComponentProps<typeof WrappedTabs.TabsContent>
type TabElement = React.ReactElement<TabProps> | false | null | undefined
type TabComponent = (props: Omit<TabProps, 'value'>) => JSX.Element

export interface TabsProps {
  items: string[]
  defaultIndex?: number
  storageKey?: string
  children: TabElement | TabElement[]
}

// `@theguild/remark-npm2yarn` -compatible tabs
export const Tabs = ({ items, storageKey, defaultIndex, children }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(String(defaultIndex ?? 0))

  React.useEffect(() => {
    if (!storageKey) {
      // Do not listen storage events if there is no storage key
      return
    }

    function fn(event: StorageEvent) {
      if (event.key === storageKey) {
        setSelectedIndex(event.newValue ?? '0')
      }
    }

    const index = localStorage.getItem(storageKey)
    setSelectedIndex(index ?? '0')

    window.addEventListener('storage', fn)
    return () => {
      window.removeEventListener('storage', fn)
    }
  }, [storageKey])

  const handleChange = React.useCallback(
    (index: string) => {
      if (storageKey) {
        localStorage.setItem(storageKey, index)

        window.dispatchEvent(new StorageEvent('storage', { key: storageKey, newValue: index }))
        return
      }
      setSelectedIndex(index)
    },
    [storageKey],
  )

  // Map children and add value prop
  const tabContent = React.Children.map(children, (child, i) => {
    return React.isValidElement(child) ? React.cloneElement(child, { value: `${i}` }) : null
  })

  return (
    <WrappedTabs.Tabs value={selectedIndex} onValueChange={handleChange}>
      <WrappedTabs.TabsList
        className={css({
          overflowX: 'auto',
          _scrollbar: {
            display: 'none',
          },
        })}
      >
        {items.map((item, i) => (
          <WrappedTabs.TabsTrigger key={i} value={`${i}`}>
            {item}
          </WrappedTabs.TabsTrigger>
        ))}
      </WrappedTabs.TabsList>
      {tabContent}
    </WrappedTabs.Tabs>
  )
}

export const Tab = WrappedTabs.TabsContent as TabComponent
