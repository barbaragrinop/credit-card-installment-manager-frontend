export function translateMonth(month: string) {
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

export function getMonthByNumber(month: number) {
    switch (month) {
        case 1:
            return 'jan'
        case 2:
            return 'fev'
        case 3:
            return 'mar'
        case 4:
            return 'abr'
        case 5:
            return 'mai'
        case 6:
            return 'jun'
        case 7:
            return 'jul'
        case 8:
            return 'ago'
        case 9:
            return 'set'
        case 10:
            return 'out'
        case 11:
            return 'nov'
        case 12:
            return 'dez'
        default:
            return ''
    }
}