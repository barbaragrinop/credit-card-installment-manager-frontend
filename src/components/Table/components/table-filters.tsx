import { Field } from '@/components/Field'

type Props = {
  setColumnFilters: any
}

export default function TableFilters({ setColumnFilters }: Props) {

  function onFilterChange(id: string, value: any) {

    setColumnFilters((prev: any) =>
      prev
        ? [...prev.filter((f: any) => f.id !== id), { id, value }]
        : [{ id, value }]

    );
  }

  return (
    <div className="flex">
      <span>Filtro</span>
      <Field.Text
        id="filter"
        name="filter"
        label="Filtro"
        onChange={(e) => onFilterChange('firstName', e.target.value)}
      />
      <div className="relative">

      </div>
    </div>
  )
}
