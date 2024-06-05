function FieldErrorMessage({message}: {message: string}){
    return (
        message && ( 
            <p className="text-red-500 text-sm">{message}</p>
        )
    )
}

export default FieldErrorMessage