import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

const iconStyle = css({ mr: '2', h: '4', w: '4' })

export default function Example() {
  return (
    <Command
      className={css({ rounded: 'lg', border: 'base', boxShadow: 'md' })}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className={iconStyle} />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className={iconStyle} />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className={iconStyle} />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className={iconStyle} />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className={iconStyle} />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className={iconStyle} />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
