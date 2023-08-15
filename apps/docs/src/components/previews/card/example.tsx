import { BellRing, Check } from 'lucide-react'
import { Grid, Flex } from '@shadow-panda/styled-system/jsx'
import { css } from '@shadow-panda/styled-system/css'
import { small, muted, icon } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

export default function Example() {
  return (
    <Card w="380px">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent display="grid" gap="4">
        <Flex alignItems="center" gap="4" rounded="md" border="base" p="4">
          <BellRing />
          <Flex flexDirection="column" flex={1} gap="1">
            <p className={small()}>Push Notifications</p>
            <p className={muted()}>Send notifications to device.</p>
          </Flex>
          <Switch />
        </Flex>
        <div>
          {notifications.map((notification, index) => (
            <Grid
              key={index}
              mb="4"
              gridTemplateColumns="25px 1fr"
              alignItems="flex-start"
              gap="0"
              pb="4"
              _last={{
                mb: '0',
                pb: '0',
              }}
            >
              <span
                className={css({
                  display: 'flex',
                  h: '2',
                  w: '2',
                  translateY: '1',
                  rounded: 'full',
                  bg: 'sky.500',
                })}
              />
              <Flex flexDirection="column" gap="1">
                <p className={small()}>{notification.title}</p>
                <p className={muted()}>{notification.description}</p>
              </Flex>
            </Grid>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button w="full">
          <Check className={icon()} /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
