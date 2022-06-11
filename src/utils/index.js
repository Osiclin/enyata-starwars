const convertDate = (date) => {
    console.log(date)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'short'})
}

export { convertDate }