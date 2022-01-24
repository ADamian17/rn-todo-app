export const IsValidDate = (value) => {
    const dateReg = /^\d{2}\/\d{2}\/\d{4}$/
    
    return dateReg.test(value);
}