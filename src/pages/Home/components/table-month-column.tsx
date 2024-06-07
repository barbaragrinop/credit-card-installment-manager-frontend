import { Purchase } from "@/types/purchase";
import { getMonthByNumber } from "@/utils/months";
import { Cell } from "@tanstack/react-table";
import classNames from "classnames";
import { format } from "date-fns";
import { BiCheck, BiMoney, BiX } from "react-icons/bi";

type Props = {
    cell: Cell<Purchase, any>
}

export default function TableMonthColumn({ cell }: Props) {
    const columnName = cell.column.id
    const cellMonthValue = cell.row.original.months[columnName as keyof Purchase['months']]

    let currentMonth = format(new Date(), 'MMM')
    let todaysMonthAsNumber = Number(format(new Date(), 'MM'))
    
    const todayDay = Number(format(new Date(), 'dd'));
    const cardDueDay = cell.row.original.card.dueDay;

    if(todayDay > cardDueDay) {
        let nextMonth = todaysMonthAsNumber++;
        currentMonth = getMonthByNumber(nextMonth)
    }


    return (
        <div className={classNames("flex gap-4 items-center justify-center w-full h-full", {
            'bg-cyan-800/25': currentMonth === columnName
        })} key={`${cell.id}-${cell.column}`}>
            {cellMonthValue == undefined && (
                <BiX />
            )}
            {cellMonthValue ? (
                <div className={classNames("flex items-center justify-center w-5 h-5 rounded relative", {
                    'bg-green-500': cellMonthValue.isPaid,
                    'bg-red-500': !cellMonthValue.isPaid
                })}>
                    {cellMonthValue.isPaid ? (
                        <BiCheck color="white" />
                    ) : (
                        <BiX color="white" />
                    )}
                </div>
            ) : (<></>)}
        </div>
    )
}
