import { FieldErrors } from 'react-hook-form'

type Prop<T extends FieldErrors> = {
    error: T
    field: keyof T
}

function FieldErrorMessage<T extends FieldErrors>({ error, field }: Prop<T>) {
    return (
        error && error[field]?.message && ( // Only render if error exists and has the field
            <span className="text-red-500 text-sm">{error[field]?.message.toString()}</span>
        )
    )
}

export default FieldErrorMessage