import { AccessorKeyColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react"

type User = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
}

function Table() {

    const [data, setData] = useState<User[]>([
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
    }]);

    const columnHelper = createColumnHelper<User>();

    const columns: AccessorKeyColumnDef<User, string>[] = useMemo(() => {
        return [
            columnHelper.accessor('firstName', {
                cell: info => info.getValue(),
                footer: info => info.column.id,
            }),
            columnHelper.accessor('lastName', {
                cell: info => info.getValue(),
                footer: info => info.column.id,
            })
        ]
    }, [])

    const tableData = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        enableSorting: true
    })

    return (
        <div className="p-2">
            <table>
                <thead>
                    {tableData.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {tableData.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
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
