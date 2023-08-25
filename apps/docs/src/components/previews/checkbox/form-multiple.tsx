'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Flex } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/toast/use-toast'

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
})

export default function Example() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
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
          name="items"
          render={() => (
            <FormItem gap="4">
              <div>
                <FormLabel textStyle="md">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              <Flex flexDir="column" gap="2">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          display="flex"
                          flexDir="row"
                          alignItems="flex-start"
                          gap="3"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter((value) => value !== item.id),
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel fontWeight="normal">{item.label}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </Flex>
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
