import { Card } from "@/types/credit-card";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

type Props = {
    onEdit: (card: Card) => void;
    onDelete: (cardId: Card) => void;
}

export function useCardTableColumn({ onEdit, onDelete }: Props) {

    const columns = useMemo<ColumnDef<Card>[]>(() => {
        return [
            {
                header: "Nome",
                accessorKey: "name",
            },
            {
                header: "Dia do vencimento",
                accessorKey: "dueDay",
            },
            {
                header: "Bandeira  do cartão",
                accessorKey: "cardBrand",
            },
            {
                header: "Ações",
                accessorKey: "actions",
                cell: ({ row }) => {
                    return (
                        <div className="flex gap-4 justify-center">
                            <BiEdit className="border text-3xl p-1 rounded bg-cyan-800 cursor-pointer text-white" onClick={() => onEdit(row.original)} />
                            <BiTrash className="border text-3xl p-1 rounded bg-cyan-800 cursor-pointer text-white" onClick={() => onDelete(row.original)} />
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