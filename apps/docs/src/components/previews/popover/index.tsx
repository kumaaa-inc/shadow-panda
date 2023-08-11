'use client'

import { css } from '@shadow-panda/styled-system/css'
import { muted } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className={css({ w: '80' })}>
        <div className={css({ display: 'grid', gap: '4' })}>
          <div className={css({ spaceY: '2' })}>
            <h4 className={css({ fontWeight: 'medium', leading: 'none' })}>
              Dimensions
            </h4>
            <p className={muted()}>Set the dimensions for the layer.</p>
          </div>
          <div className={css({ display: 'grid', gap: '2' })}>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '3',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className={css({ gridColumn: '2', h: '8' })}
              />
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '3',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className={css({ gridColumn: '2', h: '8' })}
              />
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '3',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className={css({ gridColumn: '2', h: '8' })}
              />
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '3',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className={css({ gridColumn: '2', h: '8' })}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
