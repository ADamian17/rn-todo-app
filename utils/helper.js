export const formatDate = (date) => date.toString();

export const getDay = (value) => {
    return value.getDate()
}

export const getMonth = (value) => {
    return value.toDateString().split(" ")[1]
}

export const getYear = (value) => {
    return value.getFullYear()
}