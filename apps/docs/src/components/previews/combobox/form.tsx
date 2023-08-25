'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { css, cx } from '@shadow-panda/styled-system/css'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { toast } from '@/components/ui/toast/use-toast'

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] as const

const FormSchema = z.object({
  language: z.string({
    required_error: 'Please select a language.',
  }),
})

export default function Example() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className={css({ mt: '2', w: '340px', rounded: 'md', bg: 'slate.950', p: '4' })}>
          <code className={css({ color: 'white' })}>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={css({ display: 'flex', flexDir: 'column', gap: '8' })}
      >
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem display="flex" flexDir="column">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      w="200px"
                      justifyContent="space-between"
                      color={!field.value ? 'muted.foreground' : undefined}
                    >
                      {field.value
                        ? languages.find((language) => language.value === field.value)?.label
                        : 'Select language'}
                      <ChevronsUpDown className={icon({ left: 'auto', dimmed: true })} />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent w="200px" p="0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue('language', language.value)
                          }}
                        >
                          <Check
                            className={cx(
                              icon({ right: 'sm' }),
                              css({
                                opacity: language.value === field.value ? '1' : '0',
                              }),
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </form>
    </Form>
  )
}
