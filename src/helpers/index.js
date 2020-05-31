/**
 * 
 * Returns true is data provided is empty 
 */
export const isEmpty = (data) => {
    if (!Array.isArray(data) || !data.length) {
        return true
    }
    else return false
}
/**
 * 
 * this function is used for parsing data from the api so if api changes ui does'nt break 
 */
export function parseHoliday(data) {
    if (!isEmpty(data && data.data)) {
        return data.data
    }
    return []
}