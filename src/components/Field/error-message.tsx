function FieldErrorMessage({message}: {message: string}){
    return (
        message && ( 
            <p className="text-red-600 text-[12px]">*{message}</p>
        )
    )
}

export default FieldErrorMessage