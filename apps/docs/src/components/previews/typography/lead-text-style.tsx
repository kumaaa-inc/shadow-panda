import { css } from '@shadow-panda/styled-system/css'

export default function Example() {
  return (
    <p className={css({ textStyle: 'lead' })}>
      A modal dialog that interrupts the user with important content and expects a response.
    </p>
  )
}
