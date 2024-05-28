import { Card } from "@/types/credit-card";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

// type Props = {
//     onEdit: (card: Card) => void;
//     onDelete: (card: Card) => void;
// }

// export function useCardTableColumn({onDelete, onEdit}: Props) {
    export function useCardTableColumn() {

    const columns = useMemo<ColumnDef<Card>[]>(() => {
        return [
            {
                header: "Nome",
                accessorKey: "name",
            },
            {
                header: "Data de vencimento",
                accessorKey: "dueDay",
            },
            {
                header: "Data de vencimento",
                accessorKey: "id",
            },
            {
                header: "Data de vencimento",
                accessorKey: "cardBrand",
            },
            {
                header: "Ações",
                accessorKey: "actions",
                cell: ({ row }) => {
                    // console.log('row', row)
                    return (
                        <div className="flex gap-4 justify-center">
                            <BiTrash className="border text-3xl p-1 rounded bg-cyan-800 cursor-pointer text-white"  />
                            <BiEdit className="border text-3xl p-1 rounded bg-cyan-800 cursor-pointer text-white" />
                        </div>
                    );
                },
            },
        ]
    }, [])

    return {
        columns
    }
}