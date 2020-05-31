export const isEmpty = (data) => {
    if (!Array.isArray(data) || !data.length) {
        return true
    }
    else return false
}

export function parseHoliday(data) {
    if (!isEmpty(data && data.data)) {
        return data.data
    }
    return []
}