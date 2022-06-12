const convertDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB')
}

export { convertDate }