'use client'

import * as React from 'react'
import { DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { command, commandDialog } from '@shadow-panda/styled-system/recipes'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const { withProvider, withContext } = createStyleContext(command)

const InputWrapper = withContext(styled('div'), 'inputWrapper')
const SearchIcon = withContext(Search, 'inputSearch')

const BaseCommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <InputWrapper cmdk-input-wrapper="">
    <SearchIcon />
    <CommandPrimitive.Input ref={ref} className={className} {...props} />
  </InputWrapper>
))

BaseCommandInput.displayName = CommandPrimitive.Input.displayName

export const Command = withProvider(styled(CommandPrimitive), 'root')
export const CommandInput = withContext(styled(BaseCommandInput), 'input')
export const CommandList = withContext(styled(CommandPrimitive.List), 'list')
export const CommandEmpty = withContext(styled(CommandPrimitive.Empty), 'empty')
export const CommandGroup = withContext(styled(CommandPrimitive.Group), 'group')
export const CommandSeparator = withContext(styled(CommandPrimitive.Separator), 'separator')
export const CommandItem = withContext(styled(CommandPrimitive.Item), 'item')
export const CommandShortcut = withContext(styled('span'), 'shortcut')

export interface CommandDialogProps extends DialogProps {}

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  const styles = commandDialog()

  return (
    <Dialog {...props}>
      <DialogContent className={styles.content}>
        <Command className={styles.command}>{children}</Command>
      </DialogContent>
    </Dialog>
  )
}
