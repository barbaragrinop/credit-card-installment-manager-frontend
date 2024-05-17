import { AccessorKeyColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import TableResizer from "./components/table-resizer"

type User = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
}

const DATA: User[] = [
    {
        firstName: "Tanner",
        lastName: "Linsley",
        age: 33,
        visits: 100,
        progress: 50,
        status: "Married"
    },
    {
        firstName: "Kevin",
        lastName: "Vandy",
        age: 27,
        visits: 200,
        progress: 100,
        status: "Single"
    }
]

const columns = [
    {
        accessorKey: 'firstName',
        header: 'First Name',
        cell: (info: any) => info.getValue()
    },
    {
        accessorKey: 'lastname',
        header: 'Last Name',
        cell: (info: any) => info.getValue()
    },
    {
        accessorKey: 'age',
        header: 'Age',
        cell: (info: any) => info.getValue()
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: (info: any) => info.getValue()
    }
]

function Table() {

    const [data, setData] = useState<User[]>(DATA);

    const columnHelper = createColumnHelper<User>();

    const columns: AccessorKeyColumnDef<User, string>[] = useMemo(() => {
        return [
            columnHelper.accessor('firstName', {
                cell: info => info.getValue(),

            }),
            columnHelper.accessor('lastName', {
                cell: info => info.getValue(),
                footer: info => info.column.id,
            })
        ]
    }, [])

    const { getHeaderGroups, getRowModel, getTotalSize } = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: "onChange"
    })

    return (
        <div className="p-2">
            <table width={getTotalSize()}>
                <thead className="">
                    {getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} >
                            {headerGroup.headers.map(header => (
                                <th className="border border-gray-900 relative" key={header.id} style={{ width: header.getSize() }}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}

                                    <TableResizer 
                                        isResizing={header.column.getIsResizing()}
                                        onMouseDown={header.getResizeHandler()}
                                        onTouchStart={header.getResizeHandler()}
                                    />

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {getRowModel().rows.map(row => (
                        <tr key={row.id} className="border border-gray-900">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="border border-gray-900" style={{ width: cell.column.getSize() }}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Table
