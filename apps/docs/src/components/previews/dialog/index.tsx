'use client'

import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className={css({ sm: { maxW: '425px' } })}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className={css({ display: 'grid', gap: '4', py: '4' })}>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '4',
              alignItems: 'center',
              gap: '4',
            })}
          >
            <Label htmlFor="name" className={css({ textAlign: 'right' })}>
              Name
            </Label>
            <Input
              id="name"
              value="Pedro Duarte"
              className={css({ gridColumn: '3' })}
              onChange={() => {}}
            />
          </div>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '4',
              alignItems: 'center',
              gap: '4',
            })}
          >
            <Label htmlFor="username" className={css({ textAlign: 'right' })}>
              Name
            </Label>
            <Input
              id="username"
              value="@peduarte"
              className={css({ gridColumn: '3' })}
              onChange={() => {}}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
