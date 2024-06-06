
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"
import TableMonthColumn from "../components/table-month-column"
import { Purchase } from "../../../types/purchase"


export function useHomeTableColumn() {
  const columns = useMemo<ColumnDef<Purchase>[]>(() => {
    return [
      {
        
        accessorKey: 'jan',
        header: 'jan',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        } ,
        
      },
      {
        accessorKey: 'feb',
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
        accessorKey: 'apr',
        header: 'abr',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'may',
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
        accessorKey: 'aug',
        header: 'ago',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'sep',
        header: 'set',
        cell: ({ cell }) => {
          return (
            <TableMonthColumn cell={cell} />
          )
        }
      },
      {
        accessorKey: 'oct',
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
        accessorKey: 'dec',
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