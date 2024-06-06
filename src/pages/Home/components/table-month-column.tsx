import { Purchase } from "@/types/purchase";
import { getMonthByNumber } from "@/utils/months";
import { Cell } from "@tanstack/react-table";
import classNames from "classnames";
import { BiCheck, BiMoney, BiX } from "react-icons/bi";

type Props = {
    cell: Cell<Purchase, any>
}

export default function TableMonthColumn({ cell }: Props) {
    const columnName = cell.column.id
    console.log('columnName', columnName)
    console.log('columnName', columnName)
    const currentMonthValue = cell.row.original.months[columnName as keyof Purchase['months']]

    const todaysMonth = getMonthByNumber(new Date().getMonth() + 1)
    console.log('todaysMonth', todaysMonth)



    console.log('cell.row.original', cell.row.original)
    console.groupEnd();

    return (
        <div className={classNames("flex gap-4 items-center justify-center w-full h-full", {
            'bg-cyan-800/25': todaysMonth === columnName,
        })} key={`${cell.id}-${cell.column}`}>
            {currentMonthValue == undefined && (
                <BiX />
            )}
            {currentMonthValue ? (
                <div className={classNames("flex items-center justify-center w-5 h-5 rounded relative", {
                    'bg-green-500': currentMonthValue.isPaid,
                    'bg-red-500': !currentMonthValue.isPaid
                })}>
                    {currentMonthValue.isPaid ? (
                        <BiCheck color="white" />
                    ) : (
                        <BiX color="white" />
                    )}
                </div>
            ) : (<></>)}
        </div>
    )
}
