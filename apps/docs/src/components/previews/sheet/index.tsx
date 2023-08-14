import { css } from '@shadow-panda/styled-system/css'
import { Grid } from '@shadow-panda/styled-system/jsx'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <Grid gap="4" py="4">
          <Grid gridTemplateColumns="4" gap="4" alignItems="center">
            <Label className={css({ textAlign: 'right' })} htmlFor="name">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" gridColumn="3" />
          </Grid>
          <Grid gridTemplateColumns="4" gap="4" alignItems="center">
            <Label htmlFor="username" className={css({ textAlign: 'right' })}>
              Username
            </Label>
            <Input id="username" value="@peduarte" gridColumn="3" />
          </Grid>
        </Grid>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
