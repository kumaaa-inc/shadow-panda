import * as React from 'react'
import { createStyleContext } from '@shadow-panda/style-context'
import { styled } from '@shadow-panda/styled-system/jsx'
import { table } from '@shadow-panda/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(table)

const TableContainer = withContext(styled('div'), 'container')

const BaseTable = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  (props, ref) => (
    <TableContainer>
      <table ref={ref} {...props} />
    </TableContainer>
  ),
)
BaseTable.displayName = 'Table'

export const Table = withProvider(styled(BaseTable), 'root')
export const TableHeader = withContext(styled('thead'), 'header')
export const TableBody = withContext(styled('tbody'), 'body')
export const TableFooter = withContext(styled('tfoot'), 'footer')
export const TableHead = withContext(styled('th'), 'head')
export const TableRow = withContext(styled('tr'), 'row')
export const TableCell = withContext(styled('td'), 'cell')
export const TableCaption = withContext(styled('caption'), 'caption')
