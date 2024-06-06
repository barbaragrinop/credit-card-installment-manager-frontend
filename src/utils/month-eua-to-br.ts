export function translateMonth(month: string){
    switch (month) {
        case 'jan':
            return 'jan'
        case 'fev':
            return 'fev'
        case 'mar':
            return 'mar'
        case 'abr':
            return 'abr'
        case 'mai':
            return 'mai'
        case 'jun':
            return 'jun'
        case 'jul':
            return 'jul'
        case 'ago':
            return 'ago'
        case 'set':
            return 'set'
        case 'out':
            return 'out'
        case 'nov':
            return 'nov'
        case 'dez':
            return 'dez'
        default:
            return 'jan'
    }
}