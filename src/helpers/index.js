export const isEmpty = (data) => {
    if (!Array.isArray(data) || !data.length) {
        return true
    }
    else return false
}