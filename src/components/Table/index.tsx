import {  ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react"
import { TableComponents } from "./components"
import { Field } from "../Field"
import { purchasesMock } from "@/utils/mock-data"
import { Purchase } from "@/types/purchase"

type Props<T> = {
    columns: ColumnDef<T, any>[], 
    data: T[]
};

const columns: ColumnDef<Purchase, any>[] = [
    {
        accessorKey: 'firstName',
        header: 'descrição',
        cell: (info: any) => info.getValue()
    },
    {
        accessorKey: 'jan',
        header: 'jan',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'fev',
        header: 'fev',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'mar',
        header: 'mar',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },  
    {
        accessorKey: 'abr',
        header: 'abr',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'mai',
        header: 'mai',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'jun',
        header: 'jun',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'jul',
        header: 'jul',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'ago',
        header: 'ago',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'set',
        header: 'set',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'out',
        header: 'out',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'nov',
        header: 'nov',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
    {
        accessorKey: 'dez',
        header: 'dez',
        cell: (info: any) => (
            <Field.Checkbox id="desc"  label="" name="desc" />
        )
    },
]

function Table<T>({ columns, data }: Props<T>) {

    const [columnFilters, setColumnFilters] = useState([])

    const { getHeaderGroups, getRowModel, getTotalSize } = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: "onChange",
        state: {
            columnFilters
        },
        getFilteredRowModel: getFilteredRowModel()
    })

    return (
        <div className="p-2">
            <TableComponents.Filters 
                setColumnFilters={setColumnFilters}
            />

            <table width={getTotalSize()} className="w-full mt-7">
                <thead >
                    {getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} >
                            {headerGroup.headers.map(header => (
                                <th className="border border-gray-900 relative" key={header.id} style={{ width: header.getSize() }}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}

                                    <TableComponents.Resizer 
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
                            {row.getVisibleCells().map(cell => {
                                console.log('cell', cell)
                                return (
                                    <td key={cell.id} className="border border-gray-900" style={{ width: cell.column.getSize() }}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Table
