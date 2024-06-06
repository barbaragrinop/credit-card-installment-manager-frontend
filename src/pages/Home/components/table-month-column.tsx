import { Field } from "@/components/Field";
import { CommonField } from "@/components/Field/common";
import { Purchase } from "@/types/purchase";
import { Cell } from "@tanstack/react-table";
import { v4 as uuidV4 } from 'uuid'

type Props = {
    cell: Cell<Purchase, any>
}

export default function TableMonthColumn({ cell }: Props) {
    console.log('cell', cell)

    const columnName = cell.column.id
    const currentMonthValue = cell.row.original.months[columnName as keyof Purchase['months']]
   

    return (
        <div className="flex gap-4 items-center justify-center" key={`${cell.id}-${cell.column}`}>
            <CommonField.Checkbox id={`desc-${uuidV4()}`} defaultChecked={currentMonthValue} label="" name="desc" />
        </div>
    )
}
