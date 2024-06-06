import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react"
import { TableComponents } from "./components"

type Props<T> = {
    columns: ColumnDef<T, any>[],
    data: T[],
    filterActive?: boolean
    isLoading?: boolean
};


function Table<T>({ columns, data, filterActive, isLoading  }: Props<T>) {

    const [columnFilters, setColumnFilters] = useState([])

    const { getHeaderGroups, getRowModel, getTotalSize } = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: "onChange",
        state: { columnFilters },
        getFilteredRowModel: getFilteredRowModel()
    })

    return (

        <div className="p-2">
            {filterActive && (
                <TableComponents.Filters
                    setColumnFilters={setColumnFilters}
                />
            )}

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
                <tbody >
                    {isLoading ? (
                        <tr className="border border-gray-900 ">
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td colSpan={columns.length} key={index} className="py-3 px-2 border border-gray-900 ">
                                    <div key={index} className="animate-pulse flex items-center justify-center  gap-3">
                                        {Array.from({ length: columns.length }).map((_, index) => (
                                            <div className="h-5 w-full bg-gray-300 rounded" key={index}></div>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ) : getRowModel().rows.map(row => (
                        <tr key={row.id} className="border border-gray-900">
                            {row.getVisibleCells().map(cell => {
                                return (
                                    <td key={cell.id} className="border border-gray-900 h-12" style={{ width: cell.column.getSize() }} >
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
