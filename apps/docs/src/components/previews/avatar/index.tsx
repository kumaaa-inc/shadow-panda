import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/nanopx.png" alt="@nanopx" />
      <AvatarFallback>NP</AvatarFallback>
    </Avatar>
  )
}
