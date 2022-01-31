import moment from "moment";

export const formatDate = (date) => {
    moment.locale('en');
    return moment(date).format('LL')
}

export const getDay = (value) => {
    return value.getDate()
}

export const getMonth = (value) => {
    return value.toDateString().split(" ")[1]
}

export const getYear = (value) => {
    return value.getFullYear()
}