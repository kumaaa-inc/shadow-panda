import * as React from 'react'
import * as WrappedTabs from './wrapper'

export interface TabsProps {
  items: string[]
  defaultIndex?: number
  storageKey?: string
  children: React.ReactNode
}

// `@theguild/remark-npm2yarn` -compatible tabs
export const Tabs = ({
  items,
  storageKey,
  defaultIndex,
  children,
}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex ?? 0)

  React.useEffect(() => {
    if (!storageKey) {
      // Do not listen storage events if there is no storage key
      return
    }

    function fn(event: StorageEvent) {
      if (event.key === storageKey) {
        setSelectedIndex(Number(event.newValue))
      }
    }

    const index = Number(localStorage.getItem(storageKey))
    setSelectedIndex(Number.isNaN(index) ? 0 : index)

    window.addEventListener('storage', fn)
    return () => {
      window.removeEventListener('storage', fn)
    }
  }, [])

  const handleChange = React.useCallback((index: number) => {
    if (storageKey) {
      const newValue = String(index)
      localStorage.setItem(storageKey, newValue)

      window.dispatchEvent(
        new StorageEvent('storage', { key: storageKey, newValue }),
      )
      return
    }
    setSelectedIndex(index)
  }, [])

  // Map children and add value prop
  const tabContent = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, { value: i })
  })

  return (
    <WrappedTabs.Tabs value={selectedIndex} onValueChange={handleChange}>
      <WrappedTabs.TabsList>
        {items.map((item, i) => (
          <WrappedTabs.TabsTrigger key={i} value={i}>
            {item}
          </WrappedTabs.TabsTrigger>
        ))}
      </WrappedTabs.TabsList>
      {tabContent}
    </WrappedTabs.Tabs>
  )
}

export const Tab = WrappedTabs.TabsContent
