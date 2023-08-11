import { BellRing, Check } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { small, muted } from '@shadow-panda/styled-system/recipes'
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
    <Card className={css({ w: '380px' })}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className={css({ display: 'grid', gap: '4' })}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            spaceX: '4',
            rounded: 'md',
            border: 'base',
            p: '4',
          })}
        >
          <BellRing />
          <div
            className={css({
              flex: 1,
              spaceY: '1',
            })}
          >
            <p className={small()}>Push Notifications</p>
            <p className={muted()}>Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={css({
                mb: '4',
                display: 'grid',
                gridTemplateColumns: '25px 1fr',
                alignItems: 'start',
                pb: '4',
                _last: {
                  mb: '0',
                  pb: '0',
                },
              })}
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
              <div className={css({ spaceY: '1' })}>
                <p className={small()}>{notification.title}</p>
                <p className={muted()}>{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className={css({ w: 'full' })}>
          <Check className={css({ mr: '2', h: '4', w: '4' })} /> Mark all as
          read
        </Button>
      </CardFooter>
    </Card>
  )
}
