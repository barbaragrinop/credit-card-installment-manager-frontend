import TableMonthColumn from "@/components/Table/components/table-month-column"
import { Installment } from "@/types/purchase"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

export function useHomeTableColumn() {
  const columns = useMemo<ColumnDef<Installment>[]>(() => {
    return [
      {
        accessorKey: 'jan',
        header: 'jan',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'fev',
        header: 'fev',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'mar',
        header: 'mar',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'abr',
        header: 'abr',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'mai',
        header: 'mai',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'jun',
        header: 'jun',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'jul',
        header: 'jul',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'ago',
        header: 'ago',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'set',
        header: 'set',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'out',
        header: 'out',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'nov',
        header: 'nov',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'dez',
        header: 'dez',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      }
    ]
  }, [])

  return {
    columns
  }
}