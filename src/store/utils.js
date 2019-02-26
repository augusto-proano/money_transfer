export const getFullDate = date => {
  const dateFixer = dateMethod =>
    dateMethod.toString().length > 1 ? dateMethod : `0${dateMethod}`

  const year = date.getFullYear()
  const month = dateFixer(date.getMonth() + 1)
  const day = dateFixer(date.getDate())

  return `${year}${month}${day}`
}
