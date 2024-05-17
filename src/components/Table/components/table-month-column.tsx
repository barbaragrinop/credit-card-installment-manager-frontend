import { Field } from "@/components/Field";
import { Cell } from "@tanstack/react-table";

type Props<T> = {
    cell: Cell<T, any>
}

export default function TableMonthColumn<T>({ cell }: Props<T>) {
    return (
        <div className="flex gap-4 items-center justify-center" key={`${cell.id}-${cell.column}`}>
            <Field.Checkbox id="desc" defaultChecked={cell.getValue()} label="" name="desc" />
        </div>
    )
}
