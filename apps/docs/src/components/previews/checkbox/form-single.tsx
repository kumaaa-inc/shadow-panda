'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
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
} from '@/components/ui/form'
import { toast } from '@/components/ui/toast/use-toast'

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})

export default function Example() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
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
          name="mobile"
          render={({ field }) => (
            <FormItem
              display="flex"
              alignItems="flex-start"
              flexDir="row"
              gap="3"
              rounded="md"
              border="base"
              p="4"
            >
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1',
                  leading: 'none',
                })}
              >
                <FormLabel>Use different settings for my mobile devices</FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{' '}
                  <Link href="#example">mobile settings</Link> page.
                </FormDescription>
              </div>
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
