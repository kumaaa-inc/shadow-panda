import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'
import { Table } from '@tanstack/react-table'
import { css } from '@shadow-panda/styled-system/css'
import { Flex, Box } from '@shadow-panda/styled-system/jsx'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <Flex align="center" justify="space-between" px="2">
      <Box flex="1" textStyle="sm" color="muted.foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </Box>
      <Flex align="center" gap="6" lg={{ gap: '8' }}>
        <Flex align="center" gap="2">
          <p className={css({ textStyle: 'sm', fontWeight: 'medium' })}>Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger h="8" w="70px">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Flex>
        <Flex w="100px" align="center" justify="center" textStyle="sm" fontWeight="medium">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </Flex>
        <Flex align="center" gap="2">
          <Button
            variant="outline"
            display="none"
            h="8"
            w="8"
            p="0"
            lg={{ display: 'flex' }}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className={css({ srOnly: true })}>Go to first page</span>
            <ChevronsLeftIcon className={icon()} />
          </Button>
          <Button
            variant="outline"
            h="8"
            w="8"
            p="0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className={css({ srOnly: true })}>Go to previous page</span>
            <ChevronLeftIcon className={icon()} />
          </Button>
          <Button
            variant="outline"
            h="8"
            w="8"
            p="0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className={css({ srOnly: true })}>Go to next page</span>
            <ChevronRightIcon className={icon()} />
          </Button>
          <Button
            variant="outline"
            display="none"
            h="8"
            w="8"
            p="0"
            lg={{ display: 'flex' }}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className={css({ srOnly: true })}>Go to last page</span>
            <ChevronsRightIcon className={icon()} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
