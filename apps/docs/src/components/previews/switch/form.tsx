'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Flex } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/components/ui/toast/use-toast'

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})

export default function Example() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
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
        className={css({ display: 'flex', flexDir: 'column', gap: '8', w: 'full' })}
      >
        <Flex flexDir="column" gap="4">
          <h3 className={css({ textStyle: 'lg', fontWeight: 'medium' })}>Email Notifications</h3>

          <Flex flexDir="column" gap="4">
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  rounded="lg"
                  border="base"
                  p="4"
                  gap="3"
                >
                  <Flex flexDir="column" gap="0.5">
                    <FormLabel textStyle="md">Marketing emails</FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </Flex>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  rounded="lg"
                  border="base"
                  p="4"
                  gap="3"
                >
                  <Flex flexDir="column" gap="0.5">
                    <FormLabel textStyle="md">Security emails</FormLabel>
                    <FormDescription>Receive emails about your account security.</FormDescription>
                  </Flex>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Flex>
        </Flex>
        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </form>
    </Form>
  )
}
