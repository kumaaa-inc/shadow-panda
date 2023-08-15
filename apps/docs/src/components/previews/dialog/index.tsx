'use client'

import { Grid } from '@shadow-panda/styled-system/jsx'
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
      <DialogContent sm={{ maxW: '425px' }}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Grid gap="4" py="4">
          <Grid gridTemplateColumns="4" alignItems="center" gap="4">
            <Label htmlFor="name" textAlign="right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" gridColumn="3" onChange={() => {}} />
          </Grid>
          <Grid gridTemplateColumns="4" alignItems="center" gap="4">
            <Label htmlFor="username" textAlign="right">
              Name
            </Label>
            <Input id="username" value="@peduarte" gridColumn="3" onChange={() => {}} />
          </Grid>
        </Grid>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
