import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { icon } from '@shadow-panda/styled-system/recipes'
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

export default function Example() {
  return (
    <Command rounded="lg" border="base" boxShadow="md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className={icon()} />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className={icon()} />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className={icon()} />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className={icon()} />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className={icon()} />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className={icon()} />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
