export const formatDate = (date) => date.toString();

export const getDay = (value) => {
    var dates = new Date(value)

    return dates.getDate()
}

export const getMonth = (value) => {
    var dates = new Date(value)

    return dates.toDateString().split(" ")[1]
}

export const getYear = (value) => {
    var dates = new Date(value)

    return dates.getFullYear()
}