import { Field } from "@/components/Field";
import { Cell } from "@tanstack/react-table";
import { v4 as uuidV4 } from 'uuid'

type Props<T> = {
    cell: Cell<T, any>
}

export default function TableMonthColumn<T>({ cell }: Props<T>) {
    return (
        <div className="flex gap-4 items-center justify-center" key={`${cell.id}-${cell.column}`}>
            <Field.Checkbox id={`desc-${uuidV4()}`} defaultChecked={cell.getValue()} label="" name="desc" />
        </div>
    )
}
